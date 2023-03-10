import { Send } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
  height: auto;
  padding-bottom: 70px;
  padding-top: 40px;
  width: 100%;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  border: 1px solid #c4bebe;
`
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #1c9d70;
    color: #fff;
`


const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get daily news on your favorite products including discounts, specials etc...</Description>
        <InputContainer>
        <Input placeholder="Your email address"/>
        <Button>
        <Send/>
        </Button> 
        </InputContainer>
    </Container>
  )
}

export default Newsletter