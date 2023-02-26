import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';

const Container = styled.div`

`
const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
`
const Heading = styled.h1`
  font-size: 36px;
  text-align: center;
  margin-bottom: 40px;
`
const Subheading = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`
const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
`
const List = styled.ul`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
`
const ListItem = styled.li`
  margin-bottom: 10px;
`
const AboutUs = () => {
  return (
    <Container>
      <Navbar/>
      <Wrapper>
      <Heading>About Us</Heading>
      <Subheading>Our Mission</Subheading>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        ullamcorper mauris eu elit bibendum, nec vestibulum mi iaculis. Mauris
        euismod, velit vitae aliquam bibendum, mauris nulla venenatis nisi, eu
        laoreet massa turpis in tortor.
      </Paragraph>
      <Subheading>Our Values</Subheading>
      <List>
        <ListItem>Integrity</ListItem>
        <ListItem>Collaboration</ListItem>
        <ListItem>Excellence</ListItem>
        <ListItem>Innovation</ListItem>
      </List>
      <Subheading>Our Team</Subheading>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        ullamcorper mauris eu elit bibendum, nec vestibulum mi iaculis. Mauris
        euismod, velit vitae aliquam bibendum, mauris nulla venenatis nisi, eu
        laoreet massa turpis in tortor.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        ullamcorper mauris eu elit bibendum, nec vestibulum mi iaculis. Mauris
        euismod, velit vitae aliquam bibendum, mauris nulla venenatis nisi, eu
        laoreet massa turpis in tortor.
      </Paragraph>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  );
};

export default AboutUs;