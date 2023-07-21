import { NextApiRequest, NextApiResponse } from "next";
import supabase from "../config/supabaseClient";
import { ethers } from "ethers";
import { trustAbi } from "../../constants/constants";
import axios from "axios";

const provider = new ethers.providers.JsonRpcProvider(
  process.env.FANTOM_MAINNET
);
const privateKey = process.env.PRIVATE_KEY;

if (!privateKey) {
  throw new Error("Private key is not defined in the environment variables");
}

const wallet = new ethers.Wallet(privateKey, provider);
const contract = new ethers.Contract(
  "0x477A0D6807d401D4aF0bB73f593ecB69C2e8730C",
  trustAbi,
  wallet
);

async function getCurrentPrice(assetPair: string): Promise<number> {
  const asset = assetPair.split("/")[0].toLowerCase(); // get the asset symbol and convert to lowercase
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/simple/price?ids=${asset}&vs_currencies=usd`
  );

  // Check if the response contains the price data
  if (response.data[asset] && response.data[asset].usd) {
    const price = response.data[asset].usd;
    const priceSolidityFormat = price * 10 ** 6;
    return priceSolidityFormat;
  } else {
    throw new Error(`Failed to fetch price for asset pair: ${assetPair}`);
  }
}

export default async function checkTrusts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Fetch all trusts that have not been released
    const { data: trusts, error } = await supabase
      .from("Trusts")
      .select("*")
      .eq("has_released", false);

    if (error) {
      console.error("Error fetching trusts:", error);
      throw error;
    }

    const assetPrices: { [key: string]: number } = {
      "BTC/USD": await getCurrentPrice("BTC/USD"),
      "ETH/USD": await getCurrentPrice("ETH/USD"),
      "FTM/USD": await getCurrentPrice("FTM/USD"),
      "LINK/USD": await getCurrentPrice("LINK/USD"),
    };

    for (const trust of trusts) {
      if (
        trust.trust_type === "time" &&
        Date.now() / 1000 >= trust.release_time
      ) {
        // If the current time is greater than or equal to the release time, release the trust
        try {
          const tx = await contract.releaseTrustFund(trust.token_id, {
            gasPrice: (await provider.getGasPrice()).mul(120).div(100),
          });
          await tx.wait();
          await supabase
            .from("Trusts")
            .update({ has_released: true })
            .eq("id", trust.id);
        } catch (error) {
          console.error(
            `Failed to release time trust ${trust.token_id}:`,
            error
          );
        }
      } else if (
        trust.trust_type === "price" &&
        assetPrices[trust.asset_pair] >= trust.release_price // make sure you factor in the zeros
      ) {
        // If the current price is greater than or equal to the release price, release the trust
        try {
          const tx = await contract.releaseTrustFund(trust.token_id, {
            gasPrice: (await provider.getGasPrice()).mul(120).div(100),
          });
          await tx.wait();
          await supabase
            .from("Trusts")
            .update({ has_released: true })
            .eq("id", trust.id);
        } catch (error) {
          console.error(
            `Failed to release price trust ${trust.token_id}:`,
            error
          );
        }
      }
    }

    res.status(200).json({ message: "Trusts checked successfully" });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while checking trusts" });
  }
}
