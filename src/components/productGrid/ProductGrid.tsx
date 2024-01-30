import React from "react";
import "./product-grid.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Product } from "../../types";
import { useCartOverlay } from "../../contexts/CartOverlayContext";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const { addToCart } = useCartOverlay();
  
  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  return (
    <section className="products">
      <span> Populärt just nu </span>
      <div className="product-grid">
        {products.length === 0 ? (
          <p>Loading...</p>
        ) : (
          products.slice(0, 12).map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <div className="product-info">
                <div className="product-header">
                  <h3>{product.title}</h3>
                  <p>${product.price}</p>
                  <button
                    className="cart-icon"
                    onClick={() => handleAddToCart(product)}
                  >
                    <FontAwesomeIcon icon={faCartShopping} />
                  </button>
                </div>
                <div className="product-body">
                  <p>{product.description}</p>
                  <p>Category: {product.category}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
