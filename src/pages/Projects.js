import React from 'react';
import { Col } from 'antd';
import BG from '../images/ProjectsBG.png';
import { StyledRow } from './CommonStyledComponents';
import styled from 'styled-components';
import { CenteredCol } from './LandingPage'
import { StyledDivider } from './About';
import ProjectItem from './ProjectItem';


const StyledRowWithBG = styled(StyledRow)`
background-image: url(${BG});
background-size: cover;
width: 100%;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 80px;
`

const ProjectItemCol = styled(Col)`
display: flex;
justify-content: center;
align-items: center;
align-content: center;
overflow-x: auto;
white-space: no-wrap;

@media only screen and (min-width: 992px) {
    height: 89%;
   }

@media only screen and (min-width: 1200px) {
    height: 89%;
    padding-left: 1200px;
    padding-top: 270px;
   }
   
   @media only screen and (min-width: 1600px) {
     height: 89%;
     padding-left: 1000px;
     padding-top: 0;
   }

`

const HeadingCenteredCol = styled(CenteredCol)`
flex-directoin: column;
overflow-y: visible;

@media only screen and (min-width: 992px) {
    height: 21%;
   }

@media only screen and (min-width: 1200px) {
    height: 21%;
   }
   
   @media only screen and (min-width: 1600px) {
     height: 21%;
   }
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
            <HeadingCenteredCol span={24}>
                <StyledDivider>Projects</StyledDivider>
            </HeadingCenteredCol>
            <ProjectItemCol span={20}>
                {ProjectData.map((data) => { return <ProjectItem data={data} /> })}
            </ProjectItemCol>
        </StyledRowWithBG>
    );
}

export default Projects;