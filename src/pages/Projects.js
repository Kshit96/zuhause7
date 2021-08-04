import React from 'react';
import { Col } from 'antd';
import BG from '../images/ProjectsBG.png';
import { StyledRow } from './LandingPage';
import styled from 'styled-components';
import { FullWidthRow } from './Categories';
import { CenteredCol } from './LandingPage'
import { StyledDivider } from './About';
import ProjectItem from './ProjectItem';


const StyledRowWithBG = styled(StyledRow)`
background-image: url(${BG});
background-size: cover;
`

const ProjectItemCol = styled(Col)`
display: flex;
justify-content: center;
align-items: center;
overflow-y: visible;
overflow-x: scroll;
padding-left: 1400px;
padding-right: 100px;
height: 200px;
`

const ProjectData = [
    {
        projectYear: 'Projects 2002-2007',
        projectYearShort: '\'02-\'07',
        projects: [{
            name: 'Zaf Gyms',
            city: 'Mumbai'
        }],
        type: 'Wooden Flooring | Carpets'
    },
    {
        projectYear: 'Projects 2008-2010',
        projectYearShort: '\'08-\'10',
        projects: [{
            name: 'Niteen Parulekar Architects',
            city: 'Mumbai'
        }],
        type: 'Furniture | Lighting | Artefacts'
    },
    {
        projectYear: 'Projects 2011-2012',
        projectYearShort: '\'11-\'12',
        projects: [{
            name: 'Project Head, Hakkasan',
            city: 'Mumbai'
        },
        {
            name: 'JSW Centre',
            city: 'Mumbai'
        },
        {
            name: 'Sahara Pariwar (Offices and Hotel)',
            city: 'Mumbai'
        }
        ],
        type: 'Furniture | Lighting | Artefacts'
    },
    {
        projectYear: 'Projects 2013',
        projectYearShort: '\'13',
        projects: [{
            name: 'Citibank BKC',
            city: 'Mumbai'
        }
        ],
        type: 'Furniture | Lighting | Artefacts'
    },
    {
        projectYear: 'Projects 2014-2019',
        projectYearShort: '\'14-\'19',
        projects: [{
            name: 'Amazon Headquarters',
            city: 'Mumbai | Chennai | Pune'
        },
        {
            name: 'Deloitte',
            city: 'Mumbai | Chennai | Pune'
        },
        {
            name: 'Lupin',
            city: 'Mumbai'
        },
        {
            name: 'Reliance Convention Centre',
            city: 'Mumbai'
        },
        {
            name: 'Fairfield Marriot | Marriot Office',
            city: 'Belgium'
        }
        ],
        type: 'Furniture | Lighting | Artefacts'
    },
    {
        projectYear: 'Projects 2020-2021',
        projectYearShort: '\'20-\'21',
        projects: [{
            name: 'Showflat Pali Hill Navroze',
            city: 'Mumbai'
        },
        {
            name: 'Reviv Clinic',
            city: 'Mumbai'
        }
        ],
        type: 'Furniture | Lighting | Artefacts'
    },
]

const Projects = () => {
    return (
        <StyledRowWithBG>
            <FullWidthRow style={{marginBottom: '80px'}}>
                <CenteredCol style={{ flexDirection: 'column', height: '1200px' }} span={24}>
                <StyledDivider>Projects</StyledDivider>
                    <ProjectItemCol span={14}>
                        {ProjectData.map((data)=>{ return <ProjectItem data={data}/>})}
                    </ProjectItemCol>
                </CenteredCol>
            </FullWidthRow>
        </StyledRowWithBG>
    );
}

export default Projects;