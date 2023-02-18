import { Facebook, Instagram, Pinterest, Twitter } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
    flex: 1;    
`
const Left = styled.div`
    flex: 1;   
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Centre = styled.div`
    flex: 1;    
`
const Right = styled.div`
    flex: 1;    
`
const Logo = styled.h1`

`
const Description = styled.p`

`
const SocialContainer = styled.div`

`
const SocialIcons = styled.div`

`
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>ALQO.</Logo>
            <Description>The best place to get all your labels. </Description>
            <SocialContainer>
             <SocialIcons>
                <Facebook/>
             </SocialIcons>
             <SocialIcons>
                <Instagram/>
             </SocialIcons>
             <SocialIcons>
                <Twitter/>
             </SocialIcons>
             <SocialIcons>
                <Pinterest/>
             </SocialIcons>
            </SocialContainer>
        </Left>
        <Centre></Centre>
        <Right></Right>
    </Container>
  )
}

export default Footer