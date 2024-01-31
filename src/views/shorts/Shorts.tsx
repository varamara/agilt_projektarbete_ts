import React, { useEffect, useState } from "react";
import "../../components/productGrid/product-grid.scss";
import ProductService from "../../services/ProductService";
import ProductGrid from "../../components/productGrid/ProductGrid";
import { Product } from "../../types";
import Products from "../products/Products";

const Shorts: React.FC = () => {
  const [shorts, setShorts] = useState<Product[]>([]);
  const productService = ProductService();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.getAllProducts();
        setShorts(
          data.filter((product: Product) => product.category === "Shorts")
        );
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [productService]);

  return (
    <Products title="Shorts">
      <section>
        <ProductGrid products={shorts} />
      </section>
    </Products>
  );
};

export default Shorts;
