import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { faHeart, faRocket, faWrench } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import { TabOptions } from "../../portfolio";
import TabItem from "../tab-item";

const items: Item[] = [
  {
    icon: faRocket,
    label: "Serious",
    tag: "serious"
  },
  {
    icon: faWrench,
    label: "Tools",
    tag: "tools"
  },
  {
    icon: faHeart,
    label: "Fun",
    tag: "fun"
  }
];

function Tabs({ openTab, activeTab }: Props) {
  return (
    <div className="tabs">
      <ul>
        {items.map(item => (
          <TabItem
            key={item.tag}
            openTab={openTab}
            active={item.tag === activeTab}
            {...item}
          />
        ))}
      </ul>
    </div>
  );
}

interface Props {
  openTab: (tab: TabOptions) => void;
  activeTab: TabOptions;
}

interface Item {
  icon: IconDefinition;
  label: string;
  tag: TabOptions;
}

export default Tabs;
