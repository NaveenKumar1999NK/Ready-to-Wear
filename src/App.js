import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Shop from "./Pages/Shop";
import Shopcategory from "./Pages/Shopcategory";
import Product from "./Pages/Product";
import Navbar from "./Components/Navbar/Navbar";
import Loginsignup from "./Pages/Loginsignup";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kid_banner from "./Components/Assets/banner_kids.png";

function App() {
  return (
    <div className="main-function">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<Shopcategory banner={men_banner} category="men" />}
          />
          <Route
            path="/womens"
            element={<Shopcategory banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<Shopcategory banner={kid_banner} category="kid" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/login" element={<Loginsignup />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
