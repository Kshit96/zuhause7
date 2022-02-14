import React, {useEffect, useState, useCallback} from 'react';
import { Row, Col } from 'antd';
import BG from '../images/ProjectsBG.png';
import styled from 'styled-components';
import { CenteredCol } from './LandingPage'
import { StyledDivider } from './About';
import Img1 from '../images/categories/Projects/a.png';
import Img2 from '../images/categories/Projects/b.jpeg';
import Img3 from '../images/categories/Projects/c.jpeg';
import Img4 from '../images/categories/Projects/d.jpeg';
import Img5 from '../images/categories/Projects/e.png';
import Img6 from '../images/categories/Projects/f.jpeg';
import Img7 from '../images/categories/Projects/g.jpeg';
import Img8 from '../images/categories/Projects/h.jpeg';
import Img9 from '../images/categories/Projects/i.jpeg';
import Img10 from '../images/categories/Projects/j.jpeg';
import Img11 from '../images/categories/Projects/k.jpeg';
import Img12 from '../images/categories/Projects/l.jpeg';
import Img13 from '../images/categories/Projects/m.jpeg';
import Img14 from '../images/categories/Projects/n.png';
import Img15 from '../images/categories/Projects/o.jpeg';
import Img16 from '../images/categories/Projects/p.jpeg';
import Img17 from '../images/categories/Projects/q.jpeg';
import Img18 from '../images/categories/Projects/r.jpeg';
import Gallery from "react-photo-gallery";


export const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 3000,
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
padding-bottom: 10rem;

@media only screen and (max-width: 600px) {
  height: auto;
  width: 100%;
}

@media only screen and (min-width: 600px) {
  height: auto;
  width: 100%;
}

@media only screen and (min-width: 768px) {
  height: auto;
  width: 100%;
}

@media only screen and (min-width: 992px) {
  height: auto;
  width: 100%;
}

@media only screen and (min-width: 1200px) {
height: auto;
width: 100%;
}

@media only screen and (min-width: 1600px) {
height: auto;
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


export const photos = [
  {
    src: Img1,
    width: 16,
    height: 9
  },
  {
    src: Img2,
    width: 16,
    height: 11
  },
  {
    src: Img3,
    width: 12,
    height: 16
  },
  {
    src: Img4,
    width: 16,
    height: 9
  },
  {
    src: Img5,
    width: 16,
    height: 9
  },
  {
    src: Img6,
    width: 12,
    height: 16
  },
  {
    src: Img7,
    width: 16,
    height: 10
  },
  {
    src: Img8,
    width: 12,
    height: 16
  },
  {
    src: Img9,
    width: 12,
    height: 16
  },
  {
    src: Img10,
    width: 16,
    height: 9
  },
  {
    src: Img11,
    width: 12,
    height: 16
  },
  {
    src: Img12,
    width: 16,
    height: 9
  },
  {
    src: Img13,
    width: 11,
    height: 16
  },
  {
    src: Img14,
    width: 15,
    height: 9
  },
  {
    src: Img15,
    width: 12,
    height: 16
  },
  {
    src: Img16,
    width: 16,
    height: 9
  },
  {
    src: Img17,
    width: 12,
    height: 16
  },
  {
    src: Img18,
    width: 12,
    height: 16
  }
];

const Projects = () => {

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {

        if (entry.isIntersecting && entry.target.className.includes('project-heading')) {
          entry.target.classList.add('project-heading-animate');
          return;
        }

        if (entry.isIntersecting && entry.target.className.includes('projects')) {
          entry.target.classList.add('projects-animate');
          return;
        }

        entry.target.classList.remove('project-heading-animate');
        entry.target.classList.remove('projects-animate');
      });
    }, { rootMargin: "0px 0px -300px 0px" });
    observer.observe(document.querySelector('.project-heading'));
    observer.observe(document.querySelector('.projects'));
  }, [])

  return (
    <StyledRowWithBG>
      <HeadingCenteredCol className={'project-heading project-heading-animate'} xs={{span: 24}} sm={{span: 24}} md={{span: 20}} >
        <StyledDivider>P &nbsp;&nbsp;R&nbsp;&nbsp; O&nbsp;&nbsp; J&nbsp;&nbsp; E&nbsp;&nbsp; C&nbsp;&nbsp; T&nbsp;&nbsp; S</StyledDivider>
      </HeadingCenteredCol>
      <ProjectItemCol className={'projects projects-animate'} span={20}>
      <Gallery photos={photos} />
      </ProjectItemCol>
    </StyledRowWithBG>
  );
}

export default Projects;