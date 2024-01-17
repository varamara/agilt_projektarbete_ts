import "./footer.scss";
import PrimaryCircle from "../circles/PrimaryCircle";
import SecondaryCircle from "../circles/SecondaryCircle";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-body">
        <div className="sales-txt">
          <p>
            <img src="src\assets\Check.svg" alt="check-mark" />
            Fraktfritt över 500:-
          </p>
          <p>
            <img src="src\assets\Check.svg" alt="check-mark" />
            3-5 dagars leveranstid
          </p>
          <p>
            <img src="src\assets\Check.svg" alt="check-mark" />
            Betala med Klarna
          </p>
        </div>
        <PrimaryCircle />
        <SecondaryCircle />
        <div className="icons">
          <a href="https://www.google.com/intl/sv/gmail/about/">
            <img src="src\assets\at.png" />
          </a>
          <a href="https://www.facebook.com/">
            <img src="src\assets\fb.png" />
          </a>
          <a href="https://www.instagram.com/">
            <img src="src\assets\ig.png" />
          </a>
        </div>
        <p>&copy; Konini 2024 </p>
      </div>
    </section>
  );
};

export default Footer;
