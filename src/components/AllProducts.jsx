import styled from "styled-components"
import { ourProducts } from "../data"
import ProductItem from "./ProductItem"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 20px;
  width: 80%;
  /* justify-content: space-between; */
`
const Title = styled.h1`
  height: 0.1rem;
  width: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: underline;
`
const Wrapper = styled.div`
  display: flex;
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
      <Title>OUR PRODUCTS </Title>
      <Wrapper>
        {ourProducts.map (item => (
        <ProductItem item = {item} key ={item.id}/>
        ))}
      </Wrapper>
    
    </Container>
  )
}

export default AllProducts