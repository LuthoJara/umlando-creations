import { useState } from "react";
import styled from "styled-components";
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
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
            <Drawer anchor="right" open={open } onClose={() => setOpen(false)} >       
            <List>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemText>Menu:</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
            </List>
            </Drawer>
            <IconButton>
                <MenuRoundedIcon style={{ color: "#fff" }} />
            </IconButton>
        </Wrapper>
    </Container>
  )
}

export default HamburgerMenu