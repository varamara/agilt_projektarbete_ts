// Pants
import React, { useEffect, useState } from "react";
import "../../components/productGrid/product-grid.scss";
import ProductService from "../../services/ProductService";
import ProductGrid from "../../components/productGrid/ProductGrid";
import { Product } from "../../types";
import Products from "../products/Products";

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
    <Products title="Byxor">
      <section className="category-pants-products">
        <ProductGrid products={pants} />
      </section>
    </Products>
  );
};

export default Pants;
