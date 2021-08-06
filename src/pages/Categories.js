import React, { useEffect, useState} from 'react';
import { Row, Image, Modal } from 'antd';
import BG from '../images/CategoriesBG.png';
import { CenteredCol, IntroductionCol, BoldP } from './LandingPage';
import styled from 'styled-components';
import Furniture from '../images/Furniture.jpeg';
import Lighting from '../images/Lighting.jpeg';
import Artefacts from '../images/Artefacts.jpeg';
import { LIGHTING, FURNITURE, ARTEFACTS } from '../data/CatalogueImages';
import ProductGallery from './ProductGallery';
import { StyledRow, FullWidthRow } from './CommonStyledComponents';


const StyledRowWithBG = styled(StyledRow)`
background-image: url(${BG});
background-size: cover;
align-content: center;
`

export const FullWidthRowIntro = styled(FullWidthRow)`

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
justify-content: space-around;
align-content: center;

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
font-size: 35px;
color: #FCFEFB;
margin: 0;
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
transform-origin: center;
transition: height 0.5s, width 0.5s;
.ant-image{
    position: absolute!important;
}

@media only screen and (min-width: 992px) {
    width: 24rem;
    height: 20rem;
  }

@media only screen and (min-width: 1200px) {
    width: 24rem;
    height: 20rem;
  }
  
  @media only screen and (min-width: 1600px) {
    width: 30rem;
    height: 25rem;
  }

&:hover{
    transition: height 0.5s, width 0.5s;
    transform-origin: center;
    
    cursor: pointer;
    

    @media only screen and (min-width: 992px) {
        width: 28rem;
        height: 24rem;
      }
    
    @media only screen and (min-width: 1200px) {
        width: 28rem;
        height: 24rem;
      }
      
      @media only screen and (min-width: 1600px) {
        width: 35rem!Important;
        height: 30rem;
      }

}

img{
    transform-origin: center;
    width: 32rem;
    align-self: center;
    transition: width 0.5s;

    @media only screen and (min-width: 992px) {
        width: 26rem;
      }
    
    @media only screen and (min-width: 1200px) {
        width: 26rem;
      }
      
      @media only screen and (min-width: 1600px) {
        width: 32rem;
      }
}

&:hover img{
    transform-origin: center;
    transition: width 0.5s;
    width: 45rem;

    @media only screen and (min-width: 992px) {
        width: 40rem;
      }
    
    @media only screen and (min-width: 1200px) {
        width: 40rem;
      }
      
      @media only screen and (min-width: 1600px) {
        width: 45rem;
      }
}

span{
    transition: top 0.5s;
    z-index:3;
    position: relative!Important;
    top: 500px;
    width: 100%;
    text-align: center;
}

p{
    margin-left: 0rem;
    transition: margin-left 0.5s ease-in-out;
}

&:hover p{
    transition: margin-left 1s ease-in-out;
    margin-left: -20rem;
}

&:hover span{
    position: relative;
    top: 215px;
    transition: top 0.5s;
}




`

const StyledModalWithBG = styled(Modal)`
.ant-modal-body{
    padding: 0;
    background-color: #0F121A!important;
    background-image: url(${BG})!important;
    background-size: cover!important;
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

    const handleCancel = () => {
        setIsModalVisible(false);
      };

    useEffect(()=>{
        const hr= document.querySelector('.styled-hr');

        hr.classList.remove('styled-hr-animate');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting && entry.target.className.includes('styled-hr')) {
                hr.classList.add('styled-hr-animate');
                return;
              }

              if (entry.isIntersecting && entry.target.className.includes('fade-in-wrapper')) {
                entry.target.classList.add('fade-in-wrapper-animate');
                return;
              }

              entry.target.classList.remove('styled-hr-animate');
              entry.target.classList.remove('fade-in-wrapper-animate');
            });
          }, {rootMargin: "0px 0px -300px 0px"});
          observer.observe(document.querySelector('.styled-hr'));
          observer.observe(document.querySelector('.fade-in-wrapper'));
    },[])

    const showModal = category => {
        if(category === 'FURNITURE'){
            setImages(FURNITURE);
        }
        else if(category === 'LIGHTING'){
            setImages(LIGHTING);
        }
        else{
            setImages(ARTEFACTS);
        }
        setIsModalVisible(true);
    }

    return (
        <StyledRowWithBG>
            <StyledModalWithBG visible={isModalVisible} footer={null}  onCancel={handleCancel} width={'80vw'} height={'80vh'}>
                <ProductGallery images={images}/>
            </StyledModalWithBG>
            <FullWidthRowIntro>
                <CenteredCol style={{ flexDirection: 'column' }} span={24}>
                    <HeadingP className={'fade-in-wrapper fade-in-wrapper-animate'}>Explore Now</HeadingP>
                    <StyledHR className={'hr-wrapper'}><hr className={'styled-hr styled-hr-animate'}/></StyledHR>
                    <IntroductionCol style={{ marginTop: '2rem' }}>
                        Residential Projects. Commercial Spaces. Show flats. Clinics.<br />
                        We can retrofit your space no matter what segment it belongs to.<br />
                        Explore through our range of products that we can help you source and make<br />
                        all your interior spaces feel <BoldP>at home.</BoldP>
                    </IntroductionCol>
                </CenteredCol>
            </FullWidthRowIntro>
            <FullWidthRowSpaceAround>
                <ImageCol 
                onClick={()=>showModal('FURNITURE')}>
                    <Image preview={false} src={Furniture} />
                    <StyledSpan><HeadingP>FURNITURE</HeadingP></StyledSpan>
                </ImageCol>
                <ImageCol 
                onClick={()=>showModal('LIGHTING')}>
                    <Image preview={false} src={Lighting} />
                    <StyledSpan><HeadingP>LIGHTING</HeadingP></StyledSpan>
                </ImageCol>
                <ImageCol 
                onClick={()=>showModal('ARTEFACTS')}>
                    <Image preview={false} src={Artefacts} />
                    <StyledSpan><HeadingP>ARTEFACTS</HeadingP></StyledSpan>
                </ImageCol>
            </FullWidthRowSpaceAround>
        </StyledRowWithBG>
    );
}

export default Categories;

