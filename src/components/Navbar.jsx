import React from 'react';
import styled from 'styled-components';

//Iporting icons from MUI
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';

///Routes for the react app
import {Link} from 'react-router-dom'

//Importing responsive design elements
import {mobile} from '../responsive' 

const Container = styled.div`
  height: 60px;
  background-color: #ffffff;
  padding-bottom: 5px;
  ${mobile({ 
   backgroundColor: "red"
})}
  
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
const MenuItem = styled(Link)`
  text-decoration: none;
  color: black;
  background-color: white;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    color: black;
    background-color: white;
  }

  &:visited {
    color: black;
    text-decoration: none;
  }
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
        <MenuItem to='/Product'>
        PRODUCTS
        </MenuItem> 
        <MenuItem to='/ProductList'>
        PRODUCT LIST 
        </MenuItem> 
        <MenuItem to='/AboutUs'>
        ABOUT US 
        </MenuItem>
        <MenuItem to='/ContactUs'> 
        CONTACT US
        </MenuItem> 
       </Left>
       <Centre>
        <MenuItem to='/'>
        <Logo>
        UMLANDO CREATIONS. 
        </Logo>
        </MenuItem> 
       </Centre>
       <Right> 
        <MenuItem to='/Register'>
        REGISTER 
        </MenuItem> 
        <MenuItem to='/Login'>
        LOGIN 
        </MenuItem>
     
        <MenuItem to='/Cart'>
        <Badge badgeContent={4} color="primary">
        <ShoppingCartOutlinedIcon/> 
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