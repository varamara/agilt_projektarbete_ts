import "./hero.scss";
import Button from "../buttons/button_1";
import BtnOutline from "../buttons/BtnOutline";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <h1>Prisvärd Kvalité</h1>
      <div className="button-section">
        <h2>Var vill du börja?</h2>
        <div>
          <Button aria-label="Open favorites" title="favorites">Favoriter</Button>
          <BtnOutline className="btn_outline" aria-label="Go to selection" title="selection of clothes">Kollektion</BtnOutline>
        </div>
        
      </div>
    </section>
    
  );
};

export default Hero;
