import { useEffect } from "react";
import "./product-grid.scss";
import ProductService from "../../services/ProductService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const ProductGrid = () => {
  const productService = ProductService();

  useEffect(() => {
    productService.getAllProducts(12);
  }, [productService]);


  return (
    <div className="product-grid">
      {productService.products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        productService.products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <div className="product-info">
              <div className="product-header">
                <h3>{product.title}</h3>
                <h4>${product.price}</h4>
                <FontAwesomeIcon icon={faCartShopping} className="cart-icon"/>
              </div>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Category: {product.category}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductGrid;
