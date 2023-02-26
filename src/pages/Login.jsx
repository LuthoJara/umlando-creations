// import styled from "styled-components"
// import clothes3 from "../images/clothes3.jpg"

// const Container = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background: linear-gradient(
//     rgba(198, 183, 183, 0.75),
//     rgba(230, 215, 215, 0.75)
//   );
//   background-image: url(${clothes3});
//   background-position: center;
//   background-size: cover;

//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
// const Wrapper = styled.div`
//   padding: 20px;
//   width: 25%;
//   background-color: #fff;
// `
// const Title = styled.h1`
//   font-size: 24px;
//   font-weight: 300;
// `
// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
// `
// const Input = styled.input`
//   flex: 1;
//   min-width: 40%;
//   margin: 10px 0px;
//   padding: 10px; 
// `

// const Button = styled.button`
//   width: 40%;
//   border: none;
//   padding: 15px 20px;
//   background-color: #0b8b7e;
//   color: #fff;
//   cursor: pointer;
//   margin-bottom: 10px;
// `
// const Link = styled.a`
//   margin: 10px 0px;
//   font-size: 14px;
//   text-decoration: underline;
//   cursor: pointer;
// `

// const Login = () => {
//   return (
//     <Container>
//         <Wrapper>
//           <Title>SIGN IN</Title>
//           <Form>
//             <Input placeholder="username"/>   
//             <Input placeholder="password"/>                               
//           <Button>LOGIN</Button>
//           <Link>DO YOU NOT REMEMBER THE PASSWORD?</Link>
//           <Link>CREATE A NEW ACCOUNT</Link>
//           </Form>
//         </Wrapper>
//     </Container>
//   )
// }

// export default Login

import React, { useState } from "react";
import styled from "styled-components";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Container = styled.div`
  
`

const LoginPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #0077ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
  };

  return (
    <Container>
    <Navbar/>
    <LoginPageWrapper>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button type="submit">Login</Button>
      </Form>
    </LoginPageWrapper>
    <Footer/>
    </Container>
  );
};

export default Login;