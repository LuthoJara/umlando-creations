import { ArrowUpwardOutlined } from "@mui/icons-material";
import { useState, useEffect } from "react";
import styled from 'styled-components'

const Container = styled.div` 
  top: 0;
  left: 0;
  position: relative;
`
const Wrapper = styled.div`

`
const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  font-size: 16px;
  background-color: #0eb974;
  color: #000000;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 5px;
  opacity: ${(props) => (props.visible ? "1" : "0")};
  transition: opacity 0.5s ease-in-out;
  z-index: 1000;

  &:hover {
    background-color: #000000;
    color: #0eb974;
  }
`;

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    if (currentPosition > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  
  const handleBackToTopClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <Wrapper>
      <Button visible={visible} onClick={handleBackToTopClick}>
        <ArrowUpwardOutlined/>
       </Button>
      </Wrapper>
    </Container>
  )
}

export default BackToTop