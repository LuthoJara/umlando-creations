import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcements from "../components/Announcements"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

import keychain1 from "../images/keychain1.jpg"
import { Add, Remove } from "@mui/icons-material"


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
     <Wrapper>
        <ImgContainer>
         <Image src={keychain1} />
        </ImgContainer>
        <InfoContainer>
            <Title>Keychain</Title>
            <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non nulla eaque et odio reiciendis ipsum perspiciatis ipsa consectetur dolorum qui iste, cupiditate laborum aspernatur expedita assumenda omnis perferendis praesentium quae sapiente, molestias odit! Nostrum odit cupiditate culpa, enim eos libero voluptatem, velit provident ipsa distinctio dolorum dolor quisquam ut!
            </Description>
            <Price>R50</Price>
         <FilterContainer>
          <Filter>
             <FilterTitle>Color:</FilterTitle>
             <FilterColor color="#000"> </FilterColor>
             <FilterColor color="#0a1758"> </FilterColor>
             <FilterColor color="#5e5b5b"> </FilterColor>
          </Filter>   
          <Filter>
             <FilterTitle>Quantity:</FilterTitle>
             <FilterQuantity>
             <FilterQuantityOption>5</FilterQuantityOption>
             <FilterQuantityOption>10</FilterQuantityOption>
             <FilterQuantityOption>20</FilterQuantityOption>
             <FilterQuantityOption>50</FilterQuantityOption>
            
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
     <Newsletter/>
     <Footer/>
    </Container>
  )
}

export default Product