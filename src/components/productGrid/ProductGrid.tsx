import React from "react";
import "./product-grid.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Product } from "../../types";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <section className="products">
      <span>Populärt just nu!</span>
      <div className="product-grid">
        {products.length === 0 ? (
          <p>Loading...</p>
        ) : (
          products.slice(0, 10).map((product) => (
            <Link to="/products" key={product.id} className="product-card-link">
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.title} />
                <div className="product-info">
                  <div className="product-header">
                    <h3>{product.title}</h3>
                    <h4>${product.price}</h4>
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      className="cart-icon"
                    />
                  </div>
                  <div className="product-body">
                    <p>{product.description}</p>
                    <p>Category: {product.category}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
