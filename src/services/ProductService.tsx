import { useState } from "react";
import { Product } from "../types";

const ProductService = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const getAllProducts = async () => {
    try {
      const response = await fetch("src/data.json");
      const data = await response.json();

      setProducts(data);
      return data;
    } catch (error) {
      console.error("Could not fetch products", error);
    }
  };

  const getProductsByCategory = (category: string): Product[] => {
      return products.filter((product) => product.category === category);

  };

  return {
    getAllProducts,
    getProductsByCategory,
    products,
  };
};

export default ProductService;
