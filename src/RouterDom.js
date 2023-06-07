import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import CheckOut from "./components/CheckOut";
import ProductOfCategory from "./components/ProductOfCategory";
const RouterDom = () => {
  return (
    <>
     <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/Product-Details" element={ <ProductDetails/> } />
        <Route path="/Cart" element={ <Cart/> } />
        <Route path="/Checkout" element={ <CheckOut/> } />
        <Route path="/ProductOfCategory" element={ <ProductOfCategory/> } />
      </Routes>
      ;
    </>
  );
};

export default RouterDom;
