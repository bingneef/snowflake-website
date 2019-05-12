import classNames from "classnames";
import React, { ReactNode } from "react";
import styles from "./typography.module.scss";

export function Title({ children, className }: Props) {
  return (
    <h1 className={classNames("title", className, styles.title)}>{children}</h1>
  );
}

export function Subtitle({ children, className }: Props) {
  return (
    <h2 className={classNames("subtitle", className, styles.subtitle)}>
      {children}
    </h2>
  );
}

interface Props {
  children: ReactNode;
  className?: string;
}

export default {};
