import React from "react";
import styled from "styled-components";

//Iporting icons from MUI
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";

///Routes for the react app
import { Link } from "react-router-dom";

//Importing responsive design elements
// import {mobile} from '../responsive'

//Importing the logo
import UCLogo from "../images/UC-logo.png";
import { FavoriteBorderOutlined } from "@mui/icons-material";

const Container = styled.div`
  height: auto;
  background-color: #000000;
  padding-bottom: 5px;
`;
const Wrapper = styled.div`
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const MenuItem = styled(Link)`
  height: 8rem;
  font-size: 1.5em;
  width: auto;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  text-decoration: none;
  color: #ffffff;
  cursor: pointer;
  padding-right: 15px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Logo = styled.img`
  height: auto;
  width: 13vw;
  cursor: pointer;
`;
const Right = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-around;
`;
const SearchContainer = styled.div`
  height: auto;
  width: 10vw;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  height: 100%;
  border: none;
  width: 150px;
  /* margin-right: 15px;
  margin-left: 15px; */
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <MenuItem to="/">
            <Logo src={UCLogo} />
          </MenuItem>
        </Left>
        <Right>
          {/* <MenuItem to='/Product'>
            OUR PRODUCTS
          </MenuItem> */}
          <MenuItem to="/AboutUs">ABOUT US</MenuItem>
          <MenuItem to="/ContactUs">CONTACT US</MenuItem>
          <MenuItem to="/SignIn">SIGN IN</MenuItem>
          <MenuItem to="/Login">LOGIN</MenuItem>
          <MenuItem to="/Cart">
            <Badge
              badgeContent={4}
              color="primary"
              style={{ marginRight: "5px" }}
            >
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
          <MenuItem to="/Wishlist">
            <FavoriteBorderOutlined style={{ paddingRight: "50px" }} />
            {/* <FavoriteBorder /> */}
          </MenuItem>
          <MenuItem>
            <SearchContainer>
              <SearchIcon />
              <Input style={{ marginRight: "25px" }} />
            </SearchContainer>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};
export default Navbar;
