import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";



function App() {
  return (
    <div className="App">
         <Home />

      <Routes>
       <Route path='/' component={<Home/>} />
       <Route path='/Product' component={<Product/>} />
       <Route path='/Register' component={<Register/>} />
       <Route path='/Login' component={<Login/>} />
       <Route path='/Cart' component={<Cart/>} />
       <Route path='/Home' component={<Home/>} />

      </Routes>
       </div>
  );
}

export default App;