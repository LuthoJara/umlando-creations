import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@mui/icons-material"
import styled from "styled-components"
import paymentMethods from "../images/paymentMethods.png"

const Container = styled.div`
    flex: 1; 
    display: flex;  
`
const Left = styled.div`
    flex: 1;   
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Centre = styled.div`
    flex: 1;    
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;    
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Logo = styled.h1`

`
const Description = styled.p`
    margin: 20px 0px;
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
`
const Right = styled.div`
    flex: 1;    
    padding: 20px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    align-items: center;
    display: flex;
`
const Payment = styled.img`
    width: 50%;
`
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>ALQO.</Logo>
            <Description>The best place to get all your labels. </Description>
            <SocialContainer>
             <SocialIcons color="#224b9c">
                <Facebook/>
             </SocialIcons>
             <SocialIcons color="#d51f8c">
                <Instagram/>
             </SocialIcons>
             <SocialIcons color="#389ae1">
                <Twitter/>
             </SocialIcons>
             <SocialIcons color="#ea2113">
                <Pinterest/>
             </SocialIcons>
            </SocialContainer>
        </Left>
        <Centre>
            <Title>Helpful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Stickers</ListItem>
                <ListItem>Ribbons</ListItem>
                <ListItem>Iron-On</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>T&C</ListItem>
            </List>
        </Centre>
        <Right>
            <Title>Contacts</Title>
            <ContactItem><Room style={{marginRight: "10px"}} /> 36 Geldsoek Ave,Silver Lakes</ContactItem>
            <ContactItem><Phone style={{marginRight: "10px"}}/> (+27) 25 895 4647</ContactItem>
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