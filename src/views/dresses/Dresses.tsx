import React, { useEffect, useState } from "react";
import "./dresses.scss";
import "../../components/productGrid/product-grid.scss";
import ProductService from "../../services/ProductService";
import ProductGrid from "../../components/productGrid/ProductGrid";
import { Product } from "../../types";
import Products from "../products/Products";

const Dresses: React.FC = () => {
  const [dresses, setDresses] = useState<Product[]>([]);
  const productService = ProductService();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.getAllProducts();
        setDresses(
          data.filter((product: Product) => product.category === "Dresses")
        );
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [productService]);

  return (
    <Products title="Klänningar">
        <ProductGrid products={dresses} />
    </Products>
  );
};

export default Dresses;
