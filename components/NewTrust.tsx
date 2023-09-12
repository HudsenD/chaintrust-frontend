import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
  useAccount,
} from "wagmi";
import { trustAbi, erc20abi } from "../constants/constants";
import TxAlert from "./TxAlert";
import { ethers } from "ethers";
import "react-datepicker/dist/react-datepicker.css";

const NewTrust = () => {
  const { address } = useAccount();
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [txMessage, setTxMessage] = useState<string>("");
  const [beneficiary, setBeneficiary] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [unixTimestamp, setUnixTimestamp] = useState<string>("");
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
    functionName: "createTimeTrustFund",
    args: [beneficiary, unixTimestamp],
  });

  const createTimeTrustFund = useContractWrite({
    ...createTrustConfig,
    onSuccess(data) {
      showSuccessMessage("Tx sent");
    },
  });

  const waitForMintTx = useWaitForTransaction({
    hash: createTimeTrustFund?.data?.hash,
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

  function handleDateChange(date: Date | null) {
    setSelectedDate(date);
    if (date) {
      const timestamp = Math.floor(date.getTime() / 1000).toString();
      setUnixTimestamp(timestamp);
    }
  }

  useEffect(() => {
    if (error?.message.includes("WERC10: request exceeds allowance")) {
      setInsufficientAllowance(true);
    }
  }, [error]);

  return (
    <div className="w-full">
      <div className="flex justify-center w-full h-auto max-w-screen-lg mx-auto">
        <div className="items-center justify-center w-3/6 p-4 mt-16 shadow-xl bg-secondary h-1/2 rounded-xl">
          <div className="text-xl font-bold text-center">
            Create Time-Based Trust
          </div>
          <div className="text-center">Enter Beneficiary Address</div>
          <input
            className="w-full px-3 py-2 mt-2 border-2 border-gray-300 rounded-md"
            placeholder="Beneficiary Address"
            onChange={(event) => setBeneficiary(event.target.value)}
            value={beneficiary}
          />
          <div className="mt-4 text-center">Choose your release date</div>
          <div className="flex justify-center gap-3">
            <div className="p-1 border-2 border-gray-300 rounded-md">
              <DatePicker
                className="w-full"
                placeholderText="Click to choose date"
                selected={selectedDate}
                onChange={(date) => handleDateChange(date)}
              />
            </div>

            <div>
              <button
                className={`btn mt-4 bg-accent text-secondary ${
                  beneficiary && selectedDate
                    ? "cursor-pointer"
                    : "cursor-not-allowed"
                }`}
                onClick={() =>
                  beneficiary &&
                  selectedDate &&
                  (insufficientAllowance
                    ? approveUSDC.write?.()
                    : createTimeTrustFund.write?.())
                }
              >
                {insufficientAllowance ? "Approve USDC" : "Create Trust"}
              </button>
            </div>
          </div>
        </div>
        {showSuccess && <TxAlert message={txMessage} />}
      </div>
    </div>
  );
};

export default NewTrust;

// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import {
//   usePrepareContractWrite,
//   useContractWrite,
//   useWaitForTransaction,
//   useAccount,
// } from "wagmi";
// import { trustAbi } from "../constants/constants";
// import TxAlert from "./TxAlert";
// import "react-datepicker/dist/react-datepicker.css";

// const NewTrust = () => {
//   const { address } = useAccount();
//   const [showSuccess, setShowSuccess] = useState<boolean>(false);
//   const [txMessage, setTxMessage] = useState<string>("");
//   const [beneficiary, setBeneficiary] = useState<string>("");
//   const [selectedDate, setSelectedDate] = useState<Date | null>(null);
//   const [unixTimestamp, setUnixTimestamp] = useState<string>("");

//   const { config } = usePrepareContractWrite({
//     address: "0x477A0D6807d401D4aF0bB73f593ecB69C2e8730C",
//     abi: trustAbi,
//     functionName: "createTimeTrustFund",
//     args: [beneficiary, unixTimestamp],
//   });

//   const createTimeTrustFund = useContractWrite({
//     ...config,
//     onSuccess(data) {
//       showSuccessMessage("Tx sent");
//     },
//   });
//   const waitForMintTx = useWaitForTransaction({
//     hash: createTimeTrustFund?.data?.hash,
//     onSuccess(data) {
//       showSuccessMessage("Tx confirmed");
//     },
//   });

//   function showSuccessMessage(message: string) {
//     setShowSuccess(true);
//     setTxMessage(message);
//     setTimeout(() => {
//       setShowSuccess(false);
//     }, 5000);
//   }

//   function handleDateChange(date: Date | null) {
//     setSelectedDate(date);
//     if (date) {
//       const timestamp = Math.floor(date.getTime() / 1000).toString();
//       setUnixTimestamp(timestamp);
//     }
//   }

//   return (
//     <div className="w-full">
//       <div className="flex justify-center w-full h-auto max-w-screen-lg mx-auto">
//         <div className="items-center justify-center w-3/6 p-4 mt-16 bg-white shadow-xl h-1/2 rounded-xl">
//           <div className="text-xl font-bold text-center">
//             Create Time-Based Trust
//           </div>
//           <div className="text-center">Enter Beneficiary Address</div>
//           <input
//             className="w-full px-3 py-2 mt-2 border-2 border-gray-300 rounded-md"
//             placeholder="Beneficiary Address"
//             onChange={(event) => setBeneficiary(event.target.value)}
//             value={beneficiary}
//           />
//           <div className="mt-4 text-center">Choose your release date</div>
//           <div className="flex justify-center gap-3">
//             <div className="p-1 border-2 border-gray-300 rounded-md">
//               <DatePicker
//                 className="w-full"
//                 placeholderText="Click to choose date"
//                 selected={selectedDate}
//                 onChange={(date) => handleDateChange(date)}
//               />
//             </div>

//             <div>
//               <button
//                 className={`btn mt-4 ${
//                   beneficiary && selectedDate
//                     ? "cursor-pointer"
//                     : "cursor-not-allowed"
//                 }`}
//                 onClick={() =>
//                   beneficiary && selectedDate && createTimeTrustFund.write?.()
//                 }
//               >
//                 Create Trust
//               </button>
//             </div>
//           </div>
//         </div>
//         {showSuccess && <TxAlert message={txMessage} />}
//       </div>
//     </div>
//   );
// };

// export default NewTrust;
