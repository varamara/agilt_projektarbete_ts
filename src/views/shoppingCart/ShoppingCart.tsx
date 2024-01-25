import React from "react"
import "./shopping-cart.scss"
import Navbar from "../../components/navbar/Navbar"
import CardDetails from "../../components/cardDetails/CardDetails"
import ProductCart from "../../components/productCart/ProductCart"

const ShoppingCart: React.FC = () => {
    return (
        <>
        <Navbar navbarClassName="alt-view-navbar" />
        <section className="shopping">
            <CardDetails />
            <ProductCart />
        </section>
        </>
        
    )
}

export default ShoppingCart