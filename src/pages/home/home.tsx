import React from "react";

import About from "../../components/about";
import Landing from "../../components/landing";
import Navbar from "../../components/navbar";
import Portfolio from "../../components/portfolio";
import styles from "./home.module.scss";

function Home() {
  return (
    <div className={styles.root}>
      <Navbar />
      <Landing />
      <Portfolio />
      <About />
    </div>
  );
}

Home.propTypes = {};

export default Home;
