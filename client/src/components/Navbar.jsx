import React from 'react';
import styled from 'styled-components';

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';

// import Product from '../pages/Product'
// import AboutUs from '../pages/AboutUs'
// import ContactUs from '../pages/ContactUs'
// import Home from '../pages/Home'
// import Login from '../pages/Login'
// import Register from '../pages/Register'
// import Cart from '../pages/Cart'

import {Link} from 'react-router-dom'

const Container = styled.div`
  height: 60px;
  background-color: #ffffff;
  padding-bottom: 5px;
`
const Wrapper = styled.div`
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const Logo = styled.h1`
  font-weight: bold;
  font-size: 36px;
`
const Centre = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
`
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  margin-right: 5px;
`
const Input = styled.input`
  border: none;
  width: 150px;
`

const Navbar = () => {
  return (

  <Container>
      <Wrapper>
       <Left> 
        <Route path />       
        <MenuItem>
        <Link to="/Product">
        PRODUCTS
        </Link>
        </MenuItem>
        <MenuItem>
        <Link to="/AboutUs">
        ABOUT US
        </Link>
        </MenuItem>
        <MenuItem>
        <Link to="/ContactUs">
        CONTACT US
        </Link>
        </MenuItem>
       </Left>
       <Centre>
        <Logo>
        <Link to="/">
        UMLANDO CREATIONS.
        </Link>
        </Logo>
       </Centre>
       <Right>
        {/* //The menu functionality is below
        //There is supposed to be a mail icon for registering and signing in from MUI below */}
        <MenuItem>
        <Link to="/Register">
        REGISTER
        </Link>
        </MenuItem>
        <MenuItem>
        <Link to="/Login">
        LOGIN
        </Link>
        </MenuItem>
    
        <MenuItem>
        <Badge badgeContent={4} color="primary">
        <Link to="/Cart">
        <ShoppingCartOutlinedIcon/>
        </Link>
        </Badge>
        </MenuItem> 
        <SearchContainer>
        <Input/> 
        <SearchIcon/> 
        </SearchContainer>
       </Right>
      </Wrapper>
    </Container>

  )
}

export default Navbar