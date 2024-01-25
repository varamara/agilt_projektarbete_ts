// Pants
import React, { useEffect, useState } from "react";
import "../../components/productGrid/product-grid.scss";
import Layout from "../../components/layoutComponent/Layout";
import Navbar from "../../components/navbar/Navbar";
import ProductService from "../../services/ProductService";
import ProductGrid from "../../components/productGrid/ProductGrid";
import { Product } from "../../types";

const Pants: React.FC = () => {
  const [pants, setPants] = useState<Product[]>([]);
  const productService = ProductService();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.getAllProducts();
        setPants(data.filter((product: Product) => product.category === "Pants"));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [productService]);

  return (
    <Layout>
      <Navbar navbarClassName="alt-view-navbar" />
      <section className="category-pants-products">
        <h3>Byxor</h3>
        <ProductGrid products={pants} />
      </section>
    </Layout>
  );
};

export default Pants;
