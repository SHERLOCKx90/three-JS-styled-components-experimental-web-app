import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
display: flex;
justify-content: center;
`
const Container = styled.div`
 width: 1400px;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 20px 0;
`
const Links = styled.div`
 display: flex;
 align-items: center;
 gap: 50px;
`
const Logo = styled.img`
  width: 150px;
`
const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  font-weight: bolder;
  font-family: sans-serif;
`
const ListItem = styled.li`
  
`
const Icon = styled.img`
  cursor: pointer;
  width: 20px;
`
const Icons = styled.div`
 display: flex;
 align-items: center;
 gap: 50px;
`
const Button = styled.button`
  cursor: pointer;
  background-color: hotpink;
  color: black;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  font-weight: bolder;
  font-family: sans-serif;
`

const Navbar = () => {
    return (
        <Section>
            <Container>
                <Links>
                    <Logo src="./img/logo-1.png" />
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Studio</ListItem>
                        <ListItem>Works</ListItem>
                        <ListItem>Contact</ListItem>
                    </List>
                </Links>
                <Icons>
                    <Icon src="./img/search.png" />
                    <Button>Hire Now</Button>
                </Icons>
            </Container>
        </Section>
    )
}

export default Navbar