import BG from './images/LandingPageBG.png';
import './App.css';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import { ReactComponent as Logo } from './images/ZuHause_Logo_Complete_Light.svg';

const StyledRow = styled(Row)`
display: flex;
height: 100vh;
width: 100vw;
background-image: url(${BG});
background-size: cover;
`;

const CenteredRow = styled(Row)`
align-items: center;
justify-content: center;
`

const App = () => {
  return (
    <StyledRow>
      <Col>
        <CenteredRow>
          <Col span={12} offset={6}>
            <Logo />
          </Col>
        </CenteredRow>
      </Col>
    </StyledRow>
  );
}

export default App;
