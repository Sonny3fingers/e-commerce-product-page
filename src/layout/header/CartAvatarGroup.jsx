import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../../images/icon-cart.svg";
import ImageAvatar from "../../images/image-avatar.png";
import CartContext from "../../store/CartContext";
import { motion } from "framer-motion";
import "../../styles/CartAvatarGroup.css";

const CartAvatarGroup = () => {
  const cartContext = useContext(CartContext);
  let cartCounter = cartContext.itemCounter;
  const [showCart, setShowCart] = useState(false);
  const { showCartHandlerContext } = cartContext;

  const showCartHandler = () => {
    setShowCart((prevState) => !prevState);
  };

  useEffect(() => {
    showCartHandlerContext(showCart);
  }, [showCart, showCartHandlerContext]);

  return (
    <div className="cart-avatar-group">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="cartBtn"
        onClick={showCartHandler}
      >
        <img src={CartIcon} alt="cart icon" />
        {cartContext.totalItemValue !== 0 && (
          <div className="cartCount">{cartCounter}</div>
        )}
      </motion.div>
      <img className="avatar" src={ImageAvatar} alt="avatar" />
    </div>
  );
};

export default CartAvatarGroup;
