import React from "react";
import Header from "../components/Header";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import NewTrust from "../components/NewTrust";
import NewPriceTrust from "../components/NewPriceTrust";

const pools = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="w-full">
        <div className="justify-center w-full h-auto max-w-screen-lg mx-auto">
          <Head>
            <title>ChainTrust</title>
            <meta name="ChainTrust" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Header />
          <NewTrust />
          <NewPriceTrust />
        </div>
      </div>
    </div>
  );
};

export default pools;
