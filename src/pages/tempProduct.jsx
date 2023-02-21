import styled from "styled-components"

import Navbar from "../components/Navbar"
import Announcements from "../components/Announcements"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

import keychain1 from "../images/keychain1.jpg"
import {tempCategories}  from "../data.js";


const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImgContainer = styled.div`
    flex: 1;  
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`
const Title = styled.h1`
    font-weight: 200;
`
const Description = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 30px 0px;
`
const Filter = styled.div`
    display: flex;
    align-content: center;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=> props.color};
    margin: 0px 5px;
    cursor: pointer;
`
const FilterTitle = styled.h3`
    font-size: 20px;
    font-weight: 200;
`
const FilterQuantity = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterQuantityOption = styled.option`

`
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 600;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 2px solid #8b918f;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const Button = styled.button`
    padding: 15px;
    border:2px solid #19bdaf;
    background-color: #fff;
    font-weight: 500;
    cursor: pointer;

    &:hover{
        background-color: #bab5b5;
    }
`
const Product = () => {
  return (
    <Container>
     <Announcements/>
     <Navbar/>
        {tempCategories.map((item) => (
     <Wrapper>
        <ImgContainer>
            <Image src={item.img} />
        </ImgContainer>
        <InfoContainer>
            <Title>{item.title}</Title>
            <Description> {item.description}</Description>
            <Price>{item.price}</Price>
         <FilterContainer>
         <Filter>
             <FilterTitle>Font:</FilterTitle>
             <FilterColor font = {item.font}>{item.font.indexOf} </FilterColor>
          </Filter> 
          {/* <Filter>
             <FilterTitle>Color:</FilterTitle>
             <FilterColor color="#000"> </FilterColor>
             <FilterColor color="#0a1758"> </FilterColor>
             <FilterColor color="#5e5b5b"> </FilterColor>
          </Filter>    */}
          <Filter>
             <FilterTitle>Quantity:</FilterTitle>
             <FilterQuantity>
             <FilterQuantityOption>{item.quantity}</FilterQuantityOption>            
             </FilterQuantity>
          </Filter>
         </FilterContainer>    
         <AddContainer>
            <AmountContainer>
                <Remove/>
                <Amount>1</Amount>
                <Add/>
                <Button>ADD TO CART</Button>
            </AmountContainer>
         </AddContainer>
        </InfoContainer>
     </Wrapper>
      ))}
     <Newsletter/>
     <Footer/>
    </Container>
  )
}

export default Product