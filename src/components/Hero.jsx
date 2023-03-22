import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
padding: 0px 20px;
`
const Container = styled.div`
height: 100vh;
scroll-snap-align: center;
width: 1400px;
display: flex;
justify-content: space-between;
`
const Left = styled.div`
flex:2; 
display: flex;
flex-direction: column;
justify-content: center;
gap: 10px;
`
const Title = styled.h1`
font-size: 80px;
font-family: sans-serif;
font-weight: bolder;`

const WhatWeDo = styled.div`
font-family: sans-serif;
display: flex;
align-items: center;
gap: 10px;`

const Line = styled.img`
height: 5px;`

const Subtitle = styled.h2`
font-family: sans-serif;
font-size: 40px;
color: hotpink;`

const Desc = styled.p`
font-family: sans-serif;
font-size: 20px;
font-weight: bold;`

const Button = styled.button`
font-family: sans-serif;
font-weight: bolder;
background-color: hotpink;
color: black;
width: max-content;
border: none;
border-radius: 50px;
padding: 10px 20px;`

const Right = styled.div`
flex:3;
display: flex;
justify-content: center;
align-items: center;
position: relative;
`

const Img = styled.img`
width: 1000px;
object-fit: contain;
position: absolute;
top: 10;
right: 0;
bottom: 0;
left: 0;
margin: auto;
animation: animate 2s infinite ease alternate;
@keyframes animate {
    to{
        transform: translateY(20px);
    }
}
`

const Hero = () => {
    return (
        <Section>
            <Navbar />
            <Container>
                <Left>
                    <Title>Think. Make. Solve.</Title>
                    <WhatWeDo>
                        <Line src="./img/line.png"/>
                        <Subtitle>What We Do</Subtitle>
                    </WhatWeDo>
                    <Desc>We enjoy creating delightful, human-centered digital experiences.</Desc>
                    <Button>Learn More</Button>
                </Left>
                <Right>
                    {/* 3D Model */}
                    <Img src="./img/astro-1.png"/>
                </Right>
            </Container>
        </Section>
    )
}

export default Hero