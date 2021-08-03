import React from 'react';
import { Row, Col, Image } from 'antd';
import BG from '../images/ProjectsBG.png';
import { StyledRow } from './LandingPage';
import styled from 'styled-components';
import { FullWidthRow } from './Categories';
import { CenteredCol } from './LandingPage'
import { AboutCol, StyledDivider } from './About';


const StyledRowWithBG = styled(StyledRow)`
background-image: url(${BG});
background-size: cover;
`

const Projects = () => {
    return(
        <StyledRowWithBG>
            <FullWidthRow>
                <CenteredCol style={{ flexDirection: 'column' }} span={24}>
                    <StyledDivider>Projects</StyledDivider>
                    <AboutCol span={14}>
                        This is Projects.
                    </AboutCol>
                </CenteredCol>
            </FullWidthRow>
        </StyledRowWithBG>
    );
}

export default Projects;