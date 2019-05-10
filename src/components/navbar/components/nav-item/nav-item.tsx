import classNames from "classnames";
import React, { HTMLProps, ReactNode } from "react";

import styles from "./nav-item.module.scss";

function NavItem({
  active,
  label,
  inverse,
  onClick,
  children,
  ...props
}: Props) {
  return (
    <a
      className={classNames(
        styles.navItem,
        active && styles.isActive,
        inverse && styles.inverse
      )}
      onClick={onClick}
      {...props}
    >
      {children || label}
    </a>
  );
}

interface Props extends HTMLProps<any> {
  label?: string;
  children?: ReactNode;
  active?: boolean;
  inverse?: boolean;
  onClick?: () => void;
}

NavItem.propTypes = {};

export default NavItem;
