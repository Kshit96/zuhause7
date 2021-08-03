import React from 'react';
import { Row, Col, Image } from 'antd';
import BG from '../images/CategoriesBG.png';
import { StyledRow, CenteredCol, IntroductionCol, BoldP } from './LandingPage';
import styled from 'styled-components';
import Furniture from '../images/Furniture.jpeg';
import Lighting from '../images/Lighting.jpeg';
import Artefacts from '../images/Artefacts.jpeg';

const StyledRowWithBG = styled(StyledRow)`
background-image: url(${BG});
background-size: cover;
`
export const FullWidthRow = styled(Row)`
width: 100%;
overflow: hidden;
`

const HeadingP = styled.p`
font-family: AvenirNextBold;
font-size: 35px;
color: #FCFEFB;
margin: 0;
`

const StyledHR = styled.hr`
width: 20rem;
margin-top: 1rem;
`

const ImageCol = styled.div`
width: 30rem;
height: 25rem;
overflow: hidden;
display: flex;
position: relative;
align-items: center;
justify-content: center;
border-radius: 1rem;
transform-origin: center;
transition: height 0.5s, width 0.5s;
.ant-image{
    position: absolute!important;
}
&:hover{
    transition: height 0.5s, width 0.5s;
    transform-origin: center;
    height: 30rem;
    cursor: pointer;
    width: 35rem!Important;
}

img{
    transform-origin: center;
    width: 32rem;
    align-self: center;
    transition: width 0.5s;
}

span{
    transition: top 0.5s;
    z-index:3;
    position: relative!Important;
    top: 500px;
    width: 100%;
    text-align: center;
}

p{
    margin-left: 0rem;
    transition: margin-left 0.5s;
}

&:hover p{
    transition: margin-left 1s;
    margin-left: -20rem;
}

&:hover span{
    position: relative;
    top: 215px;
    transition: top 0.5s;
}

&:hover img{
    transform-origin: center;
    transition: width 0.5s;
    width: 45rem;
}

`

const StyledSpan = styled.span`
background: rgba(15, 18, 26, 0.9);
`

const Categories = () => {
    return (
        <StyledRowWithBG>
            <FullWidthRow style={{ height: '40%' }}>
                <CenteredCol style={{ flexDirection: 'column' }} span={24}>
                    <HeadingP>Explore Now</HeadingP>
                    <StyledHR />
                    <IntroductionCol style={{ marginTop: '2rem' }}>
                        Residential Projects. Commercial Spaces. Show flats. Clinics.<br />
                        We can retrofit your space no matter what segment it belongs to.<br />
                        Explore through our range of products that we can help you source and make<br />
                        all your interior spaces feel <BoldP>at home.</BoldP>
                    </IntroductionCol>
                </CenteredCol>
            </FullWidthRow>
            <FullWidthRow justify='space-around' style={{ height: '60%' }}>
                <ImageCol span={6}>
                    <Image preview={false} src={Furniture} />
                    <StyledSpan><HeadingP>FURNITURE</HeadingP></StyledSpan>
                </ImageCol>
                <ImageCol span={6}>
                    <Image preview={false} src={Lighting} />
                    <StyledSpan><HeadingP>LIGHTING</HeadingP></StyledSpan>
                </ImageCol>
                <ImageCol span={6}>
                    <Image preview={false} src={Artefacts} />
                    <StyledSpan><HeadingP>ARTEFACTS</HeadingP></StyledSpan>
                </ImageCol>
            </FullWidthRow>
        </StyledRowWithBG>
    );
}

export default Categories;

