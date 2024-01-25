// Blouses.tsx
import React, { useEffect, useState } from "react";
import "./blouses.scss";
import "../../components/productGrid/product-grid.scss";
import Layout from "../../components/layoutComponent/Layout";
import Navbar from "../../components/navbar/Navbar";
import ProductService from "../../services/ProductService";
import ProductGrid from "../../components/productGrid/ProductGrid";
import { Product } from "../../types";

const Blouses: React.FC = () => {
  const [blouses, setBlouses] = useState<Product[]>([]);
  const productService = ProductService();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.getAllProducts();
        setBlouses(data.filter((product: Product) => product.category === "Blouses"));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [productService]);

  return (
    <Layout>
      <Navbar navbarClassName="alt-view-navbar" />
      <section className="category-blouses products">
        <h3>Blusar</h3>
        <ProductGrid products={blouses} />
      </section>
    </Layout>
  );
};

export default Blouses;
