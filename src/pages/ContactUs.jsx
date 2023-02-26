import React, { useState } from "react";
import styled from "styled-components";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Container = styled.div`
  
`

const ContactUsPageWrapper = styled.div`
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
  /* border: 1px solid #ccc; */
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

const TextArea = styled.textarea`
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
  height: 150px;
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

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <Container>
    <Navbar/>
    <ContactUsPageWrapper>
      <h2>Contact Us</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextArea
          placeholder="Message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </ContactUsPageWrapper>
    <Footer/>
    </Container>
  );
};

export default ContactUs;