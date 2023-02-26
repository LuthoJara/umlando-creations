import styled from "styled-components"
const Container = styled.div`
  height: auto;
  padding-bottom: 30px;    
  /* max-height: 100px; */
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`

const Announcements = () => {
  return (
    <Container>Valentines day special! Get 50% off on shipping during 14-28 February</Container>
  )
}

export default Announcements