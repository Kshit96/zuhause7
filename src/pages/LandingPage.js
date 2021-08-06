import { Row, Col } from 'antd';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../images/ZuHause_Logo_Complete_Light.svg';
import BG from '../images/LandingPageBG.png';
import { StyledRow, FullWidthRow } from './CommonStyledComponents';

const StyledRowWithBG = styled(StyledRow)`
background-image: url(${BG});
background-size: cover;
background-position: center;
display: flex;
align-content: center;
flex-direction: column;
align-items: center;
justify-content: center;

@media only screen and (min-width: 768px) {
  height: 768px!important;
  width: 100%;
}

@media only screen and (min-width: 992px) {
  height: 768px;
  width: 100%;
}

@media only screen and (min-width: 1200px) {
height: 768px;
width: 100%;
}

@media only screen and (min-width: 1600px) {
height: 1080px;
width: 100%;
}

`


export const CenteredCol = styled(Col)`
display: flex;
align-items: center;
justify-content: center;
`

export const IntroductionCol = styled(CenteredCol)`
text-shadow: 0px 0px 15px #0F121A;
text-align: center;
color: #FCFEFB;
font-size: 1.188rem;
display: inline;

@media only screen and (min-width: 768px) {
  font-size: 0.8rem;
}

@media only screen and (min-width: 992px) {
  font-size: 0.9rem;
}

@media only screen and (min-width: 1200px) {
  font-size: 0.9rem;
}

@media only screen and (min-width: 1600px) {
  font-size: 1.188rem;
}
`

// Mobile: 360 x 640
// Mobile: 375 x 667
// Mobile: 360 x 720
// iPhone X: 375 x 812
// Pixel 2: 411 x 731
// Tablet: 768 x 1024
// Laptop: 1280 x 720
// Laptop: 1366 x 768
// High-res laptop or desktop: 1920 x 1080

export const BoldP = styled.p`
color: #A99060;
font-family: AvenirNextBold;
width: fit-content;
margin: 0!important;
display: inline;
`

const StyledLogo = styled(Logo)`
width: 100%;
height:100%;
}
`

const LandingPage = () => {
  return (
    <StyledRowWithBG justify="center" align="middle">
      <FullWidthRow><CenteredCol
        md={{ span: 6 }}
        lg={{ span: 4 }}
        xl={{ span: 4 }}
        xxl={{ span: 4 }}>
        <StyledLogo style={{ alignSelf: 'flex-end' }} />
      </CenteredCol>
        <FullWidthRow>
        </FullWidthRow>
        <IntroductionCol
        md={{ span: 22 }} 
        lg={{ span: 18 }}
        xl={{ span: 18 }}
        xxl={{ span: 18 }}>
          <br />
          <p>Zu•hau•se  / [tsuˈhauzə] /, meaning <BoldP>at home</BoldP>, is a dream put to implementation by <BoldP>Zahra Chadha.</BoldP>
            <br /><br />
            Our aim is to ensure you get what you want to make your spaces as <BoldP>functional, comfortable and warm</BoldP> as possible.<br />
            Let your dreams of getting that specific lighting, furniture, signature art piece, flooring or rugs be converted into reality by Zuhause7.<br />
            We get the best, and more importantly what you need, from the Europe and the USA. And if that does not satiate your desire for your dream space,
            we can help you source it locally to your bespoke requirements as well.</p>
          <br /><br /><br /><br /><br />
        </IntroductionCol>
      </FullWidthRow>
    </StyledRowWithBG>
  );
}


export default LandingPage;