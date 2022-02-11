import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Modal } from 'antd';
import './App.css';
import LandingPage from './pages/LandingPage';
import ContactForm from './pages/ContactForm';
import Categories from './pages/Categories';
import { ReactComponent as ContactUs } from './icons/ContactUs.svg';
import Projects from './pages/Projects';
import Brands from './pages/Brands';
import About from './pages/About';
import Footer from './pages/Footer';

const StyledButton = styled(Button)`
overflow: hidden;
position: fixed;
transition: width 0.5s, box-shadow 0.5s, border-color 1s;
bottom: 50%;
right: 0px;
width: 38px;
height: 42px;
border-radius: 3px 0px 0px 3px;
color: #FCFEFB;
border-color: #FCFEFB;
display: flex;
align-items: center;
padding: 0;
justify-content: center;
z-index: 2;
box-shadow: inset 0 0 0 0.1px #A99060;
&:hover{
  box-shadow: inset 400px 0 0 0.1px #A99060;
  width: 150px;
  transition: width 0.5s, box-shadow 1s, border-color 0.5s ;
  transform-origin: right;
  border-color: #A99060;
  cursor: pointer;
}

svg {
  margin-left: 1.2rem;
  margin-right: 0;
  transition: margin-right 0.5s;
}

p{
margin-top: 1.75rem;
margin-left: -9.375rem;
transition: margin-left 0.5s, margin-right 0.5s;
font-size: 1.625rem;
color: #FCFEFB;
align-self: center;
margin-right: 0rem;
}

&:hover p{
  margin-left: 0;
  transition: margin-left 0.5s, margin-right 0.5s;
  color: #FCFEFB;
}

&:hover svg{
  margin-left: 1.2rem;
  margin-right: -2rem;
  transition: margin-right 0.5s;
}
`
export const StyledModal = styled(Modal)`
.ant-modal-body{
  padding: 0;
}
.ant-modal-close-x{
  color: #0F121A;
}
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;

  @media only screen and (min-width: 768) {
  
    width: 100%!important;
    margin-top: -1%;
  
    .ant-modal-content{
      height: 800px;
      width: 75%!important;
  }
  .ant-modal-body{
    height: 800px;
    width: 100%!important;
  }
   }

  @media only screen and (min-width: 992) {
  
    width: 100%!important;
    margin-top: -1%;
  
    .ant-modal-content{
      height: 650px;
      width: 45%!important;
  }
  .ant-modal-body{
    height: 650px;
    width: 100%!important;
  }
   }


@media only screen and (min-width: 1200px) {
  
  width: 100%!important;
  margin-top: -1%;

  .ant-modal-content{
    height: 650px;
    width: 45%!important;
}
.ant-modal-body{
  height: 650px;
  width: 100%!important;
}
 }
 
 @media only screen and (min-width: 1600px) {

  width: 100%!important;
  margin-top: -1%;
  .ant-modal-content{
    height: 900px;
    width: 45%!important;
}

.ant-modal-body{
  height: 900px;
  width: 100%!important;
}
 }

`

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <StyledModal visible={isModalVisible} onCancel={handleCancel} footer={null}>
        <ContactForm onOk={handleOk} />
      </StyledModal>
      <StyledButton onClick={showModal}>
        <p>Contact Us</p>
        <ContactUs />
      </StyledButton>
      <LandingPage />
      <Categories />
      <Brands />
      <Projects />
      <About />
      <Footer />
    </>
  );
}

export default App;
