import { Facebook, Instagram, MailOutline, PhotoOutlined, Pinterest, RoomOutlined, Twitter } from "@mui/icons-material"
import styled from "styled-components"
import paymentMethods from "../images/paymentMethods.png"

///Routes for the react app
import {Link} from 'react-router-dom'

const Container = styled.div`
    flex: 1; 
    display: flex;  
    height: auto;
    background-color: #000000;
    padding-bottom: 5px;
`
const Left = styled.div`
    flex: 1;   
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
    color: #fff;
`
const Description = styled.p`
    margin: 20px 0px;
    color: #fff;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcons = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #fff;
    background-color: ${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    text-decoration: none;

  &:visited {
    color: #fff;
    background-color: ${props => props.color};
  }
  &:active {
    color: #fff;
    background-color: ${props => props.color};
  }
`
const Centre = styled.div`
    flex: 1;    
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;   
    color: #fff;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled(Link)`
    width: 50%;
    margin-bottom: 10px;
    color: #fff;
    text-decoration: none;
`
const Right = styled.div`
    flex: 1;    
    padding: 20px;
` 
const ContactItem = styled.div`
    margin-bottom: 20px;
    align-items: center;
    display: flex;
    color: #fff;
`
const Payment = styled.img`
    width: 50%;
`
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>UMLANDO</Logo>
            <Logo>CREATIONS</Logo>
            <Description>The best place to get all your labels.</Description>
            <SocialContainer>
            <SocialIcons color="#171787">
             <a href="https://www.instagram.com/" target={"_blank"}  rel="noopener noreferrer">
                <Facebook/>
                </a>                
             </SocialIcons>
             <SocialIcons color="#d51f8c">
             <a href="https://www.instagram.com/" target={"_blank"}  rel="noopener noreferrer">
                <Instagram/>
                </a>                
             </SocialIcons>
             <SocialIcons color="#389ae1">
             <a href="https://www.twitter.com/" target={"_blank"}  rel="noopener noreferrer">
                <Twitter/>
                </a>
             </SocialIcons>
             <SocialIcons color="#ea2113">
             <a href="https://www.pinterest.com/" target={"_blank"}  rel="noopener noreferrer">
                <Pinterest/>
                </a>
             </SocialIcons>
            </SocialContainer>
        </Left>
        <Centre>
            <Title>Helpful Links</Title>
            <List>
                <ListItem to='/'>Home</ListItem>
                <ListItem to='/Cart'>Cart</ListItem>
                <ListItem to='/Login'>My Account</ListItem>
                <ListItem to='/Wishlist'>Wishlist</ListItem>
            </List>
        </Centre>
        <Right>
            <Title>Contacts</Title>
            <ContactItem><RoomOutlined style={{marginRight: "10px"}} /> 36 Geldsoek Ave, Silver Lakes</ContactItem>
            <ContactItem><PhotoOutlined style={{marginRight: "10px"}}/> (+27) 25 895 4647</ContactItem>
            <ContactItem>
             <MailOutline style={{marginRight: "10px"}}/> Contact@Alqo.co.za
            </ContactItem>
            <ContactItem>
             <Payment src={paymentMethods}/>
            </ContactItem>
        </Right>
    </Container>
  )
}

export default Footer
