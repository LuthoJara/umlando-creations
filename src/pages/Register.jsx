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
//   width: 40%;
//   background-color: #fff;
// `
// const Title = styled.h1`
//   font-size: 24px;
//   font-weight: 300;
// `
// const Form = styled.form`
//   display: flex;
//   flex-wrap: wrap;
// `
// const Input = styled.input`
//   flex: 1;
//   min-width: 40%;
//   margin: 20px 10px 0px 0px;
//   padding: 10px; 
// `
// const Agreement = styled.span`
//   font-size: 12px;
//   margin: 20px 0px;
// ` 
// const Button = styled.button`
//   width: 40%;
//   border: none;
//   padding: 15px 20px;
//   background-color: #0b8b7e;
//   color: #fff;
//   cursor: pointer;
// `

// const Register = () => {
//   return (
//     <Container>
//         <Wrapper>
//           <Title>CREATE AN ACCOUNT</Title>
//           <Form>
//             <Input placeholder="name"/>
//             <Input placeholder="surname"/>
//             <Input placeholder="email"/>
//             <Input placeholder="username"/>   
//             <Input placeholder="password"/>     
//             <Input placeholder="confirm password"/>  
//             <Agreement>
//             By creating an account, I consent to the processing of my personal data in accordance with the 
//             <b> PRIVACY POLICY</b>  
//             </Agreement>                          
//           <Button>SUBMIT</Button>
//           </Form>
//         </Wrapper>
//     </Container>
//   )
// }

// export default Register

import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { useState } from "react";

const Container = styled.div`
  
`
const SignUpFormWrapper = styled.div`
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
`
const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
`
const Button = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #0077ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ username, email, password });
  };

  return (
    <Container>
    <Navbar/>
    <SignUpFormWrapper>
      <h2>Sign Up</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
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
        <Button type="submit">Sign Up</Button>
      </Form>
    </SignUpFormWrapper>
    <Footer/>
    </Container>
  );
};

export default Register;