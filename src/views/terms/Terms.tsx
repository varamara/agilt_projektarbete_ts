import React from "react"
import "./terms.scss"
import TextBlock from '../../components/termsComponents/TextBlock';
import Navbar from "../../components/navbar/Navbar"

const Terms: React.FC = () => {
    return (
        <>
        <Navbar navbarClassName="alt-view-navbar" />
        <section className="terms-section">
            <div className="section-one">
                <h1 className="terms-header">
                    Köpvillkor <br />Konini
                </h1>
                <aside className="design-components">
                    <div className="cirle">
                        <div className="documents" >
                            <img className="doc-img" src="src\assets\dokument1.png" alt="documents" />
                        </div>
                    </div>
                </aside>
                <div className="txt-container">
                    <span className="minor-headline">Allmänna villkor</span>
                    <TextBlock text="
                    Vi följer såväl 
                    konsumentköplagen som distansavtalslagen. För att genomföra en 
                    beställning måste du vara myndig eller ha målsmans medgivande."/>
                    <span className="minor-headline">Beställning</span>
                    <TextBlock text="
                    Din beställning är bindande. Genom att 
                    göra en beställning hos oss godkänner du våra köp & leveransvillkor.
                    Har du gjort en beställning av misstag ber vi att du kontaktar oss så 
                    fort som möjligt."/>
                    <span className="minor-headline">Priser</span>
                    <TextBlock text="
                    Alla priser anges inklusive svensk moms. Eventuella erbjudanden gäller så långt lagret räcker om inte annat anges. ."/>
                    <span className="minor-headline">Betalning</span>
                    <TextBlock text="
                    Vi erbjuder betalning via Klarna - Kort, Faktura, Delbetalning, Internetbank.
"/>
                </div>
            </div>
            <div className="section-two">
                <aside className="design-components">
                    <div className="circle2">
                    </div>
                </aside>
                <div className="txt-container2">
                    <span className="minor-headline">Leveranstid</span>
                    <TextBlock text="
                    Vi packar din order så fort som möjligt. 
                    Då vi är ett litet företag med få anställda så kan vi inte garantera att
                    din vara packas dagen efter. Vår målsättning är att packa och skicka 
                    din vara SENAST tre arbetsdagar efter din beställning. Leveranstiden är 
                    satt mellan 3-5 dagar från att du gjort din beställning. Vi ansvarar ej 
                    för DHL:s eventuella förseningar. 
                    "/>
                    <span className="minor-headline">Leveransförsening</span>
                    <TextBlock text="
                    Om leveransförsening av någon 
                    anledning uppstår har du möjlighet att häva köpet utan kostnader. Om ett
                    lagersaldo misstämmer kommer vi att kontakta dig omgående. Vi kommer 
                    även att kontakta dig om din vara ej kan skickas inom vår normala 
                    leveranstid. "/>
                    <span className="minor-headline">Leveransvillkor & leveranssätt</span>
                    <TextBlock text="
                    Våra varor levereras av DHL, från vårt huvudkontor i Stockholm. "/>
                    <span className="minor-headline">Frakt</span>
                    <TextBlock text="
                    Vi skickar alla ordrar över 500 kronor fraktfritt inom Sverige. Vid order under 500 kronor kostar frakten 49 kronor."/>
                </div>
            </div>
            <div className="section-three">
                <aside className="design-components">
                    <div className="circle3">
                    </div>
                    <div className="secondary-circle">
                    </div>
                </aside>
                <div className="txt-container">
                    <span className="minor-headline">Garanti</span>
                    <TextBlock text="
                    När du köper en vara från oss vill vi att du 
                    som kund ska vara nöjd. Om varan inte håller förväntad kvalitet eller om du på annat sätt är missnöjd med din vara, vänligen kontakta oss så ska vi göra vårt bästa för att hjälp dig. "/>
                    <span className="minor-headline">Ångerrätt och återbetalning</span>
                    <TextBlock text=" 
                    Som kund hos oss har du 14 dagars öppet köp (från datum för uthämtad order) utan speciell anledning. Observera att du måste ha lämnat in din retur inom 14 dagar för att öppet köp ska gälla.
                    Du har rätt att undersöka samt prova den köpta varan. 
                    Om en returnerad vara har använts eller hanterats i större utsträckning än som varit nödvändigt för detta, har vi rätt till ett avdrag för värdeminskningen på varan som kan uppgå till varans fullständiga pris. 
                    Som kund måste du alltid kontakta Konini Shop innan eventuell retur. Vill du returnera en vara skickar vi dig en retursedel från DHL, paketet lämnar du sen in på närmaste DHL-ombud. Returfrakten kostar 49 kronor och dras från beloppet vi återbetalar dig för din returnerade vara. 
                    Observera att vi måste ta emot och godkänna returen för att återbetalning ska ske. Vill du byta till en annan vara genomför du ett nytt köp i webshopen. Vi ansvarar ej för borttappade paket eller eventuella skador på returen som skett under transport. "/>
                
                </div>
            </div>
            <div className="section-four">
                <div className="txt-container4">
                    <span className="minor-headline">Reklamationer</span>
                    <TextBlock text="
                    Felaktig eller skadad vara skall 
                    reklameras inom skälig tid efter det att du har upptäckt felet eller 
                    skadan. Om du reklamerar inom två månader räknas det alltid som att det 
                    skett i rätt tid. Kontakta alltid Konini Shop innan eventuell retur. 
                    Skicka aldrig varor i retur innan du har talat med oss. 
                    "/>
                    <span className="minor-headline">Tvist</span>
                    <TextBlock text="
                    Vi följer Allmänna reklamationsnämndens rekommendationer vid eventuell tvist."/>
                    <span className="minor-headline">Outlösta paket</span>
                    <TextBlock text="
                    Outlösta paket debiteras en avgift på 250kr för att täcka våra kostnader. "/>
                </div>
            </div>
        </section>
        </>
        
    )
}

export default Terms