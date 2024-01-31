import React, { useEffect, useState } from "react";
import "../../components/productGrid/product-grid.scss";
import ProductService from "../../services/ProductService";
import ProductGrid from "../../components/productGrid/ProductGrid";
import { Product } from "../../types";
import Products from "../products/Products";

const Kimonos: React.FC = () => {
  const [kimonos, setKimonos] = useState<Product[]>([]);
  const productService = ProductService();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.getAllProducts();
        setKimonos(
          data.filter((product: Product) => product.category === "Kimonos")
        );
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [productService]);

  return (
    <Products title="Kimonos">
      <section className="category-kimonos-products">
        <ProductGrid products={kimonos} />
      </section>
    </Products>
  );
};

export default Kimonos;
