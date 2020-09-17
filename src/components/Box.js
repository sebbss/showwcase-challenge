import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-image: linear-gradient(to right, #faf9f9, #f4f2f2);
  padding: 1rem 0;
  border-radius: 4px;
  width: 95%;
  margin: 2rem auto;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
`;
const Heading = styled.h3`
  text-transform: uppercase;
  text-align: left;
  color: black;
  margin-left: 2rem;
  font-weight: 200;
`;
const Date = styled.p`
  font-weight: 200;
  margin-right: 2rem;
  color: grey;
  text-align: left;
  margin-left: 2rem;
`;
const Description = styled.p`
  width: 70%;
  text-align: justify;
  background-color: fff;
  color: black;
  font-weight: 200;
  font-size: 14px;
  margin-left: 3rem;
`;

function Box(props) {
  return (
    <Container>
      <Heading>
        Graduate {props.field} @ {props.school}
      </Heading>
      <Date>
        {props.startDate} -- {props.endDate}
      </Date>
      <Description>{props.description}</Description>
    </Container>
  );
}

export default Box;
