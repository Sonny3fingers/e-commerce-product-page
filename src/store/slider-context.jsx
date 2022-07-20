import React from "react";

const SliderContext = React.createContext({
  sliderIndex: 0,
  changedSliderIndexHandler: () => {},
  currentActive: 0,
  currentActiveHandler: () => {},
});

export default SliderContext;
