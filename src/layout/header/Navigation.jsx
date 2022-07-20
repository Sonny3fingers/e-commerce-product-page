import React from "react";
import closeImage from "../../images/icon-close.svg";

import "../../styles/Navigation.css";

const Navigation = () => {
  return (
    <nav className="menu " id="menu">
      <div className="slideMenu">
        <img id="close" src={closeImage} alt="icon close" />
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
    </nav>
  );
};

export default Navigation;
