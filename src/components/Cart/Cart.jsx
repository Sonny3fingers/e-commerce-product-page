import React, { useState, useContext, useEffect } from "react";
import CartProducts from "./CartProducts";
import EmptyCart from "./EmptyCart";
import CartContext from "../../store/CartContext";
import { motion, AnimatePresence } from "framer-motion";

const Cart = () => {
  const cartContext = useContext(CartContext);
  const [cartIsEmpty, setCartIsEmpty] = useState(null);
  let onShowCart = cartContext.showCart;
  useEffect(() => {
    if (cartContext.itemCounter !== 0) {
      setCartIsEmpty(false);
    } else {
      setCartIsEmpty(true);
    }
  }, [cartContext.itemCounter]);

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-200%" },
  };

  return (
    <AnimatePresence
      initial={false}
      exitBeforeEnter={true}
      onExitComplete={() => null}
    >
      <motion.div
        className="cart"
        animate={onShowCart ? "open" : "closed"}
        variants={variants}
      >
        {!cartIsEmpty && <CartProducts />}
        {cartIsEmpty && <EmptyCart />}
      </motion.div>
    </AnimatePresence>
  );
};

export default Cart;
