import { Row, Col } from 'antd';
import { Button, DatePicker, version } from "antd";
import styled from 'styled-components';
import { ReactComponent as Logo } from '../images/ZuHause_Logo_Complete_Light.svg';
import BG from '../images/LandingPageBG.png';


const StyledRow = styled(Row)`
display: flex;
height: 100vh;
width: 100vw;
background-image: url(${BG});
background-size: cover;
`;

const CenteredCol = styled(Col)`
display: flex;
align-items: center;
justify-content: center;
text-shadow: 0px 0px 15px #0F121A;
`

const BoldP = styled.p`
color: #A99060;
font-family: AvenirNextBold;
width: fit-content;
margin: 0!important;
display: inline;
`


const LandingPage = () => {
    return (
      <StyledRow justify="center" align="middle">
        <Col>
          <Row>
            <CenteredCol span={4} offset={10}>
              <Logo style={{ alignSelf: 'flex-end' }} />
            </CenteredCol>
          </Row>
          <Row>
            <CenteredCol style={{ textAlign: 'center', color: '#FCFEFB', fontSize: '20px', display: 'inline' }} span={18} offset={3}>
              <br />
              Zu•hau•se  / [tsuˈhauzə] /, meaning <BoldP>at home</BoldP>, is a dream put to implementation by <BoldP>Zahra Chadha.</BoldP>
              <br /><br />
              Our aim is to ensure you get what you want to make your spaces as <BoldP>functional, comfortable and warm</BoldP> as possible.<br/>
              Let your dreams of getting that specific lighting, furniture, signature art piece, flooring or rugs be converted into reality by Zuhause7.<br/>
              We get the best, and more importantly what you need, from the Europe and the USA. And if that does not satiate your desire for your dream space,
              we can help you source it locally to your bespoke requirements as well.
              <br /><br /><br /><br /><br />
            </CenteredCol>
          </Row>
        </Col>
      </StyledRow>
    );
  }


  export default LandingPage;