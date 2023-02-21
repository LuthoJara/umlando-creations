import styled from "styled-components"
const Container = styled.div`
    height: 36px;
    background-color: teal;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
`

const Announcements = () => {
  return (
    <Container>Valentines day special! Get 100% off on shipping during 14-28 February</Container>
  )
}

export default Announcements