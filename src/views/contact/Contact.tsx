import React from "react";
import "./contact.scss";
import Navbar from "../../components/navbar/Navbar"



const Contact: React.FC = () => {
  return (
    <>
    <Navbar navbarClassName="alt-view-navbar" />
    <section className="contact">
        <h1>Kontakt</h1>
    </section>
    </>
  )
}

export default Contact