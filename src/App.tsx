import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/home/Home";
import Contact from "./views/contact/Contact";
import Terms from "./views/terms/Terms";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Size from "./views/size/Size";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/size" element={<Size />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
