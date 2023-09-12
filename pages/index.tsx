import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>ChainTrust</title>
        <meta name="ChainTrust" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <div className="max-w-xl px-10 py-5 mx-auto text-center text-white">
        <h1 className="mt-4 mb-4 text-3xl font-bold text-text">
          Simplify Your Wealth Management with Digital Trust Funds
        </h1>
        <p className="mb-4 text-lg text-accent">
          Leverage the power of blockchain technology to create and manage trust
          funds that are not only more accessible, but also completely
          transparent and secure.
        </p>
        <p className="mt-12 mb-4 text-2xl font-bold text-text">
          How does it work?
        </p>

        <p className="text-lg text-accent">
          Each Trust is represented as an NFT with its own wallet address using
          ERC-6551. This allows any assets to be ownable by the NFT which is
          intially owned by the ChainTrust smart contract. Once trust conditions
          are met, the NFT gets transferred to the beneficiary which gives
          access to the linked wallet account.
        </p>
        <Link href="/trust">
          <button className="self-center mt-5 text-black transition-colors duration-200 rounded-full bg-primary btn hover:bg-green-500 hover:text-white">
            Get Started
          </button>
        </Link>
      </div>
      <div className="mt-10">{/*  */}</div>
      <footer className="mt-10">{/*  */}</footer>
    </div>
  );
}
