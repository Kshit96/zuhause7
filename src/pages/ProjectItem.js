import React from 'react';
import { Row, Image } from 'antd';
import styled from 'styled-components';
import BG from '../images/ProjectItem.jpg';
import { CenteredCol } from './LandingPage';

const BorderedCenteredCol = styled(CenteredCol)`

border: 0px solid #0F121A;
width: 200px;
height: 200px;
transition: height 0.25s, width 0.25s, margin-top 0.25s, border 0.2s, padding 0.25s;
transform-origin: center;
border-radius: 50%;
object-fit: cover;
object-position: center right;
&:hover{
    transition: height 0.25s, width 0.25s, margin-top 0.25s, border 0.2s, padding 0.25s;
    transform-origin: center;
    width: 300px;
    height: 300px;
    margin-top: -40px;
    border: 1px solid #0F121A;
    padding: 1rem;
}

div{
    transition: height 0.25s, width 0.25s;
    transform-origin: center;    
}

&:hover div{
    transition: height 0.25s, width 0.25s;
    transform-origin: center;
    width: 280px;
    height: 270px;
}

`

const StyledDiv = styled.div`
background-image: url(${BG});
background-size: cover;
width: 200px;
height: 200px;
border-radius: 50%;
`

const ProjectItem = props => {
    return (
        <Row>
                <BorderedCenteredCol span={24}>
                    <StyledDiv/>
                </BorderedCenteredCol>
        </Row>
    );
}

export default ProjectItem;