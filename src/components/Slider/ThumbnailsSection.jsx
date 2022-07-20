import React, { useState, useEffect, useContext } from "react";
import { Thumbnails } from "../Thumbnails";
import SliderContext from "../../store/slider-context";
import "../../styles/ThumbnailsSection.css";

const ThumbnailsSection = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const sliderCtx = useContext(SliderContext);
  const { currentActive, changedSliderIndexHandler } = sliderCtx;

  const sliderIndexHandler = (e) => {
    setSliderIndex(
      (prevState) => (prevState = +e.target.attributes.index.value)
    );
  };

  useEffect(() => {
    changedSliderIndexHandler({ thumbSliderIndex: sliderIndex });
  }, [sliderIndex]);

  useEffect(() => {
    const identifier = setTimeout(() => {
      setSliderIndex((prevState) => (prevState = currentActive));
    }, 100);

    return () => {
      clearTimeout(identifier);
    };
  }, [setSliderIndex, currentActive]);

  return (
    <div className="thumbnails">
      {Thumbnails.map((slide, index) => (
        <div
          className={sliderIndex === index ? "pic active" : "pic"}
          key={slide.id}
          index={index}
          onClick={sliderIndexHandler}
        >
          <img src={slide.image} alt="thumbnail pic" />
        </div>
      ))}
    </div>
  );
};

export default ThumbnailsSection;
