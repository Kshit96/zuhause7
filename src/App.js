import styled, { keyframes } from 'styled-components';
import { Row, Col, Button } from 'antd';
import './App.css';
import LandingPage from './pages/LandingPage';
import { ReactComponent as ContactUs } from './icons/ContactUs.svg';

const BorderColors = keyframes`
  0% {
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
  }
  33% {
    border-top-color: transparent;
    border-right-color: #A99060;
    border-bottom-color: transparent;
    border-left-color: transparent;

  }
  66% {
    border-top-color: #A99060;
    border-right-color: #A99060;
    border-bottom-color: #A99060;
    border-left-color: transparent;
  }
  100% {
    border-top-color: #A99060;
    border-right-color: #A99060;
    border-bottom-color: #A99060;
    border-left-color: #A99060;
  }
`

const StyledButton = styled(Button)`
overflow: hidden;
position: fixed;
transition: width 0.5s, box-shadow 0.5s, border-color 1s;
bottom: 50%;
right: 0px;
width: 38px;
height: 42px;
border-radius: 3px 0px 0px 3px;
color: #FCFEFB;
border-color: #FCFEFB;
display: flex;
align-items: center;
padding: 0;
justify-content: center;
z-index: 2;
box-shadow: inset 0 0 0 0.1px #A99060;
&:hover{
  // animation: ${BorderColors};
  // animation-duration: 0.5s;
  // animation-fill-mode: forwards;
  box-shadow: inset 400px 0 0 0.1px #A99060;
  width: 150px;
  transition: width 0.5s, box-shadow 1s, border-color 0.5s ;
  transform-origin: right;
  border-color: #A99060;
  cursor: pointer;
}

svg {
  margin-left:1rem;
  margin-right: 0;
  transition: margin-right 0.5s;
}

p{
margin-top: 1.75rem;
margin-left: -9.375rem;
transition: margin-left 0.5s, margin-right 0.5s;
font-size: 1.625rem;
color: #FCFEFB;
align-self: center;
margin-right: 0rem;
}

&:hover p{
  margin-left: 0;
  transition: margin-left 0.5s, margin-right 0.5s;
  color: #FCFEFB;
}

&:hover svg{
  margin-left:1rem;
  margin-right: -2rem;
  transition: margin-right 0.5s;
}


`

const StyledRow = styled(Row)`
margin-top: 0.4rem;
display: flex;
justify-content: center;
align-items: center;
`

// const StyledP = styled.p`
// margin-left: -9.375rem;
// font-size: 1.625rem;
// `

const App = () => {
  return (
    <>
      <StyledButton>
        <p>Contact Us</p>
        <ContactUs />
      </StyledButton>
      <LandingPage />
      <LandingPage />
    </>
  );
}

export default App;
