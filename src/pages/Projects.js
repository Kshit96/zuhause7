import React from 'react';
import { Row, Col, Image } from 'antd';
import BG from '../images/ProjectsBG.png';
import { StyledRow } from './LandingPage';
import styled from 'styled-components';


const StyledRowWithBG = styled(StyledRow)`
background-image: url(${BG});
background-size: cover;
`

const Projects = () => {
    return(
        <StyledRowWithBG>
            This is the Projects Section
        </StyledRowWithBG>
    );
}

export default Projects;