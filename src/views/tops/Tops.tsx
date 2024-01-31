import React, { useEffect, useState } from "react";
import "../../components/productGrid/product-grid.scss";
import ProductService from "../../services/ProductService";
import ProductGrid from "../../components/productGrid/ProductGrid";
import { Product } from "../../types";
import Products from "../products/Products";

const Tops: React.FC = () => {
  const [tops, setTops] = useState<Product[]>([]);
  const productService = ProductService();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.getAllProducts();
        setTops(data.filter((product: Product) => product.category === "Tops"));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [productService]);

  return (
    <Products title="Toppar">
      <section>
        <ProductGrid products={tops} />
      </section>
    </Products>
  );
};

export default Tops;
