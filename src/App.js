import styled from 'styled-components';
import { Row, Col, Button } from 'antd';
import './App.css';
import LandingPage from './pages/LandingPage';
import { ReactComponent as ContactUs } from './icons/ContactUs.svg';

const StyledButton = styled(Button)`
position: fixed;
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
`

const StyledRow = styled(Row)`
margin-top: 0.4rem;
`

const App = () => {
  return (
    <>
      <StyledButton><StyledRow><Col><ContactUs /></Col></StyledRow></StyledButton>
      <LandingPage />
      <LandingPage />
    </>
  );
}

export default App;
