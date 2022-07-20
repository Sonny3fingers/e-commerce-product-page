import React from "react";
import Slider from "./Slider";
import ThumbnailsSection from "./ThumbnailsSection";
import closeIcon from "../../images/icon-close.svg";
import Overlay from "../../layout/overlay/Overlay";

import "../../styles/SliderModal.css";

const SliderModal = ({ onHideSliderModalOverlay }) => {
  return (
    <Overlay className="overlay">
      <div className="sliderModalContainer">
        <button className="closeBtnModal" onClick={onHideSliderModalOverlay}>
          <img src={closeIcon} alt="close icon" />
        </button>
        <Slider />
        <ThumbnailsSection />
      </div>
    </Overlay>
  );
};

export default SliderModal;
