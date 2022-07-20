import React, { useContext } from "react";

import HamburgerLogoGroup from "./HamburgerLogoGroup";
import CartAvatarGroup from "./CartAvatarGroup";
import Cart from "../../components/Cart/Cart";
import CartContext from "../../store/CartContext";
import { AnimatePresence } from "framer-motion";
import "../../styles/Headers.css";

function Header() {
  const cartContext = useContext(CartContext);
  let showCartValue = cartContext.showCart;

  return (
    <div className="header">
      <HamburgerLogoGroup />
      <CartAvatarGroup />
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        <Cart />
      </AnimatePresence>
    </div>
  );
}

export default Header;
