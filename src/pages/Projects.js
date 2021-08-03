import React from 'react';
import { Row, Col, Image } from 'antd';
import BG from '../images/ProjectsBG.png';
import { StyledRow } from './LandingPage';
import styled from 'styled-components';
import { FullWidthRow } from './Categories';
import { CenteredCol } from './LandingPage'
import { AboutCol, StyledDivider } from './About';
import ProjectItem from './ProjectItem';


const StyledRowWithBG = styled(StyledRow)`
background-image: url(${BG});
background-size: cover;
`

const ProjectItemCol = styled(Col)`
display: flex;
justify-content: center;
align-items: center;
overflow-y: scroll;
`

const ProjectData = [
    {}
]



const Projects = () => {
    return(
        <StyledRowWithBG>
            <FullWidthRow>
                <CenteredCol style={{ flexDirection: 'column' }} span={24}>
                    <StyledDivider>Projects</StyledDivider>
                    <Col style={{ marginTop: '7.1rem'}} span={14}>
                        <ProjectItem />
                    </Col>
                </CenteredCol>
            </FullWidthRow>
        </StyledRowWithBG>
    );
}

export default Projects;