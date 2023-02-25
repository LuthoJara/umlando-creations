import React from 'react';
import styled from 'styled-components';

//Iporting icons from MUI
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';

///Routes for the react app
import {Link} from 'react-router-dom'

//Importing responsive design elements
// import {mobile} from '../responsive' 

//Importing the logo
import UCLogo from '../images/UC-logo.png'
import { FavoriteBorderOutlined } from '@mui/icons-material';

const Container = styled.div`
  height: 15vh;
  background-color: #000000;
  padding-bottom: 5px;
  /* position: absolute; */
  `

const Wrapper = styled.div`
  /* position: fixed; */
  /* z-index: 2; */
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* Media query for screens smaller than 768px */
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`

const MenuItem = styled(Link)`
  height: 4rem;
  width: auto;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  text-decoration: none;
  color: #ffffff;
  cursor: pointer;

  /* Media query for screens smaller than 768px */
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 10px 0;
    border-top: 1px solid #ffffff;
    border-bottom: 1px solid #ffffff;
  }
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const Logo = styled.img`
  height: auto;
  width: 13vw;
  cursor: pointer;
   
  /* Media query for screens smaller than 768px */
   @media screen and (max-width: 768px) {
    height: auto;
    width: 7vw;
  }
`

const Right = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-around;

  /* Media query for screens smaller than 768px */
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding-top: 10px;
    border-top: 1px solid #ffffff;
  }
`

const SearchContainer = styled.div`
  margin-right: 5px;
  /* padding-right: 25px; */
  display: flex;
  align-items: center;
  justify-content: center;
`

const Input = styled.input`
  height: 100%;
  border: none;
  width: 150px;

  /* Media query for screens smaller than 768px */
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <MenuItem to='/'>
            <Logo src={UCLogo} />
          </MenuItem>
        </Left>
        <Right>
          <MenuItem to='/Product'>
            OUR PRODUCTS
          </MenuItem>
          <MenuItem to='/AboutUs'>
            ABOUT US
          </MenuItem>
          <MenuItem to='/ContactUs'>
            CONTACT US
          </MenuItem>
          <MenuItem to='/Register'>
            REGISTER
          </MenuItem>
          <MenuItem to='/Login'>
            LOGIN
          </MenuItem>
          <MenuItem to='/Cart'>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
          <MenuItem to='/Wishlist'>
            <FavoriteBorderOutlined />
            {/* <FavoriteBorder /> */}
          </MenuItem>
          <MenuItem>
            <SearchContainer>
              <SearchIcon />
              <Input />
            </SearchContainer>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}
export default Navbar