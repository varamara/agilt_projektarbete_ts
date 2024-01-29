import React, { useEffect, useState } from "react";
import ProductService from "../../services/ProductService";
import ProductGrid from "../../components/productGrid/ProductGrid";
import Products from "../products/Products";

const AllProducts: React.FC = () => {
  const productService = ProductService();
  const [allProducts, setAllProducts] = useState(productService.products);

  useEffect(() => {
    const fetchAllProducts = async () => {
      const data = await productService.getAllProducts();
      setAllProducts(data);
    };

    fetchAllProducts();
  }, [productService]);

  return (
    <Products title="Produkter">
    <div>
      <ProductGrid products={allProducts} />
    </div>
    </Products>
  );
};

export default AllProducts;
