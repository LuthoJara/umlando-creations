
import styled from 'styled-components'

const Container = styled.div`
  top: 0;
  left: 0;
  position: relative;
`
const Wrapper = styled.div`

`
const Button = styled.button`
  position: relative;
`

const BackToTop = () => {
  return (
    <Container>
      <Wrapper> 
       <Button>
        <a href='www.google.com' target={'_blank'}>Back-to-top</a>
       </Button>
      </Wrapper>
    </Container>
  )
}

export default BackToTop