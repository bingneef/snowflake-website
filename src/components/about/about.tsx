import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBed,
  faBug,
  faMagic,
  faTerminal
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useMemo } from "react";

import { Title } from "../typography";
import styles from "./about.module.scss";
import { calculateCurrentAge } from "./utility";

library.add(faMagic, faBed, faBug, faTerminal);

function About() {
  const currentAge = useMemo(() => calculateCurrentAge(), []);

  return (
    <section id="about" className="hero is-info is-fullheight">
      <div className="hero-body">
        <div className="container">
          <Title className="is-1 has-text-centered">
            Whats all this about?
          </Title>
          <div className="columns">
            <div className="column">
              <Title>Who adds the fluffy?</Title>
              <p>
                Hello! I am an full-stack developer from Noordwijk, Netherlands.
              </p>
              <br />
              <p>
                So, if you have a new and awesome project, get in touch! And if
                your project is not <span className="underline">that</span>{" "}
                awesome, challenge me to make it awesome!
              </p>
            </div>
            <div className="column">
              <Title>Everyone needs skills!</Title>
              <div className={styles.dataLine}>
                <p>
                  <strong className="data-line-content">
                    <FontAwesomeIcon icon="magic" /> CREATING MAGIC
                  </strong>
                </p>
                <p>React, React-native, NodeJS, Ruby on Rails, VueJS</p>
              </div>
              <div className={styles.separator} />
              <div className={styles.dataLine}>
                <p>
                  <strong className="data-line-content">
                    <FontAwesomeIcon icon="bed" /> STUFF I CAN DREAM
                  </strong>
                </p>
                <p>GatsbyJS, (public) APIs, MySQL, MongoDB, Webpack, CSS</p>
              </div>
              <div className={styles.separator} />
              <div className={styles.dataLine}>
                <p>
                  <strong className="data-line-content">
                    <FontAwesomeIcon icon="bug" /> WITH SOME BUGS
                  </strong>
                </p>
                <p>PHP, Android</p>
              </div>
              <div className={styles.separator} />
              <div className={styles.dataLine}>
                <p>
                  <strong className="data-line-content">
                    <FontAwesomeIcon icon="terminal" /> CURRENTLY LEARNING
                  </strong>
                </p>
                <p>NextJS</p>
              </div>
            </div>
            <div className="column personal-details">
              <Title>ome personal details.</Title>
              <div className="columns is-mobile">
                <div className="column is-narrow data-line">
                  <p>
                    <strong>Name</strong>
                  </p>
                  <p>
                    <strong>Age</strong>
                  </p>
                  <p>
                    <strong>Email</strong>
                  </p>
                </div>
                <div className="column data-line">
                  <p>Bing Steup</p>
                  <p>{currentAge} Years</p>
                  <p>
                    <a
                      className={styles.isLink}
                      href="mailto:bingsteup@gmail.com"
                    >
                      bingsteup@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className={styles.socialIcons}>
                <a href="https://www.github.com/bingneef" target="_blank">
                  <img src="/static/assets/images/social/github.svg" />
                </a>
                <a href="https://www.instagram.com/bingneef" target="_blank">
                  <img src="/static/assets/images/social/instagram.svg" />
                </a>
                <a
                  href="https://www.flickr.com/photos/bingneef"
                  target="_blank"
                >
                  <img src="/static/assets/images/social/flickr.svg" />
                </a>
                <a
                  href="https://www.linkedin.com/in/bing-steup-6595a6b1?trk=hp-identity-name"
                  target="_blank"
                >
                  <img src="/static/assets/images/social/linkedin.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

About.propTypes = {};

export default About;
