import classNames from "classnames";
import React from "react";

import { RippleButton } from "./components";
import styles from "./landing.module.scss";

function Landing() {
  function navToPortfolio() {
    // console.log("ok");
  }

  return (
    <section id="landing" className="hero is-fullheight is-info">
      <div className="hero-body">
        <div className={classNames("container", styles.container)}>
          <img
            className={classNames("logo", styles.logo)}
            src="/static/assets/images/snowflake.svg"
          />
          <h1 className="title">Snowflake Webdesign</h1>
          <h2 className="subtitle">For a life full of fluffiness</h2>
        </div>
      </div>
      <div className="hero-foot has-text-centered">
        <RippleButton onClick={navToPortfolio} />
      </div>
    </section>
  );
}

Landing.propTypes = {};

export default Landing;
