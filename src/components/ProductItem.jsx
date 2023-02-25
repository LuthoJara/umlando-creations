// import styled from "styled-components"

// const Container = styled.div`
//   flex: 1;
//   margin: 3px;
//   height: 70vh;
//   width: 200px;
//   position: relative;
// `
// const Image = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `
// const Info = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   top: 0;
//   left: 0;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `
// const Title = styled.h1`
//   color: whitesmoke;
//   margin-bottom: 20px;
// `
// const Button = styled.button`
//     border: none;
//     padding: 10px;
//     background-color: white;
//     color: black;
//     cursor: pointer;
//     font-weight: 600;
// `


import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material"
import styled from "styled-components"

const Info = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`
const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f7f7f7;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
`
const Image = styled.img`
    height: 75%;
    z-index: 2;
`
const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;

    &:hover{
        background-color: #fbebeb;
        transform: scale(1.1);   
    }
`








const ProductItem = ({item}) => {
  return (
    <Container>
      <Circle/>
      <Image src={item.img}/>
      {/* <Info>
        <Title>{item.title}</Title>
        <Button>Buy Now</Button>
      </Info> */}
      <Info>
        <Icon>
          <ShoppingCartOutlined/>
        </Icon>
        <Icon>
          <SearchOutlined/>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined/>
        </Icon>
      </Info>
    </Container>
  )
}

export default ProductItem