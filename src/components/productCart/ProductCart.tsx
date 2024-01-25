import React from "react"
import "./product-cart.scss"

const ProductCart: React.FC = () => {
    return (
        <>
        <section className="shopping-cart">
            <div className="continue-shopping">
                <img src="src\assets\go-back.svg" alt="go-back image" />
                <a href="#"><p>Fortsätt Handla</p></a>
                
            </div>
            <div className="product-info">
                <h2>Kundvagn</h2>
                <div className="product-details">
                    <img className="prod-img" src="src\assets\images\nyhero.jpg" alt="product image" />
                    <a className="prod-name" href="#">
                        <p >
                            Produktnamn
                            <span className="prod-num">#produktnummer</span>
                        </p>
                    </a>
                    <img className="add-sub" src="src\assets\add.svg" alt="add-icon" />
                    <span className="quantity">2</span>
                    <img className="add-sub" src="src\assets\subtract.svg" alt="subtract-icon" />
                    <span className="product-cost">
                        <p>399.00 Kr</p>
                    </span>
                    <img className="trash-bin" src="src\assets\trash-bin.svg" alt="trash-icon" />
                </div>

                <img className="prod-separator" src="src\assets\prod-separator.svg" alt="product-separator" />
                
                
            </div>
        </section>
        </>
        
    )
}

export default ProductCart



