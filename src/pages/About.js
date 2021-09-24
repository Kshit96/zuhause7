import React from 'react';
import { Row, Image, Divider } from 'antd';
import BG from '../images/AboutBG.png';
import { StyledRow } from './CommonStyledComponents';
import styled from 'styled-components';
import Profile from '../images/ZahraChadha1.png';
import { FullWidthRow } from './Categories';
import { CenteredCol } from './LandingPage'


const StyledRowWithBG = styled(Row)`
background-image: url(${BG});
background-size: cover;
width: 100%;
overflow: hidden;
background-position: center;

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

const HeadingCenteredCol = styled(CenteredCol)`
flex-direction: column;

@media only screen and (max-width: 600px) {
    height: 45%;
  }
  
  @media only screen and (min-width: 600px) {
    height: 45%;
  }

@media only screen and (min-width: 768px) {
    height: 45%;
  }

@media only screen and (min-width: 992px) {
    height: 45%;
   }

@media only screen and (min-width: 1200px) {
   height: 45%;
  }
  
  @media only screen and (min-width: 1600px) {
    height: 45%;
  }
`

const TextCenteredCol = styled(CenteredCol)`

@media only screen and (max-width: 600px) {
    height: 55%;
  }
  
  @media only screen and (min-width: 600px) {
    height: 55%;
  }

@media only screen and (min-width: 768px) {
    height: 55%;
  }

@media only screen and (min-width: 992px) {
    height: 55%;
   }

@media only screen and (min-width: 1200px) {
    height: 55%;
  }
  
  @media only screen and (min-width: 1600px) {
    height: 55%;
  }
`

export const AboutCol = styled(CenteredCol)`
text-align: center;
color: #0f121a;
display: inline;
overflow: hidden;

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
color: white;
font-family: AvenirNextBold;
width: fit-content;
margin: 0!important;
display: inline;
`

const StyledImage = styled(Image)`

border-radius: 50%;

object-fit: cover;
object-position: center right;

@media only screen and (max-width: 600px) {
    width: 200px;
    height: 200px;
    margin-top: 48%;
  }
  @media only screen and (min-width: 600px) {
    width: 200px;
    height: 200px;
    margin-top: 48%;
  }

@media only screen and (min-width: 768px) {
    width: 250px;
    height: 250px;
    margin-top: 17%;
  }

@media only screen and (min-width: 992px) {
    width: 250px;
    height: 250px;
    margin-top: 17%;
  }
  
  @media only screen and (min-width: 1200px) {
    width: 250px;
    height: 250px;
    margin-top: 17%;
  }
  
  @media only screen and (min-width: 1600px) {
    width: 350px;
    height: 350px;
    margin-top: 18%;
  }

`
export const StyledDivider = styled(Divider)`
color: #0f121a!Important;
font-family: AvenirNextBold;

max-width: 60%!Important;
min-width: 60%!Important;
&::before{
    border-top-color: #0f121a!Important;
    top: 0!important;
}

&::after{
    border-top-color: #0f121a!Important;
    top: 0!important;
}

@media only screen and (max-width: 600px) {
    font-size: 1.5rem!important;
    max-width: 80%!Important;
    min-width: 80%!Important;
  }
  @media only screen and (min-width: 600px) {
    font-size: 1.5rem!important;
    max-width: 80%!Important;
    min-width: 80%!Important;
  }

@media only screen and (min-width: 768px) {
    font-size: 1.5rem!important;
    max-width: 80%!Important;
    min-width: 80%!Important;
  }

@media only screen and (min-width: 992px) {
    font-size: 2rem!important;
  }
  
  @media only screen and (min-width: 1200px) {
    font-size: 2rem!important;
  }
  
  @media only screen and (min-width: 1600px) {
    font-size: 2rem!important;
  }

`

const About = () => {
    return (
        <StyledRowWithBG>
            <HeadingCenteredCol span={24}>
                <StyledImage preview={false} src={Profile} />
                <StyledDivider>About Zahra Chadha</StyledDivider>
            </HeadingCenteredCol>
            <TextCenteredCol span={24}>
                <AboutCol 
                    xs={{ span: 20 }}
                    sm={{ span: 20 }}
                    md={{ span: 18 }}
                    lg={{ span: 18 }}
                    xl={{ span: 18 }}
                    xxl={{ span: 18 }}
                >
                    <br />
                    <p>Having done her diploma in interior designing, Zahra Chadha was sure she would be catering to product specialisation, sales and enhancing interior spaces. In 2000, when wooden floorings entered the Indian market, she worked with architects and designers alike for residential, corporate and commercial projects.
                        <br /><br />
                        In 2011, the field of lighting design, supply and installation became part of her portfolio. Corporate houses in Mumbai, Pune, Hyderabad, Bangalore along-with high end residential projects were a challenge to take on for designing and execution in lighting. This afforded her the privilege of being part of named architectural firms in Mumbai that added to her knowledge and expertise of spaces and client requirements.
                        <br /><br />
                        The curiosity for learning took has taken her to many exhibitions making furniture and artefacts another area of interest.
                        <br /><br />
                        <i style={{ fontWeight: '600' }}>“The culmination of any project is when the clients finally see the end result of the journey where you handhold them, help select a good product, procure it, and handle the logistics. It is a very emotional experience, and it is all handled by Zuhause7.”</i>
                        <BoldP><i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Zahra Chadha</i></BoldP>
                        <br />
                    </p>
                </AboutCol>
            </TextCenteredCol>
        </StyledRowWithBG>
    );
}

export default About;