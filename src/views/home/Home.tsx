import React from "react";
import "./home.scss";
import Hero from "../../components/hero/Hero";
import Brands from "../../components/brands/Brands";
import ProductGrid from "../../components/productGrid/ProductGrid";
import Category_selection from "../../components/categorySelection/CategorySelection";
import Navbar from "../../components/navbar/Navbar";

const Home: React.FC = () => {
  return (
    <>
    <Navbar navbarClassName="main-view-navbar"/>
    <section className="home">
      <Hero />
      <Category_selection />
      <Brands />
      <ProductGrid />
      <div className="sales-txt">
        <p>
          <img src="src\assets\Check.svg" alt="check-mark" />
          Fraktfritt över 500:-
        </p>
        <p>
          <img src="src\assets\Check.svg" alt="check-mark" />
          3-5 dagars leveranstid
        </p>
        <p>
          <img src="src\assets\Check.svg" alt="check-mark" />
          Betala med Klarna
        </p>
      </div>
    </section>
    </>
  );
};

export default Home;
