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
      <div className="flex items-center justify-between max-w-screen-lg mx-auto">
        <div className="flex items-center">
          <a href="/">
            <div className="text-4xl font-bold text-primary hover:text-gray-300">
              ChainTrust
            </div>
          </a>
        </div>
        <div className="flex items-center justify-center">
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
        <div className="flex items-center">
          <div className="flex flex-grow"></div>
          <div className="flex items-center">
            <ConnectButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
