import "./navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <section className="navbar">
      <div className="menu">
        <Link to="/">Hem</Link>
        <Link to="/Terms">Köpvillkor</Link>
        <Link to="/Size">Storleksguide</Link>
        <Link to="/Contact">Kontakt</Link>
      </div>
      <div className="logo">
        <img src="src\assets\logo.png" />
        Konini
      </div>

      <div className="search-cart">
        <form action="/sok" method="get">
          <input type="text" name="query" placeholder="Sök här..." />
          <button id="search-magni" type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
          </button>
        </form>

        <button className="cart">
          <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
        </button>
      </div>
    </section>
  );
};

export default Navbar;
