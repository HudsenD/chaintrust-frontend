import React, { useState, useEffect } from "react";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
  useAccount,
  useContractRead,
} from "wagmi";
import { trustAbi, erc20abi } from "../constants/constants";
import TxAlert from "./TxAlert";
import { ethers } from "ethers";

const NewPriceTrust = () => {
  const { address } = useAccount();
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [txMessage, setTxMessage] = useState<string>("");
  const [beneficiary, setBeneficiary] = useState<string>("");
  const [assetPair, setAssetPair] = useState<string>("");
  const [releasePrice, setReleasePrice] = useState<string>("");
  const [refetchLoading, setRefetchLoading] = useState(false);
  const [insufficientAllowance, setInsufficientAllowance] =
    useState<boolean>(false);

  const { config: approveConfig } = usePrepareContractWrite({
    address: "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75",
    abi: erc20abi,
    functionName: "approve",
    args: [
      "0x477A0D6807d401D4aF0bB73f593ecB69C2e8730C",
      ethers.utils.parseUnits("20", 6).toString(),
    ],
  });

  const approveUSDC = useContractWrite({
    ...approveConfig,
    onSuccess(data) {
      showSuccessMessage("Approval sent");
    },
  });

  const { config: createTrustConfig, error } = usePrepareContractWrite({
    address: "0x477A0D6807d401D4aF0bB73f593ecB69C2e8730C",
    abi: trustAbi,
    functionName: "createPriceTrustFund",
    args: [beneficiary, assetPair, parseFloat(releasePrice) * 100000000],
  });

  const createPriceTrustFund = useContractWrite({
    ...createTrustConfig,
    onSuccess(data) {
      showSuccessMessage("Tx sent");
    },
  });

  const waitForMintTx = useWaitForTransaction({
    hash: createPriceTrustFund?.data?.hash,
    onSuccess(data) {
      showSuccessMessage("Tx confirmed");
    },
  });

  function showSuccessMessage(message: string) {
    setShowSuccess(true);
    setTxMessage(message);
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  }
  useEffect(() => {
    if (error?.message.includes("WERC10: request exceeds allowance")) {
      setInsufficientAllowance(true);
    }
  }, [error]);

  return (
    <div className="w-full">
      <div className="flex justify-center w-full h-auto max-w-screen-lg mx-auto">
        <div className="items-center justify-center w-3/6 p-4 mt-16 shadow-lg bg-primary h-1/2 rounded-xl">
          <div className="text-xl font-bold text-center">
            Create Price-Based Trust
          </div>

          <div className="text-center">Enter Beneficiary Address</div>
          <input
            className="w-full px-3 py-2 mt-2 border-2 border-gray-300 rounded-md"
            placeholder="Beneficiary Address"
            onChange={(event) => setBeneficiary(event.target.value)}
            value={beneficiary}
          />

          <div className="mt-4 text-center">Base Release On</div>
          <select
            className="w-full px-3 py-2 mt-2 border-2 border-gray-300 rounded-md"
            value={assetPair}
            onChange={(e) => setAssetPair(e.target.value)}
          >
            <option value="">Select...</option>
            <option value="BTC/USD">BTC/USD</option>
            <option value="ETH/USD">ETH/USD</option>
            <option value="FTM/USD">FTM/USD</option>
            <option value="LINK/USD">LINK/USD</option>
          </select>

          <div className="mt-4 text-center">Enter USD Release Price</div>
          <input
            className="w-full px-3 py-2 mt-2 border-2 border-gray-300 rounded-md"
            placeholder="Release Price"
            onChange={(event) => {
              const value = event.target.value;
              // Only update the state if the input is a valid number or an empty string
              if (value === "" || /^\d*\.?\d{0,3}$/.test(value)) {
                setReleasePrice(value);
              }
            }}
            value={releasePrice}
          />

          <div className="text-center">
            <button
              className={`btn mt-4 bg-accent text-secondary ${
                beneficiary && assetPair && releasePrice
                  ? "cursor-pointer"
                  : "cursor-not-allowed"
              }`}
              onClick={() =>
                beneficiary &&
                assetPair &&
                releasePrice &&
                (insufficientAllowance
                  ? approveUSDC.write?.()
                  : createPriceTrustFund.write?.())
              }
            >
              {insufficientAllowance ? "Approve USDC" : "Create Trust"}
            </button>
          </div>
        </div>
        {showSuccess && <TxAlert message={txMessage} />}
      </div>
    </div>
  );
};

export default NewPriceTrust;
