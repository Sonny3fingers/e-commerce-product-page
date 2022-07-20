import React, { useState, useRef, useContext } from "react";
import "../../styles/ProductDetails.css";
import minusIcon from "../../images/icon-minus.svg";
import plusIcon from "../../images/icon-plus.svg";
import iconCart from "../../images/icon-cart.svg";
import CartContext from "../../store/CartContext";
import { motion } from "framer-motion";

const ProductDetails = () => {
  const counterInputRef = useRef();
  const [counter, setCounter] = useState(0);

  const oldPrice = 250;
  const discount = 50;
  const newPrice = (oldPrice * discount) / 100;

  const cartContext = useContext(CartContext);

  const decrementCounterHandler = () => {
    setCounter((prev) => (prev === 0 ? prev : prev - 1));
  };

  const incrementCounterHandler = () => {
    setCounter((prev) => prev + 1);
  };

  const addToCartHandler = (e) => {
    e.preventDefault();
    const enteredCounter = counterInputRef.current.value;
    const enteredCounterNumber = +enteredCounter;

    cartContext.addItem({
      itemCounter: enteredCounterNumber,
      itemValue: +newPrice,
      oldPrice: +oldPrice,
      discount: +discount,
    });

    setCounter(0);
  };

  return (
    <section className="product">
      <div className="company">Sneaker company</div>
      <h1 className="title">Fall limited edition sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer side, they`ll withstand everything the
        weather can offer.
      </p>
      <div className="priceWrapper">
        <div className="group">
          <span className="price">${newPrice.toFixed(2)}</span>
          <span className="discount">{discount}%</span>
        </div>
        <span className="old-price">${oldPrice}</span>
      </div>
      <div className="actions">
        <div className="counterWrapper">
          <motion.img
            whileTap={{ scale: 0.9 }}
            id="minusBtn"
            src={minusIcon}
            alt="minus"
            onClick={decrementCounterHandler}
            readOnly
          />
          <input
            className="counter"
            id="counter"
            type="number"
            ref={counterInputRef}
            value={counter}
            readOnly
          />
          <motion.img
            whileTap={{ scale: 0.9 }}
            id="plusBtn"
            src={plusIcon}
            alt="plus"
            onClick={incrementCounterHandler}
          />
        </div>

        <motion.button
          whileTap={{ scale: 0.9 }}
          className="btnAddToCart"
          id="btnAddToCart"
          onClick={addToCartHandler}
        >
          <img src={iconCart} alt="cart icon" value={counter} />
          <span>Add to cart</span>
        </motion.button>
      </div>
    </section>
  );
};

export default ProductDetails;
