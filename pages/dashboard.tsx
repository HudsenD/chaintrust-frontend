import React from "react";
import Header from "../components/Header";
import CurrentTrusts from "../components/CurrentTrusts";
import styles from "../styles/Home.module.css";

const dashboard = () => {
  return (
    <div
      className={`${styles.container} min-h-screen bg-gradient-to-b from-green-500 to-black`}
    >
      <div className="w-full">
        <div className="justify-center w-full h-auto max-w-screen-lg mx-auto">
          <Header />
          <CurrentTrusts />
        </div>
      </div>
    </div>
  );
};

export default dashboard;
