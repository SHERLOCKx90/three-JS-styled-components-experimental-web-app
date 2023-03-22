import React from 'react'
import styled from 'styled-components'
// here we use Internal CSS styling using styled-components package from NPM

const Section = styled.div`
height: 100vh;

scroll-snap-align: center;
`

const Contact = () => {
    return (
        <Section>Contact</Section>
    )
}

export default Contact