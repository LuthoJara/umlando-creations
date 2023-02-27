import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';

const Container = styled.div`
  background-color: #d6c9c9;
`
const Wrapper = styled.div`
  background-color: #fff;
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
      <Heading><hr/>About Us<hr/></Heading>
      <Subheading>Our Mission</Subheading>
      <Paragraph>
      UMlando Creations is a company founded by a single woman who wanted to escape the mundanity of the nine-to-five workday and provide value to the world through labels. She recognized the importance of security and ownership, and how labels played an integral role in that. UMlando Creations seeks to empower individuals by helping them label and organize their belongings. With UMlando Creations, individuals can rest easy knowing that their possessions are secure and accounted for. But the company's mission doesn't stop there. The founder of UMlando Creations has always been passionate about women's empowerment, and she wanted to incorporate that into the company's mission as well.
      Growing up, the founder of UMlando Creations, like many other young girls, was taught that success meant following a certain path. However, as she entered adulthood, she realized that this path wasn't for her. She had a burning desire to create something meaningful and provide value to others. That's when she discovered her love for labels. She realized that labels were more than just a way to organize things; they were a symbol of ownership and security. They gave people a sense of control over their belongings, and that was something she wanted to share with the world.
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
      UMlando Creations was founded with the mission of providing individuals with the gift of security and ownership. The company seeks to empower individuals by helping them label and organize their belongings. With UMlando Creations, individuals can rest easy knowing that their possessions are secure and accounted for. The company's products are designed to be both functional and aesthetically pleasing, making them a must-have for anyone looking to organize their life.

UMlando Creations is committed to supporting women's empowerment, and this is reflected in the company's team. UMlando Creations has a team of seven women working for the company, all of whom share the founder's passion for labels and women's empowerment. The company seeks to create a work environment that empowers women and allows them to grow both personally and professionally. UMlando Creations is committed to supporting its employees and providing them with opportunities to advance their careers. By doing so, the company hopes to inspire other women to pursue their passions and achieve their goals.
      </Paragraph>
      <Subheading>Our Purpose</Subheading>
      <Paragraph>
      As UMlando Creations continues to grow, the company remains committed to its mission of providing individuals with the gift of security and ownership. The company is constantly expanding its product line to meet the evolving needs of its customers. UMlando Creations is also seeking to become the penultimate label provider in South Africa, and the company is well on its way to achieving that goal. With its passionate team of women and its commitment to empowering individuals, UMlando Creations is poised to become a leader in the label industry.
      In conclusion, UMlando Creations is a company founded by a single woman with a passion for labels and women's empowerment. The company seeks to provide individuals with the gift of security and ownership, and its products are designed to be both functional and aesthetically pleasing. UMlando Creations has a team of seven women working for the company, all of whom share the founder's passion for labels and women's empowerment. The company is committed to supporting women's empowerment and providing its employees with opportunities to advance their careers. As UMlando Creations continues to grow, the company remains committed to its mission of providing individuals with the gift of security and ownership, and it is well on its way to becoming the penultimate label provider in South Africa.
      </Paragraph>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  );
};

export default AboutUs;