//Importing components
import Announcements from '../components/Announcements'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
// import Product from '../components/Product'
// import Products from '../components/Products'
import AllProducts from '../components/AllProducts'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
     <Announcements/>
     <Navbar/>
     <Slider/>
     {/* <Product/> */}
     {/* <Products/>  */}
     <AllProducts/> 
     <Newsletter/>
     <Footer/>
    </>
  )
}

export default Home