import React from "react";
import "../../styles/EmptyCart.css";

const EmptyCart = () => {
  return (
    <>
      <div className="cartHeader">
        <h3>Cart</h3>
      </div>
      <div className="emptyCart">
        <p>You cart is empty</p>
      </div>
    </>
  );
};

export default EmptyCart;
