// Shorts
import React, { useEffect, useState } from "react";
import "../../components/productGrid/product-grid.scss";
import Layout from "../../components/layoutComponent/Layout";
import Navbar from "../../components/navbar/Navbar";
import ProductService from "../../services/ProductService";
import ProductGrid from "../../components/productGrid/ProductGrid";
import { Product } from "../../types";

const Shorts: React.FC = () => {
  const [shorts, setShorts] = useState<Product[]>([]);
  const productService = ProductService();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.getAllProducts();
        setShorts(data.filter((product: Product) => product.category === "Shorts"));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [productService]);

  return (
    <Layout>
      <Navbar navbarClassName="alt-view-navbar" />
      <section className="category-shorts-products">
        <h3>Shorts</h3>
        <ProductGrid products={shorts} />
      </section>
    </Layout>
  );
};

export default Shorts;
