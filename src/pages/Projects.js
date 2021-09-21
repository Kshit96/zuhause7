import React from 'react';
import { Row, Col } from 'antd';
import BG from '../images/CategoriesBG.png';
import styled from 'styled-components';
import { CenteredCol } from './LandingPage'
import { StyledDivider } from './About';
import ProjectItem from './ProjectItem';
import Slider from "react-slick";

export const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        arrows: true,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: true,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        dots: true,
      }
    }
  ]
};

export const StyledSlider = styled(Slider)`
width: 100%;
height: 100%;
display: flex;
align-items: flex-end;

.slick-slide{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%
}

.slick-next{

    @media only screen and (min-width: 992px) {
        right: 2rem;
        text-shadow: 0 0 5px black;
    color: black;
    z-index: 5;
      }
    
    @media only screen and (min-width: 1200px) {
        right: 2rem;
        text-shadow: 0 0 5px black;
    color: black;
    z-index: 5;
      }
      
      @media only screen and (min-width: 1600px) {
        right: 2rem;
        text-shadow: 0 0 5px black;
    color: black;
    z-index: 5;
      }
}

.slick-prev{


    @media only screen and (min-width: 992px) {
        left: 1rem;
        color: black;
    text-shadow: 0 0 5px black;
    z-index: 5;
      }
    
    @media only screen and (min-width: 1200px) {
        left: 1rem;
        color: black;
    text-shadow: 0 0 5px black;
    z-index: 5;
      }
      
      @media only screen and (min-width: 1600px) {
        left: 2rem;
        color: black;
    text-shadow: 0 0 5px black;
    z-index: 5;
      }
}

.slick-track{

    display: flex;
    align-items: center;
    @media only screen and (max-width: 600px) {
        height: 100%;
        margin-top: 11rem;
      }
      
      @media only screen and (min-width: 600px) {
        height: 100%;
        margin-top: 11rem;
      }

      @media only screen and (min-width: 768px) {
        height: 100%;
        margin-top: 11rem;
      }

    @media only screen and (min-width: 992px) {
        height: 100%;
        margin-top: 3rem;
      }
    
    @media only screen and (min-width: 1200px) {
        height: 100%;
        margin-top: 3rem;
      }
      
      @media only screen and (min-width: 1600px) {
        margin-top: 3rem;
        height: 100%
      }
}

.slick-list{

    overflow-x: clip;
    overflow-y: visible;

    @media only screen and (max-width: 600px) {
        height: 90%!important;
      }
      
      @media only screen and (min-width: 600px) {
        height: 90%!important;
      }

      @media only screen and (min-width: 768px) {
        height: 90%!important;
      }
      
    @media only screen and (min-width: 992px) {
        height: 90%!important;
      }
    
    @media only screen and (min-width: 1200px) {
        height: 90%!important;
      }
      
      @media only screen and (min-width: 1600px) {
        height: 90%!important;
      }
}

`

const StyledRowWithBG = styled(Row)`
background-image: url(${BG});
background-size: cover;
width: 100%;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 0px;
background-position: center;

@media only screen and (max-width: 600px) {
    height: 768px;
    width: 100%;
  }
  @media only screen and (min-width: 600px) {
    height: 768px;
    width: 100%;
  }

@media only screen and (min-width: 768px) {
    height: 768px;
    width: 100%;
  }

@media only screen and (min-width: 992px) {
    height: 768px;
    width: 100%;
  }

@media only screen and (min-width: 1200px) {
  height: 768px;
  width: 100%;
}

@media only screen and (min-width: 1600px) {
  height: 1080px;
  width: 100%;
}

`

const ProjectItemCol = styled(Col)`
display: flex;
justify-content: center;
align-items: center;
align-content: center;
overflow-x: clip;
overflow-y: visible;
white-space: no-wrap;


@media only screen and (max-width: 600px) {
    margin-top: -10rem; 
    height: 90%;
  }
  @media only screen and (min-width: 600px) {
    margin-top: -10rem; 
    height: 90%;
  }
@media only screen and (min-width: 768px) {
    margin-top: -10rem; 
    height: 90%;
  }
@media only screen and (min-width: 992px) {
    margin-top: -10rem; 
    height: 90%;
   }
@media only screen and (min-width: 1200px) {
    margin-top: 5rem; 
    height: 90%;
   }
   @media only screen and (min-width: 1600px) {
    margin-top: -10rem; 
    height: 90%;
   }

`

const HeadingCenteredCol = styled(CenteredCol)`
flex-direction: column;
overflow-y: visible;

@media only screen and (max-width: 600px) {
    height: 10%;
  }
  @media only screen and (min-width: 600px) {
    height: 10%;
  }

@media only screen and (min-width: 768px) {
    height: 10%;
  }

@media only screen and (min-width: 992px) {
    height: 10%;
   }

@media only screen and (min-width: 1200px) {
    height: 10%;
   }
   
   @media only screen and (min-width: 1600px) {
    height: 10%;
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
        <StyledDivider>P &nbsp;&nbsp;R&nbsp;&nbsp; O&nbsp;&nbsp; J&nbsp;&nbsp; E&nbsp;&nbsp; C&nbsp;&nbsp; T&nbsp;&nbsp; S</StyledDivider>
      </HeadingCenteredCol>
      <ProjectItemCol span={20}>
        <StyledSlider {...settings}>
          {ProjectData.map((data) => { return <ProjectItem data={data} /> })}
        </StyledSlider>
      </ProjectItemCol>
    </StyledRowWithBG>
  );
}

export default Projects;