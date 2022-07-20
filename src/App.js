import React from "react";

import Header from "./layout/header/Header";
import Content from "./layout/content/Content";
import SliderProvider from "./store/SliderProvider";
import CartProvider from "./store/CartProvider";
// import "./styles/media650px.css";
// import "./styles/media1024px.css";
import "./styles/Container.css";

function App() {
  return (
    <div className="container">
      <CartProvider>
        <Header />
        <SliderProvider>
          <Content />
        </SliderProvider>
      </CartProvider>
    </div>
  );
}

export default App;
