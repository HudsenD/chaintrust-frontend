import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useIsMounted } from "../hooks/useIsMounted";

const Header = () => {
  const mounted = useIsMounted();
  const { address } = useAccount(); //this is how you get user connected address
  // use mounted for showing things only after mounted is true. prevents hydration error.
  return (
    <div className="w-full py-6">
      <div className="flex items-center justify-between mx-auto mt-4 max-w-screen-2xl">
        <div className="flex items-center">
          <a href="/">
            <div className="mx-10 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent hover:text-gray-300">
              ChainTrust
            </div>
          </a>
        </div>

        <div className="text-4xl font-extralight text-primary">|</div>
        <div className="flex items-center">
          <Link href={"/trust"} passHref>
            <div className="mx-12 text-lg font-medium text-primary hover:text-gray-300">
              New Trust Fund
            </div>
          </Link>
          <Link href={"/dashboard"} passHref>
            <div className="mx-12 text-lg font-medium text-primary hover:text-gray-300">
              Dashboard
            </div>
          </Link>
        </div>
        <div className="flex-grow"></div>
        <div
          className="flex items-center"
          style={{ marginLeft: "20px", minWidth: "200px" }}
        >
          <ConnectButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
