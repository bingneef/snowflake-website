import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faGooglePlay,
  faNpm
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { useEffect } from "react";

import { ItemProps } from "../../../../../types/models";
import styles from "./modal.module.scss";

library.add(faGithub, faGooglePlay, faNpm, faGlobe, faRocket);

function Modal({ item, closeModal }: Props) {
  function handleKeyEvent(event: KeyboardEvent) {
    if (event.keyCode !== 27) {
      return;
    }

    closeModal();
  }

  useEffect(() => {
    window.addEventListener("keyup", handleKeyEvent);
    return () => {
      window.removeEventListener("keyup", handleKeyEvent);
    };
  });

  if (!item) {
    return null;
  }

  return (
    <div className="modal is-active">
      <div className={classNames("modal-background", styles.modalBackground)} />
      <div className={classNames("modal-container", styles.container)}>
        <div className={classNames("modal-content", styles.content)}>
          <div className={classNames("content-header", styles.contentHeader)}>
            <h2 className={classNames("title", styles.title)}>{item.title}</h2>
            <span className={classNames("subtitle", styles.subtitle)}>
              {item.customer}
            </span>
            <span className={classNames("subtitle", styles.subtitle)}>
              {item.projectState}
            </span>
          </div>
          <div className={classNames("divider", styles.divider)} />
          <div
            className={classNames("columns content-body", styles.contentBody)}
          >
            <div className="column is-8">
              <h2 className={classNames("subtitle", styles.subtitle)}>
                Description
              </h2>
              <p>{item.description}</p>
            </div>
            <div className="column is-4">
              <h2 className={classNames("subtitle", styles.subtitle)}>
                Techniques
              </h2>
              {item.techniques &&
                item.techniques.map((technique: string, index: number) => {
                  return (
                    <span
                      className={classNames("tag is-info", styles.tag)}
                      key={index.toString()}
                    >
                      {technique}
                    </span>
                  );
                })}
            </div>
          </div>
          <div>
            {item.callToAction && item.callToAction.type === "github" && (
              <a
                className="button is-medium is-info"
                href={item.callToAction && item.callToAction.link}
                target="_blank"
              >
                <span className="icon">
                  <FontAwesomeIcon icon={["fab", "github"]} />
                </span>
                <span>View on Github</span>
              </a>
            )}

            {item.callToAction && item.callToAction.type === "npm" && (
              <a
                className="button is-medium is-info"
                href={item.callToAction && item.callToAction.link}
                target="_blank"
              >
                <span className="icon">
                  <FontAwesomeIcon icon={["fab", "npm"]} />
                </span>
                <span>View on NPM</span>
              </a>
            )}

            {item.callToAction && item.callToAction.type === "playstore" && (
              <a
                className="button is-medium is-info"
                href={item.callToAction && item.callToAction.link}
                target="_blank"
              >
                <span className="icon">
                  <FontAwesomeIcon icon={["fab", "google-play"]} />
                </span>
                <span>View on PlayStore</span>
              </a>
            )}

            {item.callToAction && item.callToAction.type === "url" && (
              <a
                className="button is-medium is-info"
                href={item.callToAction && item.callToAction.link}
                target="_blank"
              >
                <span className="icon">
                  <FontAwesomeIcon icon={"globe"} />
                </span>
                <span>Go to the website</span>
              </a>
            )}

            {item.callToAction && item.callToAction.type === "comingSoon" && (
              <a
                className="button is-medium is-info"
                href={item.callToAction && item.callToAction.link}
                target="_blank"
              >
                <span className="icon">
                  <FontAwesomeIcon icon={"rocket"} />
                </span>
                <span>Coming soon!</span>
              </a>
            )}
          </div>
        </div>
      </div>
      <button
        className={classNames("modal-close", styles.modalClose)}
        onClick={closeModal}
      />
    </div>
  );
}

interface Props {
  item: ItemProps | null;
  closeModal: () => void;
}

Modal.propTypes = {};

export default Modal;
