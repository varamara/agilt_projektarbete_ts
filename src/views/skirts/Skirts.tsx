import React, { useEffect, useState } from "react";
import "../../components/productGrid/product-grid.scss";
import ProductService from "../../services/ProductService";
import ProductGrid from "../../components/productGrid/ProductGrid";
import { Product } from "../../types";
import Products from "../products/Products";

const Skirts: React.FC = () => {
  const [skirts, setSkirts] = useState<Product[]>([]);
  const productService = ProductService();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.getAllProducts();
        setSkirts(
          data.filter((product: Product) => product.category === "Skirts")
        );
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [productService]);

  return (
    <Products title="Kjolar">
      <section>
        <ProductGrid products={skirts} />
      </section>
    </Products>
  );
};

export default Skirts;
