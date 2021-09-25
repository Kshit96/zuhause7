import React from 'react';
import { Row, Col } from 'antd';
import BG from '../images/CategoriesBG.png';
import { CenteredCol } from './LandingPage';
import styled from 'styled-components';
import { FullWidthRow } from './CommonStyledComponents';
import { InstagramOutlined, FacebookOutlined } from '@ant-design/icons';

const StyledRowWithBG = styled(Row)`
background-image: url(${BG});
background-size: cover;
align-content: center;
background-position: center;

@media only screen and (max-width: 600px) {
    height: 300px;
    width: 100%;
  }
  
  @media only screen and (min-width: 600px) {
    height: 300px;
    width: 100%;
  }

@media only screen and (min-width: 768px) {
    height: 300px;
    width: 100%;
  }

@media only screen and (min-width: 992px) {
    height: 300px;
    width: 100%;
  }

@media only screen and (min-width: 1200px) {
  height: 300px;
  width: 100%;
}

@media only screen and (min-width: 1600px) {
  height: 300px;
  width: 100%;
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

const Footer = () => {


    return (
        <StyledRowWithBG>
            <CenteredCol style={{ flexDirection: 'column', color: 'white', fontFamily: 'AvenirNextRegular', fontSize: '1rem' }} span={24}>
                <Col style={{display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}
                    xs={{ span: 18 }}
                    sm={{ span: 18 }}
                    md={{ span: 22 }}
                    lg={{ span: 18 }}
                    xl={{ span: 18 }}
                    xxl={{ span: 18 }}
                >
                    info@zuhause7@gmail.com<br />
                    +91 9820512331<br />
                    GST No.: AAFPL808G<br />
                </Col>
                <Col style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: '1rem'}}>
                    <InstagramOutlined style={{fontSize: '2rem'}}/>
                    <FacebookOutlined style={{marginLeft: '1rem', fontSize: '2rem'}}/>
                </Col>
            </CenteredCol>
        </StyledRowWithBG>
    );
}

export default Footer;

