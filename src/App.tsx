import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/home/Home";
import Contact from "./views/contact/Contact";
import Terms from "./views/terms/Terms";
import Footer from "./components/footer/Footer";
import Size from "./views/size/Size";
import Products from "./views/products/Products";
import ShoppingCart from "./views/shoppingCart/ShoppingCart";
import Dresses from "./views/dresses/Dresses"; 
import Blouses from "./views/blouses/Blouses";
import Tops from "./views/tops/Tops";
import Skirts from "./views/skirts/Skirts";
import Pants from "./views/pants/Pants";
import Shorts from "./views/shorts/Shorts";
import Jumpsuits from "./views/jumpsuits/Jumpsuits";
import Kimonos from "./views/kimonos/Kimonos";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/size" element={<Size />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dresses" element={<Dresses />} />
          <Route path="/blouses" element={<Blouses />} />
          <Route path="/tops" element={<Tops />} />
          <Route path="/skirts" element={<Skirts />} />
          <Route path="/pants" element={<Pants />} />
          <Route path="/shorts" element={<Shorts />} />
          <Route path="/jumpsuits" element={<Jumpsuits />} />
          <Route path="/kimonos" element={<Kimonos />} />
          <Route path="/products" element={<Products />} />
          <Route path="/ShoppingCart" element={<ShoppingCart />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
