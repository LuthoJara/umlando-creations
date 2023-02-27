//Importing for the sticky menu
import { useState, useEffect } from "react";
import styled from "styled-components";

//Iporting icons from MUI
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";

///Routes for the react app
import { Link, useLocation} from "react-router-dom";

//Importing the logo
import UCLogo from "../images/UC-logo.png";
import { FavoriteBorderOutlined } from "@mui/icons-material";

const Container = styled.div`
  height: auto;
  background-color: #000000;
  padding-bottom: 5px;

  //Making the menu sticky
  position: relative;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000000;

//Making the menu sticky
  height: ${props => props.sticky ? "5rem" : "8rem"};
  padding: ${props => props.sticky ? "0px 10px" : "20px 40px"};
  position: ${props => props.sticky ? "fixed" : "relative"};
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
`
const MenuItem = styled(Link)`
  font-size: 1.4rem;
  width: auto;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  text-decoration: none;
  color: #ffffff;
  cursor: pointer;
  padding-right: 15px;
`
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
`;

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const { pathname } = useLocation();

  
  const excludedPaths = ["/Login", "/CreateAccount", "/ContactUs"];

  const handleScroll = () => {
    if (window.scrollY > 100 && !excludedPaths.includes(pathname)) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);


  
  return (
    <Container>
      <Wrapper sticky={isSticky}>
        <Left>
          <MenuItem to="/">
            <Logo src={UCLogo} />
          </MenuItem>
        </Left>
        <Right>
          <MenuItem to="/ProductList">PRODUCT LIST</MenuItem>
          <MenuItem to="/Product">PRODUCT INFO</MenuItem>
          <MenuItem to="/AboutUs">ABOUT US</MenuItem>
          <MenuItem to="/ContactUs">CONTACT US</MenuItem>
          <MenuItem to="/CreateAccount">CREATE AN ACCOUNT</MenuItem>
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
            <FavoriteBorderOutlined style={{ paddingRight: "30px" }} />
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
