import { useState } from "react";
import styled from "styled-components";
import { Drawer, IconButton } from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const Container = styled.div`

`
const Wrapper = styled.div`

`

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <Container>
        <Wrapper>
            <Drawer open={true} onClose= {() => setOpen(false)} >        </Drawer>
            <IconButton>
                <MenuRoundedIcon/>
            </IconButton>
        </Wrapper>
    </Container>
  )
}

export default HamburgerMenu