import classNames from "classnames";
import jump from "jump.js";
import React from "react";

import { sendEvent as sendFullStoryEvent } from "../analytics/full-story";
import { sendEvent as sendGoogleAnalyticsEvent } from "../analytics/google-analytics";
import { sendEvent as sendMixpanelEvent } from "../analytics/mixpanel";
import { RippleButton } from "./components";
import styles from "./landing.module.scss";

function Landing() {
  function navToPortfolio() {
    sendFullStoryEvent("Landing CTA");
    sendMixpanelEvent("Landing CTA");
    sendGoogleAnalyticsEvent({ eventCategory: "Landing", eventAction: "CTA" });

    const $el = document.querySelector("#portfolio");
    if ($el !== null) {
      jump($el);
    }
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
        <RippleButton data-testid="landing-cta" onClick={navToPortfolio} />
      </div>
    </section>
  );
}

Landing.propTypes = {};

export default Landing;
