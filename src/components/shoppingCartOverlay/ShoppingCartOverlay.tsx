import React from "react";
import { useCartOverlay } from "../../contexts/CartOverlayContext";
import "./shopping-cart-overlay.scss"

const ShoppingCartOverlay: React.FC = () => {
  const { cart } = useCartOverlay();

  return (
    <div className="shopping-cart-overlay">
      <div className="cart-content">
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.title} - ${item.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShoppingCartOverlay;
