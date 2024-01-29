import React, { useState } from "react"
import "./product-cart.scss"
import { useShoppingCart } from '../../contexts/ProductCartContext';


const ProductCart: React.FC = () => {
    const { cartCount, totalCost, updateCartCount } = useShoppingCart();

    const increaseCartCount = () => {
        updateCartCount(cartCount + 1);
    };

    const decreaseCartCount = () => {
        if (cartCount > 1) {
            updateCartCount(cartCount - 1);
        }
    };

    const [cartItems, setCartItems] = useState<string[]>(['Product 1']); // Exempel på varor i kundvagnen

    const removeFromCart = (item: string) => {
        const updatedCart = cartItems.filter(cartItem => cartItem !== item);
        setCartItems(updatedCart);
    };

    return (
        <>
        <section className="shopping-cart">
            <div className="continue-shopping">
                <img src="src\assets\go-back.svg" alt="go-back image" />
                <a href="#"><p>Fortsätt Handla</p></a>
                
            </div>
            <div className="product-info">
                <h2>Kundvagn</h2>
                {cartItems.map((item, index) => (
                <div className="product-details"  key={index}>
                    <img className="prod-img" src="src\assets\images\nyhero.jpg" alt="product image" />
                    <a className="prod-name" href="#">
                        <p >
                            Produktnamn
                            <span className="prod-num">#produktnummer</span>
                        </p>
                    </a>
                    <img className="add-sub" src="src\assets\add.svg" alt="add-icon"  onClick={increaseCartCount} />
                    <span className="quantity">{cartCount}</span>
                    <img className="add-sub" src="src\assets\subtract.svg" alt="subtract-icon"  onClick={decreaseCartCount}/>
                    <span className="product-cost">
                        <p>{totalCost} Kr</p>
                    </span>
                    
                    
                    <img onClick={() => removeFromCart(item)} className="trash-bin" src="src\assets\trash-bin.svg" alt="trash-icon" />
                
                    
                </div>
                ))}
                <img className="prod-separator" src="src\assets\prod-separator.svg" alt="product-separator" />
                
                
            </div>
        </section>
        </>
        
    )
}

export default ProductCart



