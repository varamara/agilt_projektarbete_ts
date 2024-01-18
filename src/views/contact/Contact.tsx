import React from "react";
import "./contact.scss";
import Navbar from "../../components/navbar/Navbar"
import Layout from "../../components/layoutComponent/Layout"



const Contact: React.FC = () => {
  return (
    <>
    <Navbar navbarClassName="alt-view-navbar" />
    <Layout>
    <section className="contact">
        <h1>Kontakt</h1>
    </section>
    </Layout>
    </>
  )
}

export default Contact