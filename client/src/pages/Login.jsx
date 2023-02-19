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
  flex-direction: column;
`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px; 
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #0b8b7e;
  color: #fff;
  cursor: pointer;
`
const Link = styled.a`
  
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input placeholder="username"/>   
            <Input placeholder="password"/>                               
          <Button>LOGIN</Button>
          <Link>DO YOU NOT REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
          </Form>
        </Wrapper>
    </Container>
  )
}

export default Login