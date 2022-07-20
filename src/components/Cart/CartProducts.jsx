import React, { useContext } from "react";
import productImage from "../../images/image-product-1-thumbnail.jpg";
import deleteIcon from "../../images/icon-delete.svg";
import CartContext from "../../store/CartContext";

import "../../styles/CartProducts.css";

const CartProducts = () => {
  const cartContext = useContext(CartContext);
  const itemValue = cartContext.itemValue;
  const itemCounter = cartContext.itemCounter;
  const totalItemValue = cartContext.totalItemValue;

  const deleteHandler = () => {
    cartContext.removeItem(itemCounter, totalItemValue);
  };

  return (
    <>
      <div className="cartHeader">
        <h3>Cart</h3>
      </div>
      <div className="productsInCart" id="productsInCart">
        <div className="item">
          <img className="productImg" src={productImage} alt="product 1" />
          <div className="details">
            <div className="productName">Autumn Limited Edition...</div>
            <div className="priceGroup">
              <div className="price">${itemValue}</div>
              <div className="count">x {itemCounter}</div>
              <div className="totalAmount">${totalItemValue}</div>
            </div>
          </div>
          <img
            id="btnDelete"
            src={deleteIcon}
            alt="delete icon"
            onClick={deleteHandler}
          />
        </div>
        <div className="checkout" id="checkoutBtn">
          Checkout
        </div>
      </div>
    </>
  );
};

export default CartProducts;
