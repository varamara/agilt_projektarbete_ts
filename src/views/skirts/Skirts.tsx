// Skirts
import React, { useEffect, useState } from "react";
import "../../components/productGrid/product-grid.scss";
import Layout from "../../components/layoutComponent/Layout";
import Navbar from "../../components/navbar/Navbar";
import ProductService from "../../services/ProductService";
import ProductGrid from "../../components/productGrid/ProductGrid";
import { Product } from "../../types";

const Skirts: React.FC = () => {
  const [skirts, setSkirts] = useState<Product[]>([]);
  const productService = ProductService();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.getAllProducts();
        setSkirts(data.filter((product: Product) => product.category === "Skirts"));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [productService]);

  return (
    <Layout>
      <Navbar navbarClassName="alt-view-navbar" />
      <section className="category-skirts-products">
        <h3>Kjolar</h3>
        <ProductGrid products={skirts} />
      </section>
    </Layout>
  );
};

export default Skirts;