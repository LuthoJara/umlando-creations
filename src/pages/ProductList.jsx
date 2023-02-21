import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcements from "../components/Announcements"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

const Container = styled.div`
    
`
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`
const Option = styled.option`
    
`
const ProductList = () => {
  return (
    <Container>
     <Announcements/>
     <Navbar/>
     <Title>Ribbons</Title>
     <FilterContainer>
        <Filter>
         <FilterText>Filter Products:</FilterText>
          <Select>
           <Option disabled selected>Colour:</Option>
           <Option>Silver</Option>
           <Option>Gold</Option>
           <Option>Red</Option>
           <Option>Blue</Option>
          </Select>
          <Select>
           <Option disabled selected>Quantity:</Option>
           <Option>5</Option>
           <Option>10</Option>
           <Option>25</Option>
           <Option>50</Option>
          </Select>
        </Filter>
        <Filter>
         <FilterText>Sort Products:</FilterText>
         <Select>
         <Option disabled selected>Newest</Option>
         <Option>Price (asc)</Option>
         <Option>Price (desc)</Option>
         </Select>
        </Filter>
     </FilterContainer>
     <Products/>
     <Newsletter/>
     <Footer/>
    </Container>
  )
}

export default ProductList