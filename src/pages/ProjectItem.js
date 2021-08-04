import React from 'react';
import { Row } from 'antd';
import styled from 'styled-components';
import BG from '../images/ProjectItem.jpg';
import { CenteredCol } from './LandingPage';

const BorderedCenteredCol = styled(CenteredCol)`
`

const StyledDiv = styled.div`
background-image: url(${BG});
background-size: cover;
width: 200px;
height: 200px;
border-radius: 50%;
display: flex;
overflow: hidden;
justify-content: center;
align-items: center;
`

const ProjectDiv = styled.div`
position: relative;
text-align: center;
font-family: AvenirNextRegular;
font-weight: 600;
font-size: 20px;
z-index: 1;
margin-bottom: 3rem;
margin-top: -1rem;
transition: margin-top 0.25s, margin-bottom 0.25s;
overflow: hidden;
height: 40px;
display: flex;
flex-direction: column;
`

const FooterSpan = styled.span`
margin-top: 1.5rem;
text-align: center;
font-family: AvenirNextBold;
transition: margin-top 0.5s;
`
const ContainerDiv = styled.div`
margin-top: 10rem;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

&:hover .footer-span{
    margin-top: 0.5rem;
    transition: margin-top 0.25s;
}

&:hover .project-div{
    margin-top: -5rem;
    margin-bottom: 7rem;
    transition: margin-bottom 0.25s, margin-top 0.25s;
}

.year-col{
    border: 0px solid #0F121A;
    width: 200px;
    height: 200px;
    transition: height 0.25s, width 0.25s, margin-top 0.25s, border 0.2s, padding 0.25s;
    transform-origin: center;
    border-radius: 50%;
    object-fit: cover;
    object-position: center right;
}

&:hover .year-col{
    transition: height 0.25s, width 0.25s, margin-top 0.25s, border 0.2s, padding 0.25s;
    transform-origin: center;
    width: 350px;
    height: 350px;
    margin-top: -50px;
    border: 1px solid #0F121A;
    padding: 1rem;
}

.year-col::before{
    content: "";
    display: block;
    position: absolute;
    z-index: 1;
    border: 1px solid;
    border-bottom: 1px;
    top: -50px;
    width: 180px;
    height: 1px;
    transition: width 0.52s;
}

&:hover .year-col:before{
    width: 350px;
    transition: width 0.52s;
 }

.year-col::after{
    content: "";
    display: block;
    position: absolute;
    z-index: 1;
    border: 1px solid;
    border-bottom: 1px;
    bottom: -20px;
    width: 280px;
    height: 1px;
    transition: bottom 0.25s;
 }

 &:hover .year-col:after{
    bottom: 63px;
    transition: bottom 0.25s, width 0.52s;
 }

 .year-div{
    transition: height 0.25s, width 0.25s;
    transform-origin: center;    
}

&:hover .year-div{
    transition: height 0.25s, width 0.25s;
    transform-origin: center;
    width: 330px;
    height: 320px;
}

 .year-div:before{
    content: "";
    display: block;
    position: absolute;
    z-index: 1;
    top: -50px;
    left: 50%;
    border: 1px solid;
    border-width: 0 0 0 1px;
    width: 1px;
    height: 50px;
}

.year-div:after{
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    bottom: -20px;
    left: 50%;
    border: 1px solid;
    border-width: 0 0 0 1px;
    width: 1px;
    height: 40px;
    transition: bottom 0.25s;
}

&:hover .year-div:after{
    bottom: 63px;
    width: 350px;
    transition: bottom 0.25s, width 0.25s;
 }

 .year-span{
    box-shadow: 0px 0px 15px #0F121A;
    background: rgba(15, 18, 26, 0.9);
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: AvenirNextUltraLight;
    font-size: 35px;
    font-weight: 50;
    color: white;
    transition: margin-top 0.25s, font-size 0.25s;
}

&:hover .year-span{
    font-size: 28px;
    margin-top: 270px;
    transition: margin-top 0.25s, font-size 0.25s;
}

.project-p{
    margin: 1.5rem 0 0 0;
    transition: margin 0.5s;
    display: inline;
}

&:hover .project-p{
    margin: 8.5rem 0 0 0;
    transition: margin 0.5s;
}

.year-p{
    display: inline;
    margin: 0 0 0 0;
    transition: margin 0.5s;
}

&:hover .year-p{
    margin-top: -10rem;
    transition: margin 0.5s;
}

`

const StyledP = styled.p`
font-family: AvenirNextUltraLight;
font-size: 15px;
display: inline;
`

const ProjectItem = props => {
    return (
        <ContainerDiv className={'container-div'}>
            <ProjectDiv className={'project-div'}>
                <span className={'year-p'}>Projects 2008-2010</span>
                <span className={'project-p'}>Niteen Parulekar Architects <StyledP>Mumbai</StyledP></span>
            </ProjectDiv>
            <Row className={'year-row'}>
                <BorderedCenteredCol className={'year-col'} span={24}>
                    <StyledDiv className={'year-div'}>
                        <span className={'year-span'}>'08-'10</span>
                    </ StyledDiv>
                </BorderedCenteredCol>
            </Row>
            <FooterSpan className={'footer-span'}>Furniture | Lighting | Artefacts</FooterSpan>
        </ContainerDiv>
    );
}

export default ProjectItem;