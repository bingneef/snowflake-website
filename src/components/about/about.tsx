import React, { useMemo } from "react";

import styles from "./about.module.scss";
import { calculateCurrentAge } from "./utility";

function About() {
  const currentAge = useMemo(() => calculateCurrentAge(), []);

  return (
    <section id="about" className="hero is-info is-fullheight">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1 has-text-centered">
            Whats all this about?
          </h1>
          <div className="columns">
            <div className="column">
              <h2 className="title">Who adds the fluffy?</h2>
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
              <h2 className="title">Everyone needs skills!</h2>
              <div className={styles.dataLine}>
                <p>
                  <strong className="data-line-content">
                    <i className="fa fa-magic" /> CREATING MAGIC
                  </strong>
                </p>
                <p>React, React-native, NodeJS, Ruby on Rails, VueJS</p>
              </div>
              <div className={styles.separator} />
              <div className={styles.dataLine}>
                <p>
                  <strong className="data-line-content">
                    <i className="fa fa-bed" /> STUFF I CAN DREAM
                  </strong>
                </p>
                <p>GatsbyJS, (public) APIs, MySQL, MongoDB, Webpack, CSS</p>
              </div>
              <div className={styles.separator} />
              <div className={styles.dataLine}>
                <p>
                  <strong className="data-line-content">
                    <i className="fa fa-bug" /> WITH SOME BUGS
                  </strong>
                </p>
                <p>PHP, Android</p>
              </div>
              <div className={styles.separator} />
              <div className={styles.dataLine}>
                <p>
                  <strong className="data-line-content">
                    <i className="fa fa-terminal" /> CURRENTLY LEARNING
                  </strong>
                </p>
                <p>NextJS</p>
              </div>
            </div>
            <div className="column personal-details">
              <h2 className="title">Some personal details.</h2>
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
