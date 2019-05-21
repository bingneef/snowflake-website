import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import styles from "./ripple-button.module.scss";

library.add(faArrowDown);

function RippleButton({ onClick, ...props }: Props) {
  return (
    <div className={styles.ripplePlaceholder} {...props}>
      <a
        className={classNames(
          "button is-success",
          styles.button,
          styles.nextButton
        )}
        onClick={onClick}
      >
        <FontAwesomeIcon icon="arrow-down" />
      </a>
      <div className={styles.ripple} />
      <div className={styles.rippleDelay} />
    </div>
  );
}

interface Props {
  onClick: () => void;
}

RippleButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default RippleButton;
