import classNames from "classnames";
import jump from "jump.js";
import React from "react";
import { useSpring, animated } from "react-spring";
import { useGesture } from "react-use-gesture";

import { sendEvent as sendFullStoryEvent } from "../analytics/full-story";
import { sendEvent as sendGoogleAnalyticsEvent } from "../analytics/google-analytics";
import { sendEvent as sendMixpanelEvent } from "../analytics/mixpanel";
import { sendEvent as sendVwoEvent } from "../analytics/vwo";
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
    sendGoogleAnalyticsEvent({ eventCategory: "Landing", eventAction: "CTA" });
    sendVwoEvent("goalConversion");

    const $el = document.querySelector("#portfolio");
    if ($el !== null) {
      jump($el);
    }
  }

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    local: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 }
  }));

  const { local } = props;

  const bind = useGesture({ onDrag: ({ local }) => set({ local }) });

  return (
    <section
      id="landing"
      className="hero is-fullheight is-info"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <div className="hero-body">
        <div className={classNames("container", styles.container)}>
          <div className={styles.logoContainer}>
            <animated.div
              style={{
                transform: props.xy.interpolate(trans1)
              }}
              className={classNames("logo", styles.logo)}
            >
              <img
                className={classNames("logo", styles.logo)}
                src="/static/assets/images/snowflake_background.svg"
              />
            </animated.div>
            <animated.div
              style={{ transform: props.xy.interpolate(trans2) }}
              className={classNames("logo", styles.logo)}
            >
              <img
                className={classNames("logo", styles.logo)}
                src="/static/assets/images/snowflake_s.svg"
              />
            </animated.div>
          </div>
          <h1 className="title">Snowflake Webdesign</h1>
          <h2 className="subtitle">For a life full of fluffiness</h2>
        </div>
      </div>
      <div className="hero-foot has-text-centered">
        <animated.div
          {...bind()}
          style={{
            transform: local.interpolate(
              (x: number, y: number) => `translate3d(${x}px,${y}px,0)`
            )
          }}
        >
          <RippleButton data-testid="landing-cta" onClick={navToPortfolio} />
        </animated.div>
      </div>
    </section>
  );
}

Landing.propTypes = {};

export default Landing;
