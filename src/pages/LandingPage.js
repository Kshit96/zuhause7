import { Row, Col } from 'antd';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../images/ZuHause_Logo_Complete_Light.svg';
import BG from '../images/BGLanding.png';
import { FullWidthRow } from './CommonStyledComponents';
import { useEffect } from 'react';

const StyledRowWithBG = styled(Row)`
background-image: url(${BG});
background-size: cover;
background-position: center;
display: flex;
align-content: center;
flex-direction: column;
align-items: center;
justify-content: center;

@media only screen and (max-width: 600px) {
  height: 768px;
  width: 100%;
}

@media only screen and (min-width: 600px) {
  height: 768px;
  width: 100%;
}

@media only screen and (min-width: 768px) {
  height: 768px;
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

@media only screen and (max-width: 600px) {
  font-size: 0.7rem;
}

@media only screen and (min-width: 600px) {
  font-size: 0.7rem;
}

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

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {

        if (entry.isIntersecting && entry.target.className.includes('fade-in-logo')) {
          entry.target.classList.add('fade-in-logo-animate');
          return;
        }

        if (entry.isIntersecting && entry.target.className.includes('fade-in-para1')) {
          entry.target.classList.add('fade-in-para1-animate');
          return;
        }

        entry.target.classList.remove('fade-in-para1-animate');
        entry.target.classList.remove('fade-in-logo-animate');
      });
    }, { rootMargin: "0px 0px -300px 0px" });
    observer.observe(document.querySelector('.fade-in-logo'));
    observer.observe(document.querySelector('.fade-in-para1'));
  }, [])


  return (
    <StyledRowWithBG justify="center" align="middle">
      <FullWidthRow><CenteredCol
        xs={{ span: 8 }}
        sm={{ span: 8 }}
        md={{ span: 6 }}
        lg={{ span: 4 }}
        xl={{ span: 4 }}
        xxl={{ span: 4 }}
        className={'fade-in-logo fade-in-logo-animate'}>
        <StyledLogo style={{ alignSelf: 'flex-end' }} />
      </CenteredCol>
        <FullWidthRow>
        <IntroductionCol
        xs={{ span: 18 }}
        sm={{ span: 18 }}
        md={{ span: 22 }} 
        lg={{ span: 18 }}
        xl={{ span: 18 }}
        xxl={{ span: 18 }}>
          <br />
          <p className={'fade-in-para1 fade-in-para1-animate'}>Zu•hau•se  / [tsuˈhauzə] /, meaning <BoldP>at home</BoldP>, is a dream put to implementation by <BoldP>Zahra Chadha.</BoldP>
            <br /><br />
            Our aim is to ensure you get what you want to make your spaces as <BoldP>functional, comfortable and warm</BoldP> as possible.<br />
            Let your dreams of getting that specific lighting, furniture, signature art piece, flooring or rugs be converted into reality by Zuhause7.<br />
            We get the best, and more importantly what you need, from the Europe and the USA. And if that does not satiate your desire for your dream space,
            we can help you source it locally to your bespoke requirements as well.</p>
          <br /><br /><br /><br /><br />
        </IntroductionCol>
        </FullWidthRow>
      </FullWidthRow>
    </StyledRowWithBG>
  );
}


export default LandingPage;