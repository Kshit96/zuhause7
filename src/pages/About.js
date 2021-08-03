import React from 'react';
import { Row, Col, Image, Divider } from 'antd';
import BG from '../images/AboutBG.png';
import { StyledRow } from './LandingPage';
import styled from 'styled-components';
import Profile from '../images/ZahraChadha.jpeg';
import { FullWidthRow } from './Categories';
import { CenteredCol } from './LandingPage'


const StyledRowWithBG = styled(StyledRow)`
background-image: url(${BG});
background-size: cover;
`
export const AboutCol = styled(CenteredCol)`
text-align: center;
color: #0F121A;
font-size: 19px;
display: inline;
`

export const BoldP = styled.p`
color: #0F121A;
font-family: AvenirNextBold;
width: fit-content;
margin: 0!important;
display: inline;
`

const StyledImage = styled(Image)`
width: 300px;
height: 300px;
border-radius: 50%;
margin-top: 7.1rem;
object-fit: cover;
object-position: center right;
`
const StyledDivider = styled(Divider)`
text-shadow: 0px 0px 30px #A99060;
color: #0F121A!Important;
font-family: AvenirNextBold;
font-size: 40px!important;
max-width: 60%!Important;
min-width: 60%!Important;
&::before{
    border-top-color: rgba(15, 18, 26, 1)!Important;
    top: 0!important;
}

&::after{
    border-top-color: rgba(15, 18, 26, 1)!Important;
    top: 0!important;
}

`

const About = () => {
    return (
        <StyledRowWithBG>
            <FullWidthRow>
                <CenteredCol style={{ flexDirection: 'column' }} span={24}>
                    <StyledImage preview={false} src={Profile} />
                    <StyledDivider>About Zahra Chadha</StyledDivider>
                    <AboutCol span={14}>
                        <br />
                        <p>Having done her diploma in interior designing, Zahra Chadha was sure she would be catering to product specialisation, sales and enhancing interior spaces. In 2000, when wooden floorings entered the Indian market, she worked with architects and designers alike for residential, corporate and commercial projects.
                            <br /><br />
                            In 2011, the field of lighting design, supply and installation became part of her portfolio. Corporate houses in Mumbai, Pune, Hyderabad, Bangalore along-with high end residential projects were a challenge to take on for designing and execution in lighting. This afforded her the privilege of being part of named architectural firms in Mumbai that added to her knowledge and expertise of spaces and client requirements.
                            <br /><br />
                            The curiosity for learning took has taken her to many exhibitions making furniture and artefacts another area of interest.
                            <br /><br />
                            <i style={{fontWeight: '600'}}>“The culmination of any project is when the clients finally see the end result of the journey where you handhold them, help select a good product, procure it, and handle the logistics. It is a very emotional experience, and it is all handled by Zuhause7.”</i>
                            <br /><br />
                            <BoldP><i>-Zahra Chadha</i></BoldP>
                            <br />
                        </p>
                    </AboutCol>
                </CenteredCol>
            </FullWidthRow>
        </StyledRowWithBG>
    );
}

export default About;