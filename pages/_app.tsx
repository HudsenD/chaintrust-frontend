import "@rainbow-me/rainbowkit/styles.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  darkTheme,
  getDefaultWallets,
  connectorsForWallets,
  RainbowKitProvider,
  midnightTheme,
} from "@rainbow-me/rainbowkit";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { mainnet, optimism, polygon, fantom } from "wagmi/chains";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://api.studio.thegraph.com/query/48135/chaintrust-fantom/v0.0.1",
});
// for goerli: "https://api.studio.thegraph.com/query/48135/chaintrust/version/latest"

const alchemyApiKey: string = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY!;
const projectId: string = process.env.NEXT_PUBLIC_WALLET_CONNECT_ID!;

//Chains we are going to support
// "Connectors" for these clients
// WagmiClient

const { chains, publicClient } = configureChains([fantom], [publicProvider()]);

const { connectors } = getDefaultWallets({
  appName: "ChainTrust",
  projectId: projectId,
  chains,
});

const wagmiClient = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
