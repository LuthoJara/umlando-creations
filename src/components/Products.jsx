import styled from "styled-components"
import {popularItems} from "../data"
import Product from "./Product"


const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
`
const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: underline;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

`
const Products = () => {
  return (
    <Container>
      <Title>POPULAR PURCHASES</Title>
      <Wrapper>
        {popularItems.map(item=>(
          <Product item={item} key ={item.id} />
        ))}
      </Wrapper>
    </Container>
  )
}

export default Products