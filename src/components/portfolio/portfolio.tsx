import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart, faRocket, faWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { useState } from "react";

import { ItemObjectProps, ItemProps } from "../../../types/models";
import { Modal } from "./components";
import styles from "./portfolio.module.scss";

import _portfolioItems from "./portfolio-data.json";
const portfolioItems: ItemObjectProps = _portfolioItems;

library.add(faWrench, faHeart, faRocket);

function Portfolio() {
  const [activeTab, setActiveTab] = useState<"serious" | "tools" | "fun">(
    "serious"
  );
  const [modalItem, setModalItem] = useState<ItemProps | null>(null);

  const activeItems: ItemProps[] = portfolioItems[activeTab] || [];

  function setSeriousTab() {
    setActiveTab("serious");
  }

  function setToolsTab() {
    setActiveTab("tools");
  }

  function setFunTab() {
    setActiveTab("fun");
  }

  function closeModal() {
    setModalItem(null);
  }

  function setModalItemFromEvent(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    event.persist();

    if (activeItems.length === 0) {
      return;
    }

    const item =
      activeItems.find(
        (val: ItemProps) => val.tag === event.currentTarget.dataset.itemTag
      ) || null;

    setModalItem(item);
  }

  return (
    <section
      id="portfolio"
      className={classNames("section is-info", styles.root)}
    >
      <div className="container">
        <div className="heading">
          <h1 className="title">Portfolio</h1>
          <h2 className="subtitle">
            Its all about that <strong>fluffiness</strong>.
          </h2>
        </div>
        <div className="tabs">
          <ul>
            <li
              className={classNames({
                "is-active": activeTab === "serious"
              })}
              onClick={setSeriousTab}
            >
              <a>
                <span className="icon">
                  <FontAwesomeIcon icon="rocket" />
                </span>
                <span>Serious</span>
              </a>
            </li>
            <li
              className={classNames({
                "is-active": activeTab === "tools"
              })}
              onClick={setToolsTab}
            >
              <a>
                <span className="icon">
                  <FontAwesomeIcon icon="wrench" />
                </span>
                <span>Tools</span>
              </a>
            </li>
            <li
              className={classNames({
                "is-active": activeTab === "fun"
              })}
              onClick={setFunTab}
            >
              <a>
                <span className="icon">
                  <FontAwesomeIcon icon="heart" />
                </span>
                <span>Fun</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="columns is-multiline">
          {activeItems.map((item: ItemProps, index: number) => {
            return (
              <div
                key={index.toString()}
                className="column is-3"
                data-item-tag={item.tag}
                onClick={setModalItemFromEvent}
              >
                <div className="portfolio-item-container">
                  {item.image ? (
                    <img
                      src={
                        "/static/assets/images/portfolio/" +
                        item.tag +
                        "-min.png"
                      }
                    />
                  ) : (
                    <img src="/static/assets/images/portfolio/empty.svg" />
                  )}
                  <h2 className="subtitle">{item.title}</h2>
                </div>
              </div>
            );
          })}
        </div>
        <Modal closeModal={closeModal} item={modalItem} />
      </div>
    </section>
  );
}

Portfolio.propTypes = {};

export default Portfolio;
