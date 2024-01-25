// Kimonos
import React, { useEffect, useState } from "react";
import "../../components/productGrid/product-grid.scss";
import Layout from "../../components/layoutComponent/Layout";
import Navbar from "../../components/navbar/Navbar";
import ProductService from "../../services/ProductService";
import ProductGrid from "../../components/productGrid/ProductGrid";
import { Product } from "../../types";

const Kimonos: React.FC = () => {
  const [kimonos, setKimonos] = useState<Product[]>([]);
  const productService = ProductService();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.getAllProducts();
        setKimonos(data.filter((product: Product) => product.category === "Kimonos"));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [productService]);

  return (
    <Layout>
      <Navbar navbarClassName="alt-view-navbar" />
      <section className="category-kimonos-products">
        <h3>Kimonos</h3>
        <ProductGrid products={kimonos} />
      </section>
    </Layout>
  );
};

export default Kimonos;