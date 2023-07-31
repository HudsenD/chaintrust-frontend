import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { useAccount, useContractRead } from "wagmi";
import { trustAbi } from "../constants/constants";

type Trust = {
  id: string;
  tokenId: string;
  creator: string;
  beneficiary: string;
};

const GET_TRUSTS = gql`
  query GetTrusts($address: String!) {
    priceTrustMinteds(first: 5, where: { creator: $address }) {
      id
      tokenId
      creator
      beneficiary
    }
    timeTrustMinteds(first: 5, where: { creator: $address }) {
      id
      tokenId
      creator
      beneficiary
    }
  }
`;

const CurrentTrusts = () => {
  const [selectedTokenId, setSelectedTokenId] = useState<string | null>(null);
  const { address } = useAccount();
  const { loading, error, data } = useQuery(GET_TRUSTS, {
    variables: { address },
  });

  const {
    data: trustAddress,
    isError,
    isLoading,
  } = useContractRead({
    address: "0x477A0D6807d401D4aF0bB73f593ecB69C2e8730C",
    abi: trustAbi,
    functionName: "getTrustAddress",
    args: [selectedTokenId],
  });
  //console.log(trustAddress);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Please Connect Wallet!</p>;

  const priceTrustMinteds = data.priceTrustMinteds.map((trust: Trust) => (
    <div key={trust.id} className="p-4 mt-4 bg-white shadow-xl rounded-xl">
      <p>Token ID: {trust.tokenId}</p>
      <p>Creator: {trust.creator}</p>
      <p>Beneficiary: {trust.beneficiary}</p>
      <button
        className="px-4 py-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-700"
        onClick={() => setSelectedTokenId(trust.tokenId)}
      >
        Get Trust Address
      </button>
      {selectedTokenId === trust.tokenId &&
        (typeof trustAddress === "string" ? (
          <p>Trust Address: {trustAddress}</p>
        ) : (
          <p>Trust Address: Unable to display address</p>
        ))}
    </div>
  ));

  const timeTrustMinteds = data.timeTrustMinteds.map((trust: Trust) => (
    <div key={trust.id} className="p-4 mt-4 bg-white shadow-xl rounded-xl">
      <p>Token ID: {trust.tokenId}</p>
      <p>Creator: {trust.creator}</p>
      <p>Beneficiary: {trust.beneficiary}</p>
      <button
        className="px-4 py-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-700"
        onClick={() => setSelectedTokenId(trust.tokenId)}
      >
        Get Trust Address
      </button>
      {selectedTokenId === trust.tokenId &&
        (typeof trustAddress === "string" ? (
          <p>Trust Address: {trustAddress}</p>
        ) : (
          <p>Trust Address: Unable to display address</p>
        ))}
    </div>
  ));

  return (
    <div>
      <p className="mt-2 text-lg font-bold">
        The Trust Address is where you send any assets that you want in the
        trust
      </p>
      <h2 className="mt-2 font-bold">Your Price Trusts</h2>
      {priceTrustMinteds}

      <h2 className="mt-6 font-bold">Your Time Trusts</h2>
      {timeTrustMinteds}
    </div>
  );
};

export default CurrentTrusts;
