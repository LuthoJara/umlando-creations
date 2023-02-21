//Impoorting React Routes
import {Route, Routes} from 'react-router-dom'

//Importing pages
import AboutUs from "./pages/AboutUs";
import Cart from "./pages/Cart";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";


function App() {
  return (
    <div className="App">
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/AboutUs' element={<AboutUs/>} />
       <Route path='/Cart' element={<Cart/>} />
       <Route path='/ContactUs' element={<ContactUs/>} />
       <Route path='/Login' element={<Login/>} />
       <Route path='/Product' element={<Product/>} />
       <Route path='/ProductList' element={<ProductList/>} />
       <Route path='/Register' element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;