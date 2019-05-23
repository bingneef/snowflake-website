import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faGooglePlay,
  faNpm
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { CTATypeOptions } from "../../../../../../../types/models";

library.add(faGithub, faGooglePlay, faNpm, faGlobe, faRocket);

function CallToAction({ type, link }: Props) {
  if (type === "github") {
    return (
      <a className="button is-medium is-info" href={link} target="_blank">
        <span className="icon">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </span>
        <span>View on Github</span>
      </a>
    );
  } else if (type === "npm") {
    return (
      <a className="button is-medium is-info" href={link} target="_blank">
        <span className="icon">
          <FontAwesomeIcon icon={["fab", "npm"]} />
        </span>
        <span>View on NPM</span>
      </a>
    );
  } else if (type === "playstore") {
    return (
      <a className="button is-medium is-info" href={link} target="_blank">
        <span className="icon">
          <FontAwesomeIcon icon={["fab", "google-play"]} />
        </span>
        <span>View on PlayStore</span>
      </a>
    );
  } else if (type === "url") {
    return (
      <a className="button is-medium is-info" href={link} target="_blank">
        <span className="icon">
          <FontAwesomeIcon icon={"globe"} />
        </span>
        <span>Go to the website</span>
      </a>
    );
  } else if (type === "comingSoon") {
    return (
      <a className="button is-medium is-info" href={link} target="_blank">
        <span className="icon">
          <FontAwesomeIcon icon={"rocket"} />
        </span>
        <span>Coming soon!</span>
      </a>
    );
  }

  return null;
}

interface Props {
  type: CTATypeOptions;
  link?: string;
}

export default CallToAction;
