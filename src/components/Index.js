import React, { useState } from "react";
import styled from "styled-components";
import Button from './Button'

const Welcome = styled.div`
display:flex;
flex-direction: column;`

function Index() {
  const [name, setName] = useState("");
  return (
    <div className="container">
      <Welcome>
        <p>Hi there, welcome to your education showcase</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            sessionStorage.setItem("user", name);
          }}
        >
          <label className="school-label">Type your name and click enter</label>
          <br />
          
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <Button>Enter</Button>
        </form>
      </Welcome>
    </div>
  );
}

export default Index;
