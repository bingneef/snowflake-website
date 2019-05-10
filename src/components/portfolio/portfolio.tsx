import classNames from "classnames";
import React from "react";

import styles from "./portfolio.module.scss";

function Portfolio() {
  return (
    <section
      id="portfolio"
      className={classNames("section is-info", styles.root)}
    >
      <div className="container">
        <div className="heading">
          <h1 className="title">Portfolio</h1>
          <h2 className="subtitle">
            Its all about that <strong>fluffiness</strong>.
          </h2>
        </div>
        <div className="tabs" />
      </div>
    </section>
  );
}

Portfolio.propTypes = {};

export default Portfolio;
