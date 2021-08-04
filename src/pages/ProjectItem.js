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
margin-bottom: 3rem;
margin-top: -1rem;
transition: margin-top 0.25s, margin-bottom 0.25s;
overflow: hidden;
display: flex;
flex-direction: column;
`

const FooterSpan = styled.span`
margin-top: 2rem;
text-align: center;
font-family: AvenirNextBold;
transition: margin-top 0.5s;
`

const ContainerDiv = styled.div`
height: 560px;
width: 400px;
margin: 10rem 0rem 0 0rem;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

&:before{
    content: "";
    display: block;
    position: absolute;
    z-index: 0;
    border: 5px solid;
    border-bottom: 1px;
    width: 400px;
    height: 1px;
    bottom: 215px;
}

// &:before{
//     display: block;
//     position: relative;
//     content: '';
//     width: 20px;
//     height: 20px;
//     background-color: #A99060;
//     border-radius: 50%;
//     top: 500px;
//     z-index: -1;
//     left: 290px;
//     transition: left 0.5s;
// }

// &:hover:before{
//     left: 270px;
//     transition: left 0.5s;
// }

// &:after{
//     display: block;
//     position: relative;
//     z-index: -1;
//     content: '';
//     width: 20px;
//     height: 20px;
//     background-color: #A99060;
//     border-radius: 50%;
//     left: -10px;
// }

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
    width: 400px;
    margin: ${props=> props.length};
    transition: margin 0.5s;
    display: inline;
}

&:hover .project-p{
    margin: 0 0 0 0;
    transition: margin 0.5s;
}

&:hover .project-p-head{
    margin: -150px 0 150px 0;
    transition: margin 0.5s;
}
`

const StyledP = styled.p`
font-family: AvenirNextUltraLight;
font-size: 15px;
display: inline;
`

const CircleDiv = styled.div`

&:before{
    content: "";
    width: 20px;
    height: 20px;
    background-color: 
}
`

const ProjectItem = props => {

    let calculatedPadding = (5-props.data.projects.length)*30;
    let calculatedHeight = (5-props.data.projects.length)*30;
    let calculatedMargin = (props.data.projects.length)*30-5 + 'px 0px 0px 0px';
    return (
        <ContainerDiv className={'container-div'} length={calculatedMargin}>
            <ProjectDiv className={'project-div'} style={{height: '180px', paddingTop: calculatedPadding+'px'}}>
                <span className={'project-p project-p-head'}>{props.data.projectYear}</span>
                {props.data.projects.map((project)=>{ 
                    return <span className={'project-p'}>{project.name}<StyledP>&nbsp;{project.city}</StyledP></span>
                    })}
            </ProjectDiv>
            <Row className={'year-row'}>
                <BorderedCenteredCol className={'year-col'} span={24}>
                    <StyledDiv className={'year-div'}>
                        <span className={'year-span'}>{props.data.projectYearShort}</span>
                    </StyledDiv>
                </BorderedCenteredCol>
            </Row>
            <FooterSpan className={'footer-span'}>{props.data.type}</FooterSpan>
        </ContainerDiv>
    );
}

export default ProjectItem;