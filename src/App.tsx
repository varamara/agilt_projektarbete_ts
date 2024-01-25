import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/home/Home";
import Contact from "./views/contact/Contact";
import Terms from "./views/terms/Terms";
import Footer from "./components/footer/Footer";
import Size from "./views/size/Size";
import Products from "./views/products/Products";
import Dresses from "./views/dresses/Dresses"; 

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
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
