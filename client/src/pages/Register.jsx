import styled from "styled-components"
import clothes3 from "../images/clothes3.jpg"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(198, 183, 183, 0.75),
    rgba(230, 215, 215, 0.75)
  );
  background-image: url(${clothes3});
  background-position: center;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: #fff;
`
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px; 
`
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
` 
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #0b8b7e;
  color: #fff;
  cursor: pointer;
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form>
            <Input placeholder="name"/>
            <Input placeholder="surname"/>
            <Input placeholder="email"/>
            <Input placeholder="username"/>   
            <Input placeholder="password"/>     
            <Input placeholder="confirm password"/>  
            <Agreement>
            By creating an account, I consent to the processing of my personal data in accordance with the 
            <b> PRIVACY POLICY</b>  
            </Agreement>                          
          <Button>SUBMIT </Button>
          </Form>
        </Wrapper>
    </Container>
  )
}

export default Register