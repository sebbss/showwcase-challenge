import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    background: #fff;
    padding: 1rem 0;
    width: 95%;
    margin: 2rem auto;

`
const Heading = styled.h3`
text-transform:uppercase;
text-align:left;
color:black;
margin-left:2rem;
font-weight:200;

`
const Date = styled.p`
font-weight:200;
margin-right:2rem;
color:grey;
text-align:left;
margin-left:2rem;
`

function Box(props) {
    
    return (
        <Container>
            <Heading>Graduate {props.field} @ {props.school}</Heading>
            <Date>August - November</Date>

        </Container>
    )
}

export default Box
