//Impoorting React Routes
import { Route, Routes } from "react-router-dom";

//Importing pages
import AboutUs from "./pages/AboutUs";
import Cart from "./pages/Cart";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import CreateAccount from "./pages/CreateAccount";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Product" element={<Product />} />
        <Route path='/ProductList' element={<ProductList/>} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/Wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
}

export default App;
