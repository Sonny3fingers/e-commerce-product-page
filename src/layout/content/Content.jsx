import React, { useState } from "react";
import Slider from "../../components/Slider/Slider";
import SliderModal from "../../components/Slider/SliderModal";
import ThumbnailsSection from "../../components/Slider/ThumbnailsSection";
import ProductDetails from "./ProductDetails";

import "../../styles/Content.css";

const Content = () => {
  const [sliderOverlay, setSliderOverlay] = useState(false);

  const showSliderModalOverlay = () => {
    setSliderOverlay(true);
  };

  const hideSliderModalOverlay = () => {
    setSliderOverlay(false);
  };

  return (
    <div className="content">
      <div className="sliderContainer">
        {sliderOverlay && (
          <SliderModal onHideSliderModalOverlay={hideSliderModalOverlay} />
        )}
        <Slider showSliderModalOverlay={showSliderModalOverlay} />
        <ThumbnailsSection />
      </div>
      <ProductDetails />
    </div>
  );
};

export default Content;
