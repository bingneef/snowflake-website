import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import jump from "jump.js";
import React, { useEffect, useState } from "react";

import { NavItem } from "./components";
import styles from "./navbar.module.scss";

library.add(faGithub);

function getYOffset(id: any): number {
  const $el = document.getElementById(id);
  if ($el === null) {
    return -1;
  }

  return $el.offsetTop || 0;
}

function jumpToSection(
  tag: any,
  isRunning: boolean,
  setIsRunning: (isRunning: boolean) => void
) {
  if (isRunning) {
    return;
  }

  const $el = document.querySelector(tag);
  if ($el !== null) {
    setIsRunning(true);
    jump($el, {
      callback: () => setIsRunning(false)
    });
  }
}

function Navbar() {
  const [activeNavItem, setActiveNavItem] = useState("landing");
  const [isJumping, setIsJumping] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (document === null) {
        return;
      }

      const pageYOffset = window.pageYOffset;
      if (
        document.querySelector("#about") &&
        pageYOffset >= getYOffset("about") - 1
      ) {
        setActiveNavItem("about");
      } else if (
        document.querySelector("#portfolio") &&
        pageYOffset >= getYOffset("portfolio") - 1
      ) {
        setActiveNavItem("portfolio");
      } else {
        setActiveNavItem("landing");
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function gotoLanding() {
    jumpToSection("#landing", isJumping, setIsJumping);
  }

  function gotoPortfolio() {
    jumpToSection("#portfolio", isJumping, setIsJumping);
  }

  function gotoAbout() {
    jumpToSection("#about", isJumping, setIsJumping);
  }

  const inverse = activeNavItem === "portfolio";

  return (
    <nav
      className={classNames("navbar", styles.navbar, "transparent")}
      role="navigation"
      aria-label="main navigation"
    >
      <NavItem
        label="Home"
        onClick={gotoLanding}
        inverse={inverse}
        active={activeNavItem === "landing"}
      />

      <NavItem
        label="Portfolio"
        onClick={gotoPortfolio}
        inverse={inverse}
        active={activeNavItem === "portfolio"}
      />

      <NavItem
        label="About"
        onClick={gotoAbout}
        inverse={inverse}
        active={activeNavItem === "about"}
      />

      <NavItem
        href="https://www.github.com/bingneef"
        target="_blank"
        inverse={inverse}
        active={activeNavItem === "about"}
      >
        <span className="icon">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </span>
      </NavItem>
    </nav>
  );
}

Navbar.propTypes = {};

export default Navbar;
