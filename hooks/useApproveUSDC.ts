import { usePrepareContractWrite, useContractWrite } from "wagmi";
import { erc20abi } from "../constants/constants";
import { ethers } from "ethers";

// Custom hook for USDC approval
export function useApproveUSDC() {
  const { config: approveConfig } = usePrepareContractWrite({
    address: "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75",
    abi: erc20abi,
    functionName: "approve",
    args: [
      "0x477A0D6807d401D4aF0bB73f593ecB69C2e8730C",
      ethers.utils.parseUnits("20", 6),
    ],
  });

  const approveUSDC = useContractWrite(approveConfig);

  return approveUSDC;
}
