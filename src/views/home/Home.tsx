// Home.tsx
import React, { useEffect, useState } from "react";
import "./home.scss";
import Hero from "../../components/hero/Hero";
import Brands from "../../components/brands/Brands";
import ProductGrid from "../../components/productGrid/ProductGrid";
import CategorySelection from "../../components/categorySelection/CategorySelection";
import Navbar from "../../components/navbar/Navbar";
import Layout from "../../components/layoutComponent/Layout";
import { Product } from "../../types";
import ProductService from "../../services/ProductService";

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const productService = ProductService();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await productService.getAllProducts();
      setProducts(data);
    };
    fetchProducts();
  }, [productService]);

  return (
    <>
      <Navbar navbarClassName="main-view-navbar" />
      <Layout>
        <section className="home">
          <Hero />
          <CategorySelection />
          <Brands />
          <ProductGrid products={products} />
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
      </Layout>
    </>
  );
};

export default Home;
