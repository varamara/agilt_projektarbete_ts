import React from "react";
import "./contact.scss";
import Navbar from "../../components/navbar/Navbar";
import Layout from "../../components/layoutComponent/Layout";
import ContactForm from "../../components/contactForm/ContactForm";

const Contact: React.FC = () => {
  return (
    <>
      <Navbar navbarClassName="alt-view-navbar" />
      <Layout>
        <section className="contact-section">
          <div className="map">
            <iframe
              className="google-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.966377314961!2d139.5788815!3d35.702445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018ef7d8863d2a9%3A0x88748c947c561c9e!2sCapy%20Neko%20Cafe%20Kichijoji!5e0!3m2!1ssv!2sse!4v1705573829378!5m2!1ssv!2sse"
            ></iframe>
          </div>
          <div className="form-container">
            <ContactForm />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
