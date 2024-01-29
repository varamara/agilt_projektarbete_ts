import "./navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import ShoppingCartOverlay from "../shoppingCartOverlay/ShoppingCartOverlay";

interface NavbarProps {
  navbarClassName: string;
}

const Navbar: React.FC<NavbarProps> = ({ navbarClassName }) => {
  const [showCartOverlay, setShowCartOverlay] = useState(false);

  const handleShowCartOverlay = () => {
    setShowCartOverlay(true);
  };

  const handleHideCartOverlay = () => {
    setShowCartOverlay(false);
  };

  return (
    <section className={`navbar ${navbarClassName}`}>
      <div className="menu">
        <button className="menu-burger" aria-label="Open menu">
          <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff" }} />
        </button>
        <Link to="/">Hem</Link>
        <Link to="/Terms">Köpvillkor</Link>
        <Link to="/Size">Storleksguide</Link>
        <Link to="/Contact">Kontakt</Link>
        <Link to="/Products">Produkter</Link>
      </div>
      <div className="logo">
        <img src="src\assets\logo.png" title="logo" />
        <h1>Konini</h1>
      </div>

      <div className="search-cart">
        <form action="/sok" method="get">
          <input type="text" name="query" placeholder="Sök här..." />
          <button
            id="search-magni"
            type="submit"
            title="search"
            aria-label="Click to submit"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
          </button>
        </form>

        <div
          className="cart"
          onMouseEnter={handleShowCartOverlay}
          onMouseLeave={handleHideCartOverlay}
        >
          <Link to="/ShoppingCart" className="cart-link">
            <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
          </Link>
          {showCartOverlay && <ShoppingCartOverlay />}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
