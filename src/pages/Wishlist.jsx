import styled from "styled-components"

import Announcements from "../components/Announcements"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import ribbon1 from "../images/ribbon1.jpg"
import ruler1 from "../images/ruler1.jpg"

import { Add, Remove } from "@mui/icons-material"

const Container = styled.div`

`
const Wrapper = styled.div`
  padding: 20px;
`
const Title = styled.h1`
  font-weight: 700;
  font-size: 2.5rem;
  text-align: center;
  text-decoration: underline;
`
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`
const Info = styled.div`
  flex: 3;
`
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`
const Image = styled.img`
  width: 200px;
  height: 250px;
`
const Details = styled.div`
  padding: 20px;
  display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span`

`
const ProductID = styled.span`

`
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
`
const PriceDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductQuantity = styled.span`  
    font-size: 24px;
    margin: 5px;
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`
const Wishlist = () => {
  return (
    <Container>
      <Announcements/>
      <Navbar/>  
      <Wrapper>
        <Title>Your Wishlist</Title>
        {/* <Top>
         <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist</TopText>
          </TopTexts>
         <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top> */}
        <Bottom>
            <Info>
                <Product>
                    <ProductDetails>
                     <Image src={ribbon1} />
                     <Details>
                        <ProductName><b>Product: </b> Stationery pack</ProductName>
                        <ProductID><b>ID: </b> 1532479654</ProductID>
                        <ProductColor color="#f70707"/>
                     </Details>
                    </ProductDetails>
                    <PriceDetails>
                        <ProductAmountContainer>
                         <Add/>
                          <ProductQuantity>3</ProductQuantity>
                         <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>R150</ProductPrice>
                    </PriceDetails>
                </Product>
                    <Hr/>
                <Product>
                    <ProductDetails>
                     <Image src={ruler1} />
                     <Details>
                        <ProductName><b>Product: </b> Red Ribbon</ProductName>
                        <ProductID><b>ID: </b> 1532479654</ProductID>
                        <ProductColor/>
                     </Details>
                    </ProductDetails>
                    <PriceDetails>
                        <ProductAmountContainer>
                         <Add/>
                          <ProductQuantity>3</ProductQuantity>
                         <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>R150</ProductPrice>
                    </PriceDetails>
                </Product>
            </Info>
            
        </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Wishlist