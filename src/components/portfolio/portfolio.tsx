import classNames from "classnames";
import React, { useState } from "react";
import { sendEvent as sendFullStoryEvent } from "../analytics/full-story";
import { sendEvent as sendMixpanelEvent } from "../analytics/mixpanel";

import { ItemObjectProps, ItemProps } from "../../../types/models";
import { Modal, Tabs } from "./components";
import styles from "./portfolio.module.scss";

import _portfolioItems from "./portfolio-data.json";
const portfolioItems = _portfolioItems as ItemObjectProps;

function Portfolio({ initialTab = "serious" }: Props) {
  const [activeTab, setActiveTab] = useState<TabOptions>(initialTab);
  const [modalItem, setModalItem] = useState<ItemProps | null>(null);

  const activeItems: ItemProps[] = portfolioItems[activeTab] || [];

  function openTab(tab: TabOptions) {
    sendFullStoryEvent("Portfolio OpenTab", { tab });
    sendMixpanelEvent("Portfolio OpenTab", { tab });
    setActiveTab(tab);
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

    if (item) {
      sendFullStoryEvent("Portfolio OpenItem", { tag: item.tag });
      sendMixpanelEvent("Portfolio OpenItem", { tag: item.tag });
    }

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

        <Tabs openTab={openTab} activeTab={activeTab} />

        <div className="columns is-multiline">
          {activeItems.map((item: ItemProps, index: number) => {
            return (
              <div
                key={index.toString()}
                className="column is-3"
                data-item-tag={item.tag}
                data-testid={`portfolio-item-${index}`}
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

export type TabOptions = "serious" | "tools" | "fun";
interface Props {
  initialTab?: TabOptions;
}

export default Portfolio;
