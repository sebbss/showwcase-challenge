import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from 'react-router-dom';


const Heading = styled.p`
font-size:20px;
font-weight:400px;`


const Wrapper = styled.div`
text-align:left;
display:flex;
flex-direction: column;
margin-bottom:1rem;
justify-content: space-between;`

function Index() {
    let history = useHistory()
  const [name, setName] = useState("");
  return (
    <div className="container">
      <div>
        <Heading>Hi there, welcome to your education showcase</Heading>

        <form
          onSubmit={async(e) => {
            e.preventDefault();
            
            await localStorage.setItem("name", name);

            history.push('/main')
          }}
        >
            <Wrapper>
            <label >Type your name and click enter</label>
            <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            className='school-form'
          />
            
          
            </Wrapper>

          <input type='submit' className="school-form btn-enter" value='Enter'/>
        </form>
      </div>
    </div>
  );
}

export default Index;
