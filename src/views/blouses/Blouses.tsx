import React, { useEffect, useState } from "react";
import "./blouses.scss";
import "../../components/productGrid/product-grid.scss";
import ProductService from "../../services/ProductService";
import ProductGrid from "../../components/productGrid/ProductGrid";
import { Product } from "../../types";
import Products from "../products/Products";

const Blouses: React.FC = () => {
  const [blouses, setBlouses] = useState<Product[]>([]);
  const productService = ProductService();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.getAllProducts();
        setBlouses(
          data.filter((product: Product) => product.category === "Blouses")
        );
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [productService]);

  return (
    <Products title="Blusar">
      <section>
        <ProductGrid products={blouses} />
      </section>
    </Products>
  );
};

export default Blouses;
