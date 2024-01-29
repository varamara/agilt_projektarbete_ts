import React from "react"
import "./card-details.scss"
import SecondaryBtn from "../../components/buttons/SecondaryBtn"
import {useShoppingCart} from '../../contexts/ProductCartContext'

const CardDetails: React.FC = () => {
    const { totalCost } = useShoppingCart();

    return (
        <>
        <section className="shopping">
            <div className="card-info">
                <h2>Kort Information</h2>
                <p className="card-txt">Vi tar emot</p>
                <div className="card-option">
                    
                    <div className="card-display">
                        <img className="cards" src="src\assets\MasterCard.svg" alt="Master-card logo" />
                        <img className="cards" src="src\assets\Visa.svg" alt="Visa logo" />
                    </div>
                    
                </div>
                
                <form className="card-details" action="" method="post">
                    <div className="card-name-number">
                        <p>Namn på kortet</p>
                        <input className="input-flex" type="text" placeholder="Namn"/>

                        <p>Kortnummer</p>
                        <input className="input-flex" type="text" placeholder="**** **** **** ****" />
                    </div>
                    


                    <div className="expiry-CVV">
                        <div className="expiry">
                            <p>Utgångsdatum</p>
                            <input className="expiry-flex" type="text" placeholder="mm/yy" />
                        </div>
                        <div className="cvv">
                            <p>CVV</p>
                            <input className="expiry-flex" type="text" placeholder="123" />
                        </div>
                    </div>
                    
                </form>
                <div className="sum-info">
                    <div className="sum">
                        <p>Summa:</p>
                        <p>{totalCost} Kr</p>
                    </div>
                    <div className="shipping">
                        <p>Frakt:</p>
                        <p>49,00 Kr</p>
                    </div>
                    <div className="total">
                        <p>Totalsumma &#40;inkl. moms&#41;:</p>
                        <p>{totalCost + 49} Kr</p>
                    </div>
                </div>
                

                <SecondaryBtn className="secondary-btn">Betala</SecondaryBtn>
            </div>
        </section>
        </>
        
    )
}

export default CardDetails