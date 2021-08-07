import React from 'react';
import { Row } from 'antd';
import styled from 'styled-components';
import BG from '../images/ProjectItem.jpg';
import { CenteredCol } from './LandingPage';
import { useWindowDimensions } from './Categories';

const StyledDiv = styled.div`
background-image: url(${BG});
background-size: cover;
width: 200px;
height: 200px;
border-radius: 50%;
display: flex;
overflow: hidden;
justify-content: center;
align-items: center;
`

const ProjectDiv = styled.div`
position: relative;
text-align: center;
font-family: AvenirNextRegular;
font-weight: 600;
font-size: 20px;
margin-bottom: 3rem;
margin-top: -1rem;
transition: margin-top 0.25s, margin-bottom 0.25s;
overflow: hidden;
display: flex;
flex-direction: column;

@media only screen and (max-width: 600px) {
    margin-top: -5rem;
    margin-bottom: 6rem;
    justify-content: flex-end;
  }
@media only screen and (min-width: 600px) {
    margin-top: -5rem;
    margin-bottom: 6rem;
    justify-content: flex-end;
  }
@media only screen and (min-width: 768px) {
    margin-top: -5rem;
    margin-bottom: 5.5rem;
    justify-content: normal;
  }
@media only screen and (min-width: 992px) {
    margin-bottom: 3rem;
    margin-top: -1rem;
    justify-content: normal;
   }
@media only screen and (min-width: 1200px) {
    margin-bottom: 3rem;
    margin-top: -1rem;
    justify-content: normal;
   }
@media only screen and (min-width: 1600px) {
    margin-bottom: 3rem;
    margin-top: -1rem;
    justify-content: normal;
   }

`

const FooterSpan = styled.span`
margin-top: 2rem;
text-align: center;
font-family: AvenirNextBold;
transition: margin-top 0.5s;

@media only screen and (max-width: 600px) {
    margin-top: 0.5rem;
  }
@media only screen and (min-width: 600px) {
    margin-top: 0.5rem;
  }
@media only screen and (min-width: 768px) {
    margin-top: 0.5rem;
  }
@media only screen and (min-width: 992px) {
    margin-top: 2rem;
   }
@media only screen and (min-width: 1200px) {
    margin-top: 2rem;
   }
@media only screen and (min-width: 1600px) {
    margin-top: 2rem;
   }

`

const ContainerDiv = styled.div`
height: 560px;
width: 400px;
margin: -20rem 0rem 0 0rem;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

@media only screen and (max-width: 600px) {
    padding-top: 0rem;
  }
@media only screen and (min-width: 600px) {
    padding-top: 0rem;
  }
@media only screen and (min-width: 768px) {
    padding-top: 2rem;
  }
@media only screen and (min-width: 992px) {
    padding-top: 0rem;
   }
@media only screen and (min-width: 1200px) {
    padding-top: 0rem;
   }
@media only screen and (min-width: 1600px) {
    padding-top: 0rem;
   }

&:hover .footer-span{
    margin-top: 0.5rem;
    transition: margin-top 0.25s;
}

&:hover .project-div{
    margin-top: -5rem;
    margin-bottom: 7rem;
    transition: margin-bottom 0.25s, margin-top 0.25s;

    @media only screen and (max-width: 600px) {
        margin-top: -5rem;
        margin-bottom: 6rem;
        align-items: flex-end;
        align-content: bottom;
      }
    @media only screen and (min-width: 600px) {
        margin-top: -5rem;
        margin-bottom: 6rem;
        align-items: flex-end;
        align-content: bottom;
      }
    @media only screen and (min-width: 768px) {
        margin-top: -5rem;
        margin-bottom: 5.5rem;
      }
    @media only screen and (min-width: 992px) {
        margin-top: -5rem;
        margin-bottom: 7rem;
       }
    @media only screen and (min-width: 1200px) {
        margin-top: -5rem;
        margin-bottom: 7rem;
       }
    @media only screen and (min-width: 1600px) {
        margin-top: -5rem;
        margin-bottom: 7rem;
       }
}

.year-col{
    border: 0px solid #0F121A;
    width: 200px;
    height: 200px;
    transition: height 0.25s, width 0.25s, margin-top 0.25s, border 0.2s, padding 0.25s;
    transform-origin: center;
    border-radius: 50%;
    object-fit: cover;
    object-position: center right;

    @media only screen and (max-width: 600px) {
        transition: height 0.25s, width 0.25s, margin-top 0.25s, border 0.2s, padding 0.25s;
        transform-origin: center;
        width: 300px;
        height: 300px;
        margin-top: -40px;
        border: 1px solid #0F121A;
        padding: 1rem;
      }
      @media only screen and (min-width: 600px) {
        transition: height 0.25s, width 0.25s, margin-top 0.25s, border 0.2s, padding 0.25s;
        transform-origin: center;
        width: 300px;
        height: 300px;
        margin-top: -40px;
        border: 1px solid #0F121A;
        padding: 1rem;
      }
    
    @media only screen and (min-width: 768px) {
        width: 350px;
        height: 350px;
        border: 1px solid #0F121A;
        padding: 1rem;
      }
    
    @media only screen and (min-width: 992px) {
        width: 200px;
        height: 200px;
        border: 0px solid #0F121A;
        padding: 0rem;
       }
    
    @media only screen and (min-width: 1200px) {
        width: 200px;
        height: 200px;
        border: 0px solid #0F121A;
        padding: 0rem;
       }
       
       @media only screen and (min-width: 1600px) {
        width: 200px;
        height: 200px;
        border: 0px solid #0F121A;
        padding: 0rem;
       }
}

&:hover .year-col{
    @media only screen and (max-width: 600px) {
        transition: height 0.25s, width 0.25s, margin-top 0.25s, border 0.2s, padding 0.25s;
        transform-origin: center;
        width: 300px;
        height: 300px;
        margin-top: -40px;
        border: 1px solid #0F121A;
        padding: 1rem;
      }
      @media only screen and (min-width: 600px) {
        transition: height 0.25s, width 0.25s, margin-top 0.25s, border 0.2s, padding 0.25s;
        transform-origin: center;
        width: 300px;
        height: 300px;
        margin-top: -40px;
        border: 1px solid #0F121A;
        padding: 1rem;
      }
    
    @media only screen and (min-width: 768px) {
        transition: height 0.25s, width 0.25s, margin-top 0.25s, border 0.2s, padding 0.25s;
        transform-origin: center;
        width: 350px;
        height: 350px;
        margin-top: -40px;
        border: 1px solid #0F121A;
        padding: 1rem;
      }
    
    @media only screen and (min-width: 992px) {
        transition: height 0.25s, width 0.25s, margin-top 0.25s, border 0.2s, padding 0.25s;
        transform-origin: center;
        width: 350px;
        height: 350px;
        margin-top: -40px;
        border: 1px solid #0F121A;
        padding: 1rem;
       }
    
    @media only screen and (min-width: 1200px) {
        transition: height 0.25s, width 0.25s, margin-top 0.25s, border 0.2s, padding 0.25s;
        transform-origin: center;
        width: 350px;
        height: 350px;
        margin-top: -40px;
        border: 1px solid #0F121A;
        padding: 1rem;
       }
       
    @media only screen and (min-width: 1600px) {
        transition: height 0.25s, width 0.25s, margin-top 0.25s, border 0.2s, padding 0.25s;
        transform-origin: center;
        width: 350px;
        height: 350px;
        margin-top: -40px;
        border: 1px solid #0F121A;
        padding: 1rem;
       }
}

.year-col::before{
    content: "";
    display: block;
    position: absolute;
    z-index: 1;
    border: 1px solid;
    border-bottom: 1px;
    top: -50px;
    height: 1px;
    transition: width 0.52s;
    @media only screen and (max-width: 600px) {
        width: 310px;
      }
    @media only screen and (min-width: 600px) {
        width: 310px;
      }
    @media only screen and (min-width: 768px) {
        width: 350px;
      }
    @media only screen and (min-width: 992px) {
        width: 180px;
       }
    @media only screen and (min-width: 1200px) {
        width: 180px;
       }
    @media only screen and (min-width: 1600px) {
        width: 180px;
       }
}

&:hover .year-col:before{
    transition: width 0.52s;
    @media only screen and (max-width: 600px) {
        width: 310px;
      }
      @media only screen and (min-width: 600px) {
        width: 310px;
      }
    @media only screen and (min-width: 768px) {
        width: 350px;
      }
    @media only screen and (min-width: 992px) {
        width: 350px;
       }
    
    @media only screen and (min-width: 1200px) {
        width: 350px;
       }
       
       @media only screen and (min-width: 1600px) {
        width: 350px;
       }
 }

.year-col::after{
    content: "";
    display: block;
    position: absolute;
    z-index: 1;
    border: 1px solid;
    border-bottom: 1px;
    bottom: -20px;
    width: 280px;
    height: 1px;
    transition: bottom 0.25s;

    @media only screen and (max-width: 600px) {
        bottom: 63px;
      }
      @media only screen and (min-width: 600px) {
        bottom: 63px;
      }
    @media only screen and (min-width: 768px) {
        bottom: 63px;
      }
    @media only screen and (min-width: 992px) {
        bottom: -20px;
       }
    @media only screen and (min-width: 1200px) {
        bottom: -20px;
       }   
    @media only screen and (min-width: 1600px) {
        bottom: -20px;
       }
 }

 &:hover .year-col:after{
    transition: bottom 0.25s, width 0.52s;
    bottom: 63px;
 }

 .year-div{
    transition: height 0.25s, width 0.25s;
    transform-origin: center;

    @media only screen and (max-width: 600px) {
        width: 300px;
        height: 270px;
      }
      @media only screen and (min-width: 600px) {
        width: 300px;
        height: 270px;
      }
    
    @media only screen and (min-width: 768px) {
        width: 330px;
        height: 320px;
      }
    
    @media only screen and (min-width: 992px) {
        width: 200px;
        height: 200px;
       }
    
    @media only screen and (min-width: 1200px) {
        width: 200px;
        height: 200px;
       }
       
       @media only screen and (min-width: 1600px) {
        width: 200px;
        height: 200px;
       }
}

&:hover .year-div{
    transition: height 0.25s, width 0.25s;
    transform-origin: center;
    @media only screen and (max-width: 600px) {
        width: 300px;
        height: 270px;
      }
      @media only screen and (min-width: 600px) {
        width: 300px;
        height: 270px;
      }
    
    @media only screen and (min-width: 768px) {
        width: 330px;
        height: 320px;
      }
    
    @media only screen and (min-width: 992px) {
        width: 330px;
        height: 320px;
       }
    
    @media only screen and (min-width: 1200px) {
        width: 330px;
        height: 320px;
       }
       
       @media only screen and (min-width: 1600px) {
        width: 330px;
        height: 320px;
       }
}

 .year-div:before{
    content: "";
    display: block;
    position: absolute;
    z-index: 1;
    top: -50px;
    left: 50%;
    border: 1px solid;
    border-width: 0 0 0 1px;
    width: 1px;
    height: 50px;
}

.year-div:after{
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    bottom: -20px;
    left: 50%;
    border: 1px solid;
    border-width: 0 0 0 1px;
    width: 1px;
    height: 40px;
    transition: bottom 0.25s;

    @media only screen and (max-width: 600px) {
        bottom: 63px;
      }
    @media only screen and (min-width: 600px) {
        bottom: 63px;
      }
    @media only screen and (min-width: 768px) {
        bottom: 63px;
      }
    @media only screen and (min-width: 992px) {
        bottom: -20px;
       }
    @media only screen and (min-width: 1200px) {
        bottom: -20px;
       }
    @media only screen and (min-width: 1600px) {
        bottom: -20px;
       }
}

&:hover .year-div:after{
    transition: bottom 0.25s, width 0.25s;
    bottom: 63px;
 }

 .year-span{
    box-shadow: 0px 0px 15px #0F121A;
    background: rgba(15, 18, 26, 0.9);
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: AvenirNextUltraLight;
    font-size: 35px;
    font-weight: 50;
    color: white;
    transition: margin-top 0.25s, font-size 0.25s;
    
    @media only screen and (max-width: 600px) {
        font-size: 28px;
        margin-top: 220px;
        transition: margin-top 0.25s, font-size 0.25s;
      }
    @media only screen and (min-width: 600px) {
        font-size: 28px;
        margin-top: 220px;
        transition: margin-top 0.25s, font-size 0.25s;
      }
    
    @media only screen and (min-width: 768px) {
        font-size: 28px;
        margin-top: 270px;
        transition: margin-top 0.25s, font-size 0.25s;
      }
    
    @media only screen and (min-width: 992px) {
        font-size: 35px;
        margin-top: 0;
        transition: margin-top 0.25s, font-size 0.25s;
       }
    
    @media only screen and (min-width: 1200px) {
        font-size: 35px;
        margin-top: 0;
        transition: margin-top 0.25s, font-size 0.25s;
       }
       
    @media only screen and (min-width: 1600px) {
        font-size: 35px;
        margin-top: 0;
        transition: margin-top 0.25s, font-size 0.25s;
       }

}

&:hover .year-span{

    @media only screen and (max-width: 600px) {
        font-size: 28px;
        margin-top: 220px;
        transition: margin-top 0.25s, font-size 0.25s;
      }
    @media only screen and (min-width: 600px) {
        font-size: 28px;
        margin-top: 220px;
        transition: margin-top 0.25s, font-size 0.25s;
      }
    
    @media only screen and (min-width: 768px) {
        font-size: 28px;
        margin-top: 270px;
        transition: margin-top 0.25s, font-size 0.25s;
      }
    
    @media only screen and (min-width: 992px) {
        font-size: 28px;
        margin-top: 270px;
        transition: margin-top 0.25s, font-size 0.25s;
       }
    
    @media only screen and (min-width: 1200px) {
        font-size: 28px;
        margin-top: 270px;
        transition: margin-top 0.25s, font-size 0.25s;
       }
       
    @media only screen and (min-width: 1600px) {
        font-size: 28px;
        margin-top: 270px;
        transition: margin-top 0.25s, font-size 0.25s;
       }
}

.project-p{
    width: 400px;
    transition: margin 0.5s;
    display: inline;

    @media only screen and (max-width: 600px) {
        font-size: 1rem;
        margin: 0 0 0 0;
      }
      @media only screen and (min-width: 600px) {
        font-size: 1rem;
        margin: 0 0 0 0;
      }
    
    @media only screen and (min-width: 768px) {
        font-size: 1.25rem;
        margin: 0 0 0 0;
      }
    
    @media only screen and (min-width: 992px) {
        font-size: 1.25rem;
        margin: ${props=> props.length};
       }
    
    @media only screen and (min-width: 1200px) {
        font-size: 1.25rem;
        margin: ${props=> props.length};
       }
       
       @media only screen and (min-width: 1600px) {
        font-size: 1.25rem;
        margin: ${props=> props.length};
       }

}

&:hover .project-p{
    margin: 0 0 0 0;
    transition: margin 0.5s;
}

.project-p-head{
    color: white;
    background-color: black;
    height: 2rem;
    @media only screen and (max-width: 600px) {
        display: none;
      }
      @media only screen and (min-width: 600px) {
        display: none;
      }
    
    @media only screen and (min-width: 768px) {
        display: none;
      }
    
    @media only screen and (min-width: 992px) {
        display: inline;
       }
    
    @media only screen and (min-width: 1200px) {
        display: inline;
       }
       
       @media only screen and (min-width: 1600px) {
        display: inline;
       }
}

&:hover .project-p-head{
    transition: margin 0.5s;
    margin: -160px 0 150px 0;
}

`

const StyledP = styled.p`
font-family: AvenirNextUltraLight;
font-size: 15px;
display: inline;

@media only screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
  @media only screen and (min-width: 600px) {
    font-size: 0.8rem;
  }

@media only screen and (min-width: 768px) {
    font-size: 0.938rem;
  }

@media only screen and (min-width: 992px) {
    font-size: 0.938rem;
   }

@media only screen and (min-width: 1200px) {
    font-size: 0.938rem;
   }
   
   @media only screen and (min-width: 1600px) {
    font-size: 0.938rem;
   }

`


const ProjectItem = props => {

    let calculatedPadding = (5-props.data.projects.length)*30;
    let calculatedMargin = (props.data.projects.length)*30-5 + 'px 0px 0px 0px';

    const { height, width } = useWindowDimensions();
    if(width<768){
        calculatedPadding = 0;
    }

    return (
        <ContainerDiv className={'container-div'} length={calculatedMargin}>
            <ProjectDiv className={'project-div'} style={{height: '180px', paddingTop: calculatedPadding+'px'}}>
                <span className={'project-p project-p-head'}>{props.data.projectYear}</span>
                {props.data.projects.map((project)=>{ 
                    return <span className={'project-p'}>{project.name}<StyledP>&nbsp;{project.city}</StyledP></span>
                    })}
            </ProjectDiv>
            <Row className={'year-row'}>
                <CenteredCol className={'year-col'} span={24}>
                    <StyledDiv className={'year-div'}>
                        <span className={'year-span'}>{props.data.projectYearShort}</span>
                    </StyledDiv>
                </CenteredCol>
            </Row>
            <FooterSpan className={'footer-span'}>{props.data.type}</FooterSpan>
        </ContainerDiv>
    );
}

export default ProjectItem;