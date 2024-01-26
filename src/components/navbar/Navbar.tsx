import "./navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface NavbarProps {
  navbarClassName: string;
}

const Navbar: React.FC<NavbarProps> = ({ navbarClassName }) => {
  return (
    <section className= {`navbar ${navbarClassName}`}>
      <div className="menu">
        <button className="menu-burger"><FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} /></button>
        <Link to="/">Hem</Link>
        <Link to="/Terms">Köpvillkor</Link>
        <Link to="/Size">Storleksguide</Link>
        <Link to="/Contact">Kontakt</Link>
        <Link to="/Products">Produkter</Link>
      </div>
      <div className="logo">
        <img src="src\assets\logo.png" title="logo"/>
        <h1>Konini</h1>
      </div>

      <div className="search-cart">
        <form action="/sok" method="get">
          <input type="text" name="query" placeholder="Sök här..." />
          <button id="search-magni" type="submit" title="search">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
          </button>
        </form>

        <Link to="/ShoppingCart">
          <button className="cart" title="cart">
            <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Navbar;
