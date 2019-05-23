import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import classNames from "classnames";
import React from "react";

import { TabOptions } from "../../portfolio";

function TabItem({ openTab, tag, active, label, icon }: Props) {
  library.add(icon);

  function handleOpenTab() {
    openTab(tag);
  }

  return (
    <li
      className={classNames({
        "is-active": active
      })}
      data-testid={`tab-${tag}`}
      onClick={handleOpenTab}
    >
      <a>
        <span className="icon">
          <FontAwesomeIcon icon={[icon.prefix, icon.iconName]} />
        </span>
        <span>{label}</span>
      </a>
    </li>
  );
}

interface Props {
  openTab: (tab: TabOptions) => void;
  tag: TabOptions;
  active: boolean;
  label: string;
  icon: IconDefinition;
}

export default TabItem;
