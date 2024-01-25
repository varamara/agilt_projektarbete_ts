import React, { createContext, useState, useContext, useEffect } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

const ProductContext = createContext<any>(null);

export const ProductProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const getAllProducts = async () => {
    try {
      const response = await fetch("src/data.json");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Could not fetch products", error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, getAllProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
