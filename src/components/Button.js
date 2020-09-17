import styled,{css}  from 'styled-components'

const Button = styled.a`
background:aqua;
border-radius: 5px;
border: 2px solid palevioletred;
color: black;
margin: 0 1em;

padding: 0.25em 1em;
&:hover{
    cursor:pointer
}
${props => props.close && css`
    background: palevioletred;
    color: white;
    margin-left:0;
    margin-top:1rem;
  `}

`
export default Button