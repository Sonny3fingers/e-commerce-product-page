import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import logo from "../../images/logo.svg";
import "../../styles/HamburgerLogoGroup.css";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

const HamburgerLogoGroup = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const showMobileMenuHandler = () => {
    setShowMobileMenu(true);
  };

  const hideMobileMenuHandler = () => {
    setShowMobileMenu(false);
  };

  return (
    <div className="hamburgerLogoGroup">
      <motion.div
        className="hamburger"
        id="hamburger"
        onClick={showMobileMenuHandler}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </motion.div>

      <img src={logo} alt="logo" className="logo" />

      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {showMobileMenu && (
          <MobileNavigation
            onShowMobileMenu={showMobileMenu}
            onHideMobileMenu={hideMobileMenuHandler}
          />
        )}
      </AnimatePresence>

      <Navigation />
    </div>
  );
};

export default HamburgerLogoGroup;
