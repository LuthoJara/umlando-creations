import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

import { useState } from "react";

import {sliderItems}  from "../data.js";

const Container = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #f2f2f2;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
const Wrapper = styled.div`
    /* height: 100%;
    width: 100%; */
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
    background-image: ${props=> props.backgroundImg};
`
const Slide = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    height: auto;
    width: 100vw ;
    background-color: ${props=> props.bg};

   /* Media query for screens smaller than 768px */
   @media screen and (max-width: 768px) {
   display: flex;
   flex-direction: column;
   /* height: auto; */
  }
`
const ImgContainer = styled.div`
    flex: 1;
    height: 50%;
    padding-bottom: 10px;
    /* margin-left: 20px; */
`
const Image = styled.img`
    height: auto;
    width: 25vw;
`
const InfoContainer = styled.div`
    flex: 1;
    height: 50%;
    /* padding: 50px; */
`
const Title = styled.h1`
    font-size: 60px;
`
// const Description = styled.p`
//     margin: 40px 0px;
//     font-size: 20px;
//     font-weight: 500;
//     letter-spacing: 2px;
// `
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 8);
        } else {
            setSlideIndex(slideIndex < 8 ? slideIndex + 1 : 0);
        }
    };

    return (
    <Container>
        <Arrow direction = "left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlinedIcon/>
        </Arrow>
           {sliderItems.map((item) => ( 
        <Wrapper key ={item.id} slideIndex = {slideIndex} backgroundImg = {item.img}>
            <Slide bg={item.bg} key ={item.id}>
               <Title>{item.title} </Title>
             <ImgContainer>
               <Image src = {item.img} />
             </ImgContainer>
             <InfoContainer>
             </InfoContainer>
               <Button>Shop Now</Button>
            </Slide>
        </Wrapper>
            ))}
        <Arrow direction = "right" onClick={() => handleClick("right")}>
            <ArrowRightOutlinedIcon/> 
        </Arrow>
    </Container>
  )
};

export default Slider;