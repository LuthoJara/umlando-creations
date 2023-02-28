import styled from "styled-components"
import {mobile} from "../responsive"
const Container = styled.div`
  height: auto;
  padding: 30px;    
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  ${mobile({backgroundColor: "red"})}
`

const Announcements = () => {
  return (
    <Container>Valentines day special! Get 50% off on shipping during 14-28 February</Container>
  )
}

export default Announcements