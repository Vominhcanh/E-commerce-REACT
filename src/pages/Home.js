import React from "react";
import Header from "./../components/Header";
import Sliderbar from "../components/Sliderbar";
import Product from "../components/Product";
import Category from "../components/Category";
import Services from "../components/Services";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import ProductDetails from "../components/ProductDetails";
import './style.css'
const Home = () => {
  return (
    <div className="page-holder">
      <Header />
      <div className="container">
        <Sliderbar />
        <Category/>
        <Product/>
        <Services/>
        <Newsletter/>
      </div>
      <Footer/>
     
    </div>
  );
};

export default Home;
