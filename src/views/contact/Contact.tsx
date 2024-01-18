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
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7158.527878401031!2d13.17886003609608!3d63.34932522732079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x466e732cb2d89ae3%3A0x4039571959f4e9fe!2zODM3IDUyIFPDpWLDtmxl!5e0!3m2!1ssv!2sse!4v1705582722279!5m2!1ssv!2sse"></iframe>
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
