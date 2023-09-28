import React from "react";
import Header from "../components/Header";
import CurrentTrusts from "../components/CurrentTrusts";
import styles from "../styles/Home.module.css";

const dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="w-full">
        <div className="justify-center w-full h-auto mx-auto max-w-screen-2xl">
          <Header />
          <CurrentTrusts />
        </div>
      </div>
    </div>
  );
};

export default dashboard;
