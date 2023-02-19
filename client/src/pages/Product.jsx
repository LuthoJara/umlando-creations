import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcements from "../components/Announcements"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

import keychain1 from "../images/keychain1.jpg"


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
    
`
const Filter = styled.div`
    
`
const FilterColor = styled.div`
    
`
const FilterTitle = styled.h3`
    
`
const FilterQuantity = styled.select`

`
const FilterQuantityOption = styled.option`

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
             <FilterColor>Color</FilterColor>
             <FilterColor color="#000"> </FilterColor>
             <FilterColor color="#0a1758"> </FilterColor>
             <FilterColor color="#5e5b5b"> </FilterColor>
          </Filter>   
          <Filter>
             <FilterTitle>Amount:</FilterTitle>
             <FilterQuantity>
             <FilterQuantityOption>5</FilterQuantityOption>
             <FilterQuantityOption>10</FilterQuantityOption>
             <FilterQuantityOption>20</FilterQuantityOption>             <FilterQuantityOption>Quantity:</FilterQuantityOption>
             <FilterQuantityOption>50</FilterQuantityOption>
            
             </FilterQuantity>
          </Filter>
         </FilterContainer>    
        </InfoContainer>
     </Wrapper>
     <Newsletter/>
     <Footer/>
    </Container>
  )
}

export default Product