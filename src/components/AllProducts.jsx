import styled from "styled-components"
import { allProducts } from "../data"
import ProductItem from "./ProductItem"

const Container = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  padding-top: 20px;
`
const Wrapper = styled.div`
  display: flex;
`
const ProductWrapper = styled.div`
  height: auto;
  width: 100vw ;

  display: flex;
  flex-direction: column;
  align-items: center;
` 
const Title = styled.h1`
  font-size: 60px;
`
const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1 1 0; /* reset flex property to 0 to allow for manual width assignment */
  
  & > * {
    flex-basis: calc(33.333333% - 20px); /* set width of each item to one-third of the Wrapper's width minus margin */
    margin: 10px; /* add some margin between each item */
  }
`
const AllProducts = () => {
  return (
    <Container>
      <Wrapper>
        <ProductWrapper>
          <Title>OUR PRODUCTS </Title>
          <ProductContainer>
           {allProducts.map (item => (
           <ProductItem item = {item} key ={item.id}/>
           ))}
          </ProductContainer>
        </ProductWrapper>
      </Wrapper>
    </Container>
  )
}

export default AllProducts