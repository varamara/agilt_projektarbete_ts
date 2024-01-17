import "./hero.scss";
import Button from "../buttons/button_1";
import BtnOutline from "../buttons/BtnOutline";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <h1>Prisvärd Kvalité</h1>
      <div className="button-section">
        <h3>Var vill du börja?</h3>
        <div>
          <Button>Favoriter</Button>
          <BtnOutline className="btn_outline">Kollektion</BtnOutline>
        </div>
        
      </div>
    </section>
    
  );
};

export default Hero;
