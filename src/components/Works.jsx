import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
height: 100vh;

scroll-snap-align: center; 
${'' /* scroll-snap-align -> focuses each element inside the parent element as alignment assigned. */}
`

const Works = () => {
    return (
        <Section>Works</Section>
    )
}

export default Works