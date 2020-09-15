import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    background: #fff;
    width: 95%;
    margin: auto;

    &h3{
        color:blue;
    }
`

function Box(props) {
    
    return (
        <Container>
            <h3>Graduate Computer Science @ makerere university</h3>
            <p>this is a paragraph</p>
        </Container>
    )
}

export default Box
