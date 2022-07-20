import React, { useState } from "react";
import SliderContext from "./slider-context";

const SliderProvider = (props) => {
  const [changedSliderIndex, setChangedSliderIndex] = useState(0);
  const [currentActive, setCurrentActive] = useState(0);

  const changedSliderIndexHandler = (obj) => {
    setChangedSliderIndex(obj.thumbSliderIndex);
  };

  const currentActiveHandler = (index) => {
    setCurrentActive((prevState) => (prevState = index));
  };

  const sliderContext = {
    sliderIndex: changedSliderIndex,
    changedSliderIndexHandler: changedSliderIndexHandler,
    currentActiveHandler: currentActiveHandler,
    currentActive: currentActive,
  };
  return (
    <SliderContext.Provider value={sliderContext}>
      {props.children}
    </SliderContext.Provider>
  );
};

export default SliderProvider;
