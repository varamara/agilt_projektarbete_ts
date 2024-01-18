import "./footer.scss";

const Footer = () => {
  return (
    <section className="footer">
      <div className="circles">
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
      <div className="footer-body">
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
