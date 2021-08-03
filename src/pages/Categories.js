import React from 'react';
import { Row, Col, Image } from 'antd';
import BG from '../images/CategoriesBG.png';
import { StyledRow, CenteredCol, IntroductionCol, BoldP } from './LandingPage';
import styled from 'styled-components'
import Furniture from '../images/Furniture.jpeg';
import Lighting from '../images/Lighting.jpeg';
import Artefacts from '../images/Artefacts.jpeg';

const StyledRowWithBG = styled(StyledRow)`
background-image: url(${BG});
background-size: cover;
`
const FullWidthRow = styled(Row)`
width: 100%;
`

const HeadingP = styled.p`
font-family: AvenirNextBold;
font-size: 40px;
color: #FCFEFB;
margin: 0;
`

const StyledHR = styled.hr`
width: 20rem;
margin-top: 1rem;
`

const ImageCol = styled(Col)`
height: 25rem;
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;
border-radius: 1rem;
.ant-image{
    position: absolute!important;
}
`

const StyledImage = styled(Image)`
width: 32rem;
align-self: center;

`

const Categories = () => {
    return (
        <StyledRowWithBG>
            <FullWidthRow>
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
            <FullWidthRow justify='space-around'>
                <ImageCol span={6}>
                    <StyledImage preview={false} src={Furniture} />
                    <p style={{zIndex: 3}}>Furniture</p>
                </ImageCol>
                <ImageCol span={6}>
                <StyledImage preview={false} src={Lighting} />
                    <p style={{zIndex: 3}}>Lighting</p>
                </ImageCol>
                <ImageCol span={6}>
                <StyledImage preview={false} src={Artefacts} />
                    <p style={{zIndex: 3}}>Artefacts</p>
                </ImageCol>
            </FullWidthRow>
        </StyledRowWithBG>
    );
}

export default Categories;

