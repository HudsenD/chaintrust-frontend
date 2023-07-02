import { useContractRead, useAccount } from "wagmi";
import { ethers } from "ethers";
import { erc20abi } from "../constants/constants";
import { useState, useEffect } from "react";

// Custom hook for checking USDC allowance
export function useCheckUSDCAllowance() {
  const { address } = useAccount();
  const [loading, setLoading] = useState(true);
  const [allowance, setAllowance] = useState("0");

  const { data: allowanceData } = useContractRead({
    address: "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75",
    abi: erc20abi,
    functionName: "allowance",
    args: [address, "0x477A0D6807d401D4aF0bB73f593ecB69C2e8730C"],
  });

  useEffect(() => {
    if (allowanceData) {
      setAllowance(
        ethers.utils.formatUnits(allowanceData as ethers.BigNumber, 6)
      );
      setLoading(false);
      console.log(allowanceData);
      console.log(loading);
    }
  }, [allowanceData]);

  return { allowance, loading };
}
