import { IconName, IconPrefix } from "@fortawesome/fontawesome-common-types";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAppStore,
  faGithub,
  faGooglePlay,
  faNpm
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React from "react";

import { CTATypeOptions } from "../../../../../../../types/models";
import styles from "./call-to-action.module.scss";

library.add(faGithub, faGooglePlay, faAppStore, faNpm, faGlobe, faRocket);

const config: Config = {
  appstore: {
    icon: ["fab", "app-store"],
    label: "View on AppStore"
  },
  comingSoon: {
    icon: "rocket",
    label: "Coming soon!"
  },
  github: {
    icon: ["fab", "github"],
    label: "View on Github"
  },
  npm: {
    icon: ["fab", "npm"],
    label: "View on NPM"
  },
  playstore: {
    icon: ["fab", "google-play"],
    label: "View on PlayStore"
  },
  url: {
    icon: "globe",
    label: "Go to the website"
  }
};

function CallToAction({ type, link }: Props) {
  const typeConfig = config[type];
  if (!typeConfig) {
    return null;
  }

  const { label, icon } = typeConfig;
  return (
    <a
      className={classNames("button is-medium is-info", styles.root)}
      href={link}
      target="_blank"
    >
      <span className="icon">
        <FontAwesomeIcon icon={icon} />
      </span>
      <span>{label}</span>
    </a>
  );
}

interface Props {
  type: CTATypeOptions;
  link?: string;
}

interface ItemConfig {
  label: string;
  icon: [IconPrefix, IconName] | IconName;
}

interface Config {
  github: ItemConfig;
  npm: ItemConfig;
  playstore: ItemConfig;
  appstore: ItemConfig;
  url: ItemConfig;
  comingSoon: ItemConfig;
}

export default CallToAction;
