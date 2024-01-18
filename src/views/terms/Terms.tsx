import React from "react"
import "./terms.scss"
import Navbar from "../../components/navbar/Navbar"

const Terms: React.FC = () => {
    return (
        <>
        <Navbar navbarClassName="alt-view-navbar" />
        <section className="terms-section">
            <div className="txt-container">
                <div>
                    <h1 className="terms-header">
                        Köpvillkor <br />Konini
                    </h1>
                </div>
                <div className="terms-txt">
                    <p>
                        <span className="minor-headline">Allmänna villkor</span><br />
                        Vi följer såväl 
                        konsumentköplagen som distansavtalslagen. För att genomföra en 
                        beställning måste du vara myndig eller ha målsmans medgivande.
                    </p>
                    <p>
                        <span className="minor-headline">Beställning</span><br />
                        Din beställning är bindande. Genom att 
                        göra en beställning hos oss godkänner du våra köp & leveransvillkor.
                        Har du gjort en beställning av misstag ber vi att du kontaktar oss så 
                        fort som möjligt.
                    </p>
                    <p>
                        <span className="minor-headline">Priser</span><br />
                        Alla priser anges inklusive svensk moms. Eventuella erbjudanden gäller så långt lagret räcker om inte annat anges. <br /><br />


                        <span className="minor-headline">Betalning</span><br />
                        Vi erbjuder betalning via Klarna - Kort, Faktura, Delbetalning, Internetbank.
                    </p>
                </div>
            </div>
            <aside className="design-components">
                <div className="cirle">
                    <div className="documents" >
                        <img className="doc-img" src="src\assets\dokument1.png" alt="documents" />
                    </div>
                </div>
            </aside>
        </section>
        </>
        
    )
}

export default Terms