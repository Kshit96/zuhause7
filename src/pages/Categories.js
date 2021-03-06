import React, { useEffect, useState } from 'react';
import { Row, Image, Modal } from 'antd';
import BG from '../images/CategoriesBG.png';
import { CenteredCol, IntroductionCol, BoldP } from './LandingPage';
import styled from 'styled-components';
import Furniture from '../images/Furniture.png';
import Lighting from '../images/Lighting.png';
import Artefacts from '../images/Artefacts.jpeg';
import { LIGHTING, FURNITURE, ARTEFACTS } from '../data/CatalogueImages';
import ProductGallery from './ProductGallery';
import { FullWidthRow } from './CommonStyledComponents';
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
        dots: true
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        arrows: true
      }
    }
  ]
};

export const StyledSlider = styled(Slider)`
width: 100%;

.slick-slide{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.slick-next{
    right: 2rem;
    z-index: 5;
}

.slick-prev{
    left: 2rem;
    z-index: 5;
}

.slick-track{
    flex-direction: row;
    display: flex;
    @media only screen and (max-width: 600px) {
        height: 28rem!important;
      }
      
      @media only screen and (min-width: 600px) {
        height: 28rem!important;;
      }

      @media only screen and (min-width: 768px) {
        height: 28rem!important;;
      }

    @media only screen and (min-width: 992px) {
        height: 28rem!important;;
      }
    
    @media only screen and (min-width: 1200px) {
        height: 28rem!important;;
      }
      
      @media only screen and (min-width: 1600px) {
        height: 35rem!important;;
      }
}

.slick-list{
    @media only screen and (max-width: 600px) {
        height: 28rem!important;
      }
      
      @media only screen and (min-width: 600px) {
        height: 28rem!important;;
      }

      @media only screen and (min-width: 768px) {
        height: 28rem!important;;
      }
      
    @media only screen and (min-width: 992px) {
        height: 28rem!important;;
      }
    
    @media only screen and (min-width: 1200px) {
        height: 28rem!important;;
      }
      
      @media only screen and (min-width: 1600px) {
        height: 35rem!important;;
      }
}

`

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const StyledRowWithBG = styled(Row)`
background-image: url(${BG});
background-size: cover;
align-content: center;
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

export const FullWidthRowIntro = styled(FullWidthRow)`
@media only screen and (max-width: 600px) {
    height: 30%;
  }
  
  @media only screen and (min-width: 600px) {
    height: 30%;
  }

@media only screen and (min-width: 768px) {
    height: 30%;
  }

@media only screen and (min-width: 992px) {
    height: 30%;
  }

@media only screen and (min-width: 1200px) {
    height: 30%;
  }
  
  @media only screen and (min-width: 1600px) {
    height: 30%;
  }
`

export const FullWidthRowSpaceAround = styled(FullWidthRow)`
display: flex;
@media only screen and (max-width: 600px) {
    height: 60%;
  }
  
  @media only screen and (min-width: 600px) {
    height: 60%;
  }

@media only screen and (min-width: 768px) {
    height: 60%;
    overflow-x: scroll;
  }

@media only screen and (min-width: 992px) {
    height: 60%;
  }

@media only screen and (min-width: 1200px) {
    height: 60%;
  }
  
  @media only screen and (min-width: 1600px) {
    height: 60%;
  }
`

const HeadingP = styled.p`
font-family: AvenirNextBold;
color: #FCFEFB;
margin: 0;

@media only screen and (max-width: 600px) {
    font-size: 2rem;
  }
  
  @media only screen and (min-width: 600px) {
    font-size: 2rem;
  }
  
  @media only screen and (min-width: 768px) {
    font-size: 2rem;
  }
  
  @media only screen and (min-width: 992px) {
    font-size: 2rem;
  }
  
  @media only screen and (min-width: 1200px) {
    font-size: 2rem;
  }
  
  @media only screen and (min-width: 1600px) {
    font-size: 2.188rem;
  }

`

const StyledHR = styled.div`
.styled-hr{
    width: 0rem;
    margin-top: 1rem;
    transition: width 1s;
}

.styled-hr-animate{
    width: 20rem;
    transition: width 1s;
}
`

const ImageCol = styled.div`

overflow: hidden;
display: flex;
position: relative;
align-items: center;
justify-content: center;
border-radius: 1rem;
transform-origin: center center;
transition: height 0.5s, width 0.5s, transform 0.5s;
.ant-image{
    position: relative;
}


@media only screen and (max-width: 600px) {
    width: 18rem!important;
    height: 15rem;
  }
  
  @media only screen and (min-width: 600px) {
    width: 18rem!important;
    height: 15rem;
  }

@media only screen and (min-width: 768px) {
    margin: 0 4rem;
    width: 24rem!important;
    height: 20rem;
  }

@media only screen and (min-width: 992px) {
    width: 24rem!important;
    height: 20rem;
  }

@media only screen and (min-width: 1200px) {
    width: 24rem!important;
    height: 20rem;
  }
  
  @media only screen and (min-width: 1600px) {
    width: 30rem!important;
    height: 25rem;
  }

&:hover{
    transition: height 0.5s, width 0.5s, transform 0.5s;
    transform-origin: center center;
    
    cursor: pointer;
    
    @media only screen and (max-width: 600px) {
        transform: scale(1.2,1.2)
      }
      
      @media only screen and (min-width: 600px) {
        transform: scale(1.2,1.2)
      }

      @media only screen and (min-width: 768px) {
        transform: scale(1.2,1.2)
      }

    @media only screen and (min-width: 992px) {
        transform: scale(1.2,1.2)
      }
    
    @media only screen and (min-width: 1200px) {
        transform: scale(1.2,1.2)
      }
      
      @media only screen and (min-width: 1600px) {
        transform: scale(1.2,1.2)
      }

}

img{
    transform-origin: center center;
    margin-top: -8rem;
    width: 32rem;
    align-self: center;
    transition: transform 0.5s, width 0.5s;

    @media only screen and (max-width: 600px) {
        width: 24rem;
      }
      
      @media only screen and (min-width: 600px) {
        width: 24rem;
      }
    
    @media only screen and (min-width: 768px) {
        width: 24rem;
      }

    @media only screen and (min-width: 992px) {
        width: 24rem;
      }
    
    @media only screen and (min-width: 1200px) {
        width: 24rem;
      }
      
      @media only screen and (min-width: 1600px) {
        width: 30rem;
      }
}

&:hover img{
    transform-origin: center center;
    transition: transform 0.5s, width 0.5s;
    transform: scale(1.5,1.5)

    @media only screen and (max-width: 600px) {
        transform: scale(1.2,1.2)
      }
      
      @media only screen and (min-width: 600px) {
        transform: scale(1.2,1.2)
      }
    
    @media only screen and (min-width: 768px) {
        transform: scale(1.2,1.2)
      }

    @media only screen and (min-width: 992px) {
        transform: scale(1.2,1.2)
      }
    
    @media only screen and (min-width: 1200px) {
        transform: scale(1.2,1.2)
      }
      
      @media only screen and (min-width: 1600px) {
        transform: scale(1.2,1.2)
      }
}

span{
    transition: top 0.5s;
    z-index:3;
    position: relative!Important;
    width: auto;
    text-align: center;
    @media only screen and (max-width: 600px) {
        top: -200px;
      }
      
      @media only screen and (min-width: 600px) {
        top: -200px;
      }
    
    @media only screen and (min-width: 768px) {
        top: -120px;
      }

    @media only screen and (min-width: 992px) {
        top: 500px;
      }
    
    @media only screen and (min-width: 1200px) {
        top: 500px;
      }
      
      @media only screen and (min-width: 1600px) {
        top: 500px;
      }
}

p{
    transition: margin-left 0.5s ease-in-out;
    background: rgba(15, 18, 26, 0.9);
    @media only screen and (max-width: 600px) {
        margin-left: -6rem;
      }
      
      @media only screen and (min-width: 600px) {
        margin-left: -6rem;
      }
    
    @media only screen and (min-width: 768px) {
        margin-left: -10rem;
      }

    @media only screen and (min-width: 992px) {
        margin-left: 0rem;
      }
    
    @media only screen and (min-width: 1200px) {
        margin-left: 0rem;
      }
      
      @media only screen and (min-width: 1600px) {
        margin-left: 0rem;
      }
}

&:hover p{
    transition: margin-left 1s ease-in-out;
    
    @media only screen and (max-width: 600px) {
        margin-left: -15rem;
      }
      
      @media only screen and (min-width: 600px) {
        margin-left: -15rem;
      }
    
    @media only screen and (min-width: 768px) {
        margin-left: -10rem;
      }

    @media only screen and (min-width: 992px) {
        margin-left: -10rem;
      }
    
    @media only screen and (min-width: 1200px) {
        margin-left: -10rem;
      }
      
      @media only screen and (min-width: 1600px) {
        margin-left: -15rem;
      }
}

&:hover span{
    position: relative;
    transition: top 0.5s;
    @media only screen and (max-width: 600px) {
        top: -180px;
      }
      
      @media only screen and (min-width: 600px) {
        top: -180px;
      }
    
    @media only screen and (min-width: 768px) {
        top: -120px;
      }

    @media only screen and (min-width: 992px) {
        top: -120px;
      }
    
    @media only screen and (min-width: 1200px) {
        top: -120px;
      }
      
      @media only screen and (min-width: 1600px) {
        top: -170px;
      }
}

`

const StyledModalWithBG = styled(Modal)`

@media only screen and (max-width: 600px) {
  height: 20vh;
  width: 80vw!important;
}

@media only screen and (min-width: 600px) {
  height: 20vh;
  width: 80vw!important;
}

@media only screen and (min-width: 768px) {
  height: 80vh;
  width: 80vw!important;
}

@media only screen and (min-width: 992px) {
  height: 80vh;
  width: 80vw!important;
}

@media only screen and (min-width: 1200px) {
  height: 80vh;
  width: 80vw!important;
}

@media only screen and (min-width: 1600px) {
  height: 80vh;
  width: 80vw!important;
}

.ant-modal-body{
    padding: 0;
    background: transparent!important;
    // background-color: #0F121A!important;
    // background-image: url(${BG})!important;
    background-size: cover!important;
  }

.ant-modal-content{
  background-color: #0F121AEE!important;
}

.ant-modal-close-x{
    color:#FCFEFB;
}
`

const StyledSpan = styled.span`
background: rgba(15, 18, 26, 0.9);
`

const Categories = () => {

  const [images, setImages] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { width } = useWindowDimensions();

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    const hr = document.querySelector('.styled-hr');

    hr.classList.remove('styled-hr-animate');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.className.includes('styled-hr')) {
          hr.classList.add('styled-hr-animate');
          return;
        }

        if (entry.isIntersecting && entry.target.className.includes('furniture')) {
          entry.target.classList.add('furniture-animate');
          return;
        }

        if (entry.isIntersecting && entry.target.className.includes('lighting')) {
          entry.target.classList.add('lighting-animate');
          return;
        }

        if (entry.isIntersecting && entry.target.className.includes('rtefacts')) {
          entry.target.classList.add('artefacts-animate');
          return;
        }

        if (entry.isIntersecting && entry.target.className.includes('fade-in-wrapper')) {
          entry.target.classList.add('fade-in-wrapper-animate');
          return;
        }

        entry.target.classList.remove('styled-hr-animate');
        entry.target.classList.remove('fade-in-wrapper-animate');
        entry.target.classList.remove('furniture-animate');
        entry.target.classList.remove('lighting-animate');
        entry.target.classList.remove('artefacts-animate');
      });
    }, { rootMargin: "0px 0px -300px 0px" });
    observer.observe(document.querySelector('.styled-hr'));
    observer.observe(document.querySelector('.fade-in-wrapper'));
    observer.observe(document.querySelector('.furniture'));
    observer.observe(document.querySelector('.lighting'));
    observer.observe(document.querySelector('.artefacts'));
  }, [])

  let imageWidth = '1280';
  let imageHeight = '720px';

  const showModal = category => {

    if (width >= 1600) {
      imageHeight = '720px';
      imageWidth = '1280px';
    }
    else if (width >= 1200) {
      imageHeight = '480px';
      imageWidth = '854px';
    }
    else if (width >= 992) {
      imageHeight = '480px';
      imageWidth = '854px';
    }
    else if (width >= 768) {
      imageHeight = '480px';
      imageWidth = '854px';
    }
    else if (width >= 600) {
      imageHeight = '480px';
      imageWidth = '480px';
    }
    else if (width < 600) {
      imageHeight = '480px';
      imageWidth = '480px';
    }


    if (category === 'FURNITURE') {
      setImages(() => FURNITURE({ imageHeight, imageWidth }));
    }
    else if (category === 'LIGHTING') {
      setImages(() => LIGHTING(({ imageHeight, imageWidth })));
    }
    else {
      setImages(() => ARTEFACTS(({ imageHeight, imageWidth })));
    }
    setIsModalVisible(true);
  }
  console.log('Furniture', FURNITURE);
  return (
    <StyledRowWithBG>
      <StyledModalWithBG visible={isModalVisible} footer={null} onCancel={handleCancel}>
        <ProductGallery images={images} />
      </StyledModalWithBG>
      <FullWidthRowIntro>
        <CenteredCol className={'fade-in-wrapper fade-in-wrapper-animate'} style={{ flexDirection: 'column' }} span={24}>
          <HeadingP >Explore Now</HeadingP>
          <StyledHR className={'hr-wrapper'}><hr className={'styled-hr styled-hr-animate'} /></StyledHR>
          <IntroductionCol
            xs={{ span: 18 }}
            sm={{ span: 18 }}
            md={{ span: 22 }}
            lg={{ span: 18 }}
            xl={{ span: 18 }}
            xxl={{ span: 18 }}
            style={{ marginTop: '2rem' }}
           >
            Residential Projects. Commercial Spaces. Show flats. Clinics.<br />
            We can retrofit your space no matter what segment it belongs to.<br />
            Explore through our range of products that we can help you source and make
            all your interior spaces feel <BoldP>at home.</BoldP>
          </IntroductionCol>
        </CenteredCol>
      </FullWidthRowIntro>
      <FullWidthRowSpaceAround>
        <StyledSlider {...settings} >
          <ImageCol
            onClick={() => showModal('FURNITURE')}
          ><div className={'furniture furniture-animate'}>
            <Image preview={false} src={Furniture} />
            <StyledSpan><HeadingP>FURNITURE</HeadingP></StyledSpan></div>
          </ImageCol>
          <ImageCol
            onClick={() => showModal('LIGHTING')}
            
          ><div className={'lighting lighting-animate'}>
            <Image preview={false} src={Lighting} />
            <StyledSpan><HeadingP>LIGHTING</HeadingP></StyledSpan></div>
          </ImageCol>
          <ImageCol
            onClick={() => showModal('ARTEFACTS')}
            
          ><div className={'artefacts artefacts-animate'}>
            <Image preview={false} src={Artefacts} />
            <StyledSpan><HeadingP>ARTEFACTS</HeadingP></StyledSpan></div>
          </ImageCol>
        </StyledSlider>
      </FullWidthRowSpaceAround>
    </StyledRowWithBG>
  );
}

export default Categories;

