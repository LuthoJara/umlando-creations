import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useState } from "react";

const Container = styled.div`
  background-color: #d6c9c9;
`
const Heading = styled.h1`

`
const CreateAccountFormWrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
`;
const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  background-color: #75ffbf;
  font-weight: 500;
  font-family: Arial, Helvetica, sans-serif;
  border: 1px solid #ccc;
  width: 100%;
`;
const Button = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #000000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const CreateAccount = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ username, email, password });
  };

  return (
    <Container>
      <Navbar />
      <CreateAccountFormWrapper>
      <Heading><hr/>Create an account<hr/></Heading>
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
          <Button type="submit">Submit Details</Button>
        </Form>
      </CreateAccountFormWrapper>
      <Footer />
    </Container>
  );
};

export default CreateAccount;