import React from 'react'
import styled from 'styled-components'

//Importing components
import Navbar from "../components/Navbar"
import Announcements from "../components/Announcements"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

const Container = styled.div`
    
`

const Wishlist = () => {
  return (
    <Container>
      <Announcements/>
      <Navbar/>
      <Newsletter/>
      <Footer/>      
    </Container>
  )
}

export default Wishlist