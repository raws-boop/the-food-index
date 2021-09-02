import React from "react";
import Cart from "../components/Cart";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <div className="container">
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
