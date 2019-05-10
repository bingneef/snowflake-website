import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import styles from "./ripple-button.module.scss";

function RippleButton({ onClick }: Props) {
  return (
    <div className={styles.ripplePlaceholder}>
      <a
        className={classNames(
          "button is-success",
          styles.button,
          styles.nextButton
        )}
        onClick={onClick}
      >
        <i className="fa fa-lg fa-arrow-down" />
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
