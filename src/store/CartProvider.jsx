import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [item, setItem] = useState({});
  const [totalNewPrice, setTotalNewPrice] = useState(0);
  const [cartCounter, setCartCounter] = useState(0);
  const [showCartValue, setShowCartValue] = useState(false);

  const addItem = (obj) => {
    setItem(obj);
    setCartCounter(obj.itemCounter);
    setTotalNewPrice((obj.itemCounter * obj.oldPrice * obj.discount) / 100);
  };

  const removeItem = (counter, totalAmount) => {
    setCartCounter(() => {
      return counter - 1;
    });
    setTotalNewPrice(() => {
      return totalAmount - item.itemValue;
    });
  };

  const showCartHandlerContext = (value) => {
    setShowCartValue(value);
  };

  const cartContext = {
    itemCounter: cartCounter,
    itemValue: item.itemValue,
    totalItemValue: totalNewPrice,
    discount: item.discount,
    showCart: showCartValue,
    addItem: addItem,
    removeItem: removeItem,
    showCartHandlerContext: showCartHandlerContext,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
