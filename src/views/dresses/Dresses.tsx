// Dresses.tsx
import React, { useEffect, useState } from "react";
import "./dresses.scss";
import "../../components/productGrid/product-grid.scss";
import Layout from "../../components/layoutComponent/Layout";
import Navbar from "../../components/navbar/Navbar";
import ProductService from "../../services/ProductService";
import ProductGrid from "../../components/productGrid/ProductGrid";
import { Product } from "../../types";

const Dresses: React.FC = () => {
  const [dresses, setDresses] = useState<Product[]>([]);
  const productService = ProductService();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.getAllProducts();
        setDresses(data.filter((product: Product) => product.category === "Dresses"));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [productService]);

  return (
    <Layout>
      <Navbar navbarClassName="alt-view-navbar" />
      <section className="category-dresses products">
        <h3>Klänningar</h3>
        <ProductGrid products={dresses} />
      </section>
    </Layout>
  );
};

export default Dresses;
