import React from 'react'

import Announcements from '../components/Announcements'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

import {Route, Routes, Link} from 'react-router-dom'


const Home = () => {
  return (
    <>
     <Announcements/>
     <Navbar/>
     <Slider/>
     <Categories/>
     <Products/> 
     <Newsletter/>
     <Footer/>
    </>
  )
}

export default Home