import React from "react";
import closeImage from "../../images/icon-close.svg";
import { motion } from "framer-motion";

import "../../styles/MobileNavigation.css";

const MobileNavigation = ({ onHideMobileMenu, onShowMobileMenu }) => {
  const dropIn = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
    exit: {
      x: "-100vw",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.nav
      className={onShowMobileMenu ? "mobileMenu" : ""}
      id="menu"
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="slideMenu">
        <img
          id="close"
          src={closeImage}
          alt="icon close"
          onClick={onHideMobileMenu}
        />

        <ul>
          <li>
            <a href="#">Collections</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default MobileNavigation;
