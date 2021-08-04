import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import BG from '../images/ContactFormBG.png';
import styled from 'styled-components';
import { BoldP, CenteredCol } from './LandingPage';
import emailjs from 'emailjs-com';
import { ReactComponent as Send } from '../icons/Send.svg';

const StyledRow = styled(Row)`
display: flex;
height: 80vh;
width: 41vw;
background-image: url(${BG});
background-size: cover;
justify-content: center;
`;

const HeaderCol = styled(Col)`
text-shadow: 0px 0px 20px #A99060;
text-align: center;
color: #FCFEFB;
font-size: 1.5rem;
display: inline;
margin: 1rem 0 0 0;
height: 5rem;
`

const StyledP = styled.p`
color: #0F121A;
margin:  0 0 0 0;
`

const FormCol = styled(CenteredCol)`
align-items: baseline;
margin-top: -1rem;
label{
    font-size: 18px!important;
}
`

const StyledInput = styled(Input)`
border-width: 0 0 1px 0;
border-color: #0F121A;
`

const StyledInputTextArea = styled(Input.TextArea)`
border-width: 0 0 1px 0;
border-color: #0F121A;
`

const StyledButton = styled(Button)`
transition: box-shadow 1s, border-color 1s;
width: 10rem;
margin-top: 1rem;
border-color: #0F121A;
background-color: #FFFFFF;
color: #0F121A;
box-shadow: inset 0 0 0 0.1px #A99060;
display: block;
overflow: hidden;
&:hover{
    background-color: #FFFFFF;
    box-shadow: inset 400px 0 0 0.1px #A99060;
    transition: box-shadow 2s, border-color 0.5s;
    transform-origin: left;
    border-color: #A99060;
    cursor: pointer;
  }

  svg {
    margin-left: -12rem;
    transition: margin-left 1s;
  }

  p{
    margin-top: -2.2rem;
    margin-left: 0;
    transition: margin-left 2s;
    font-size: 1.3rem;
    align-self: center;
    margin-right: 0rem;
    }
    
    &:hover p{
      margin-left: 9.375rem;
      transition: margin-left 1s;
    }
    
    &:hover svg{
      margin-left: 0;
      transition: margin-left 1s;
      z-index:3;
    }
`

const ContactForm = () => {

    emailjs.init('user_p9KhvYfyjCaAGlO9YHuRf');

    /* eslint-disable no-template-curly-in-string */
    const validateMessages = {
        required: 'The field is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
    };
    /* eslint-enable no-template-curly-in-string */
    const onFinish = (values) => {
        emailjs.send("service_qe0c6yi", "template_ioxixne", values)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });
    };

    return (
        <StyledRow>
            <HeaderCol span={24}>
                <StyledP>Don't be shy!</StyledP>
                <StyledP>Feel <BoldP>at home</BoldP> and write to us!</StyledP>
            </HeaderCol>
            <FormCol style={{ alignItems: 'top' }} span={24}>
                <Form style={{ width: '60%' }} layout={'vertical'} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                    <Form.Item label={'Your name'} name={['user_name']} rules={[{ required: true }]}>
                        <StyledInput size={'large'} />
                    </Form.Item>
                    <Form.Item label={'Your email'} name={['user_email']} rules={[{ type: 'email', required: true }]}>
                        <StyledInput size={'large'} />
                    </Form.Item>
                    <Form.Item
                        name={'contact_number'}
                        label={'Your 10 digit phone number'}
                    >
                        <StyledInput size={'large'} defaultValue={""} />
                    </Form.Item>
                    <Form.Item label={'What would you like to say to us?'} name={['message']} rules={[{ required: true }]}>
                        <StyledInputTextArea rows={4} size={'large'} />
                    </Form.Item>
                    <Form.Item>
                        <Row style={{width: '100%', justifyContent: 'center'}}><Col>
                            <StyledButton type="primary" htmlType="submit" shape="round" size="large">
                            <Send/>
                            <p>Send it!</p>
                            </StyledButton>
                        </Col></Row>
                    </Form.Item>
                </Form>
            </FormCol>
        </StyledRow>
    )
}

export default ContactForm;