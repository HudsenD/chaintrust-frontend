import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { NextApiRequest, NextApiResponse } from "next";
import supabase from "../../utils/supabaseClient";
import { ethers } from "ethers";
import { trustAbi } from "../../constants/constants";

// just need to secure this so not anyone can call it

const provider = new ethers.providers.JsonRpcProvider(
  process.env.FANTOM_MAINNET
);
const contract = new ethers.Contract(
  "0x477A0D6807d401D4aF0bB73f593ecB69C2e8730C",
  trustAbi,
  provider
);

const priceFeedToAssetPair = {
  "0x8e94C22142F4A64b99022ccDd994f4e9EC86E4B4": "BTC/USD",
  "0x11DdD3d147E5b83D01cee7070027092397d63658": "ETH/USD",
  "0xf4766552D15AE4d256Ad41B6cf2933482B0680dc": "FTM/USD",
  "0x221C773d8647BC3034e91a0c47062e26D20d97B4": "LINK/USD",
};

const client = new ApolloClient({
  uri: "https://api.studio.thegraph.com/query/48135/chaintrust-fantom/v0.0.1",
  cache: new InMemoryCache(),
});

const GET_PRICE_TRUSTS = gql`
  query GetPriceTrusts($lastId: String!) {
    priceTrustMinteds(first: 100, where: { id_gt: $lastId }) {
      id
      tokenId
      creator
      beneficiary
      releasePrice
    }
  }
`;

const GET_TIME_TRUSTS = gql`
  query GetTimeTrusts($lastId: String!) {
    timeTrustMinteds(first: 100, where: { id_gt: $lastId }) {
      id
      tokenId
      creator
      beneficiary
      releaseTime
    }
  }
`;

async function queryGraph(query: any, lastId: string) {
  const { data, error } = await client.query({
    query,
    variables: { lastId },
  });

  if (error) {
    console.error("Error fetching trusts:", error);
    throw error;
  }

  return data;
}

async function addTrustToDatabase(trust: any) {
  const { error } = await supabase.from("Trusts").insert([trust]);

  if (error) {
    console.error("Error inserting trust:", error);
    throw error;
  }
}

async function mapTrustData(trust: any, type: "price" | "time"): Promise<any> {
  let assetPair = null;
  if (type === "price") {
    const trustInfo = await contract.getTrustTerms(trust.tokenId);
    const priceFeed = trustInfo.priceFeed;
    assetPair =
      priceFeedToAssetPair[priceFeed as keyof typeof priceFeedToAssetPair];
  }

  return {
    token_id: parseInt(trust.tokenId), // might want to add error check in case of NaN
    trust_type: type,
    release_time: type === "time" ? trust.releaseTime : null,
    release_price: type === "price" ? trust.releasePrice : null,
    asset_pair: assetPair,
    has_released: false, // assuming the trust has not been released when it's created
  };
}

export default async function addTrusts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Fetch the ID of the last trust added to the Supabase database
    const { data: lastTrust, error: lastTrustError } = await supabase
      .from("Trusts")
      .select("id")
      .order("id", { ascending: false })
      .limit(1);

    if (lastTrustError) {
      console.error("Error fetching last trust:", lastTrustError);
      throw lastTrustError;
    }

    const lastId = lastTrust ? lastTrust[0].id : "0";

    // Fetch the latest price trusts from The Graph
    const priceTrusts = await queryGraph(GET_PRICE_TRUSTS, lastId);
    // Fetch the latest time trusts from The Graph
    const timeTrusts = await queryGraph(GET_TIME_TRUSTS, lastId);

    // Process and add price trusts to the database
    for (const trust of priceTrusts.priceTrustMinteds) {
      // Map the trust data to the format required by Supabase
      const mappedTrust = mapTrustData(trust, "price");

      // Add the trust to the Supabase database
      await addTrustToDatabase(mappedTrust);
    }

    // Process and add time trusts to the database
    for (const trust of timeTrusts.timeTrustMinteds) {
      // Map the trust data to the format required by Supabase
      const mappedTrust = mapTrustData(trust, "time");

      // Add the trust to the Supabase database
      await addTrustToDatabase(mappedTrust);
    }

    // Send a response
    res.status(200).json({ message: "Trusts added successfully" });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error message:", error.message);
      console.error("Stack trace:", error.stack);
    }
    res.status(500).json({ error: "An error occurred while adding trusts" });
  }
}
