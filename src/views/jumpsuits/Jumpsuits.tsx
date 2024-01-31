import React, { useEffect, useState } from "react";
import "../../components/productGrid/product-grid.scss";
import ProductService from "../../services/ProductService";
import ProductGrid from "../../components/productGrid/ProductGrid";
import { Product } from "../../types";
import Products from "../products/Products";

const Jumpsuits: React.FC = () => {
  const [jumpsuits, setJumpsuits] = useState<Product[]>([]);
  const productService = ProductService();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.getAllProducts();
        setJumpsuits(
          data.filter((product: Product) => product.category === "Jumpsuits")
        );
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [productService]);

  return (
    <Products title="Jumpsuits">
      <section>
        <ProductGrid products={jumpsuits} />
      </section>
    </Products>
  );
};

export default Jumpsuits;
