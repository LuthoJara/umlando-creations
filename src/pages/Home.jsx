//Importing components
import Announcements from '../components/Announcements'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import AllProducts from '../components/AllProducts'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
     <Announcements/>
     <Navbar/>
     <Slider/>
     <AllProducts/> 
     <Newsletter/>
     <Footer/>
    </>
  )
}

export default Home