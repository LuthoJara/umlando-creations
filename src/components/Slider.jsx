import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

// import { useState } from "react";

// trying to make automatic and ridding the loopback: useeffect
import { useState, useEffect } from "react";

import { allProducts }  from "../data.js";

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
    display: flex;
    /* transition: all 1.5s ease; */
    /* transform: translateX(-100%); */
    /* transform: translateX(props => props.className === "left" && "10px"); */
    background-image: ${props=> props.backgroundImg};
`
const Slide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    width: 100vw ;
    background-color: ${props=> props.bg};
    padding-bottom: 20px;
    /* transition: all 1.5s ease; */
    transform: translateX(${props => props.slideIndex * -100}vw);
`
const ImgContainer = styled.div`
    flex: 1;
    height: 50%;
    padding-bottom: 10px; 
`
const Image = styled.img`
    height: auto;
    width: 25vw;
`
const Title = styled.h1`
    font-size: 60px;
    padding: 20px;
    text-decoration: underline;
`

// // trying to make automatic and ridding the loopback: slider component

const Slider = () => {

    const [sliderInfo] = useState(allProducts);
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const lastIndex = sliderInfo.length -1;
        if (slideIndex < 0) {
            setSlideIndex(lastIndex);
        }
        if (slideIndex > lastIndex) {
            setSlideIndex(0);
        }
    }, [slideIndex, sliderInfo])

    useEffect(() => {
        let slider = setInterval(() =>{
            setSlideIndex(slideIndex + 1)
        }, 5000);
        return () => {
            clearInterval(slider)
        }
    }, [slideIndex])
    return(
        <Container>
        <Arrow direction = "left" onClick={() => setSlideIndex(slideIndex - 1)}>
        <ArrowLeftOutlinedIcon/>
        </Arrow>
         <Wrapper>
         {allProducts.map((item, indexPerSlide) => { 
            let position = "nextSlide";
         if (indexPerSlide === slideIndex) {
           position = "activeSlide";
         }
         if (
            indexPerSlide === slideIndex - 1 ||
            (slideIndex === 0 && indexPerSlide === allProducts.length - 1)
          ) {
            position = "lastSlide";
          }
          return(
           <Slide slideIndex = {slideIndex} className={position} bg={item.bg} key ={item.id}>
             <Title>{item.title} </Title>
             <ImgContainer>
             <Image src = {item.img} />
             </ImgContainer>
           </Slide>
        );
    })}
     </Wrapper>
        <Arrow direction = "right" onClick={() => setSlideIndex(slideIndex + 1)}>
        <ArrowRightOutlinedIcon/> 
        </Arrow>
       </Container>  
    )
};


export default Slider;