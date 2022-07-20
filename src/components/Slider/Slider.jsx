import React, { useState, useContext, useEffect } from "react";
import "../../styles/Slider.css";
import { ProductImages } from "../ProductImages";
import prevBtn from "../../images/icon-previous.svg";
import nextBtn from "../../images/icon-next.svg";
import SliderContext from "../../store/slider-context";
import { motion, AnimatePresence } from "framer-motion";

const Slider = ({ showSliderModalOverlay }) => {
  const [current, setCurrent] = useState(0);
  const sliderCtx = useContext(SliderContext);
  const { currentActiveHandler, sliderIndex } = sliderCtx;

  useEffect(() => {
    const identifier = setTimeout(() => {
      setCurrent((prevState) => (prevState = sliderIndex));
    }, 200);

    return () => {
      clearTimeout(identifier);
    };
  }, [sliderIndex, setCurrent]);

  const prevImageHandler = () => {
    setCurrent(current === 0 ? ProductImages.length - 1 : current - 1);
  };

  const nextImageHandler = () => {
    setCurrent(current === ProductImages.length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      currentActiveHandler(current);
    }, 100);

    return () => {
      clearTimeout(identifier);
    };
  }, [current]);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-200%" },
  };

  return (
    <div className="heroImageSlider">
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {ProductImages.map((slide, index) => (
          <motion.div
            className="heroImage"
            animate={current === index ? "open" : "closed"}
            variants={variants}
            key={slide.id}
            index={index}
            onClick={showSliderModalOverlay}
            style={{ backgroundImage: `url(${ProductImages[current].image})` }}
          />
        ))}
      </AnimatePresence>

      <div className="prevBtn">
        <motion.img
          src={prevBtn}
          alt="prevBtn"
          whileTap={{ scale: 0.9 }}
          onClick={prevImageHandler}
        />
      </div>
      <div className="nextBtn">
        <motion.img
          src={nextBtn}
          alt="nextBtn"
          whileTap={{ scale: 0.9 }}
          onClick={nextImageHandler}
        />
      </div>
    </div>
  );
};

export default Slider;
