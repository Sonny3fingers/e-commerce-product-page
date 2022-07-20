import React from "react";

const CartContext = React.createContext({
  itemCounter: 0,
  itemValue: 0,
  totalItemValue: 0,
  showCart: null,
  addItem: () => {},
  removeItem: () => {},
  showCartHandlerContext: () => {},
});

export default CartContext;
