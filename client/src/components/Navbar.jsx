import React from 'react';
import styled from 'styled-components';

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

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
  font-size: 50px;
  /* padding-right: 30px; */
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
  /* margin-right: 25px; */
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
        <MenuItem>PRODUCTS</MenuItem>
        <MenuItem>ABOUT US</MenuItem>
        <MenuItem>CONTACT US</MenuItem>
       </Left>
       <Centre>
        <Logo>ALQO.</Logo>
       </Centre>
       <Right>
        {/* //The menu functionality is below
        //There is supposed to be a mail icon for registering and signing in from MUI below */}
        <MenuItem>REGISTER</MenuItem>
        <MenuItem>SIGN IN</MenuItem>
        {/* //There is supposed to be a shopping cart icon from MUI below */}

        <MenuItem><ShoppingCartOutlinedIcon/></MenuItem> 
        <SearchContainer>
        {/* //The functionality for searching is below */}
        <Input/> 
        icon
        {/* //There is supposed to be an icon for searching from MUI */}
        <SearchIcon/> 
        {/* <SearchOutlinedIcon/> */}

        </SearchContainer>
       </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar