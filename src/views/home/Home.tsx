import React from "react";
import Hero from "../../components/hero/Hero";
import Brands from "../../components/brands/Brands"
import ProductGrid from "../../components/productGrid/ProductGrid";
import Category_selection from "../../components/categorySelection/CategorySelection";

const Home: React.FC = () => {
  return (
    <>
    <Hero />
    <Category_selection />
    <Brands />
    <ProductGrid />
    </>
  );
};

export default Home;
