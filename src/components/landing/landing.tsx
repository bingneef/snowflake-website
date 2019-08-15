import classNames from "classnames";
import jump from "jump.js";
import React from "react";
import { animated, useSpring } from "react-spring";

import { sendEvent as sendFullStoryEvent } from "../analytics/full-story";
import { sendEvent as sendGoogleAnalyticsEvent } from "../analytics/google-analytics";
import { sendEvent as sendMixpanelEvent } from "../analytics/mixpanel";
import { RippleButton } from "./components";
import styles from "./landing.module.scss";

const calc = (x: number, y: number) => [
  x - window.innerWidth / 2,
  y - window.innerHeight / 2
];
const trans1 = (x: number, y: number) =>
  `translate3d(${x / 24}px,${y / 24}px,0)`;
const trans2 = (x: number, y: number) =>
  `translate3d(${x / 16}px,${y / 16}px,0)`;

function Landing() {
  function navToPortfolio() {
    sendFullStoryEvent("Landing CTA");
    sendMixpanelEvent("Landing CTA");
    sendGoogleAnalyticsEvent({
      eventAction: "CTA",
      eventCategory: "Landing"
    });

    const $el = document.querySelector("#portfolio");
    if ($el !== null) {
      jump($el);
    }
  }

  const [props, set] = useSpring(() => ({
    config: {
      friction: 140,
      mass: 10,
      tension: 550
    },
    local: [0, 0],
    xy: [0, 0]
  }));

  function handleMouseMove({
    clientX: x,
    clientY: y
  }: React.MouseEvent<HTMLElement, MouseEvent>) {
    set({ xy: calc(x, y) });
  }

  return (
    <section
      id="landing"
      className="hero is-fullheight is-info"
      onMouseMove={handleMouseMove}
    >
      <div className="hero-body">
        <div className={classNames("container", styles.container)}>
          <div className={styles.logoContainer}>
            <animated.div
              style={{
                transform: props.xy.to(trans1)
              }}
              className={classNames("logo", styles.logo)}
            >
              <img
                className={classNames("logo", styles.logo)}
                src="/static/assets/images/snowflake_background.svg"
              />
            </animated.div>
            <animated.div
              style={{
                transform: props.xy.to(trans2)
              }}
              className={classNames("logo", styles.logo)}
            >
              <img
                className={classNames("logo", styles.logo)}
                src="/static/assets/images/snowflake_S.svg"
              />
            </animated.div>
          </div>
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
