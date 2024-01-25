// Jumpsuits
import React, { useEffect, useState } from "react";
import "../../components/productGrid/product-grid.scss";
import Layout from "../../components/layoutComponent/Layout";
import Navbar from "../../components/navbar/Navbar";
import ProductService from "../../services/ProductService";
import ProductGrid from "../../components/productGrid/ProductGrid";
import { Product } from "../../types";

const Jumpsuits: React.FC = () => {
  const [jumpsuits, setJumpsuits] = useState<Product[]>([]);
  const productService = ProductService();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.getAllProducts();
        setJumpsuits(data.filter((product: Product) => product.category === "Jumpsuits"));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [productService]);

  return (
    <Layout>
      <Navbar navbarClassName="alt-view-navbar" />
      <section className="category-jumpsuits-products">
        <h3>Jumpsuits</h3>
        <ProductGrid products={jumpsuits} />
      </section>
    </Layout>
  );
};

export default Jumpsuits;