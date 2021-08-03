import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import BG from '../images/ContactFormBG.png';
import styled from 'styled-components';
import { BoldP } from './LandingPage';
import emailjs from 'emailjs-com';

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

const ContactForm = () => {

    emailjs.init('user_p9KhvYfyjCaAGlO9YHuRf');

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 10 },
    };
    /* eslint-disable no-template-curly-in-string */
    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
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
            <Col span={24}>
                <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                    <Form.Item name={['user_name']} label="Name" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user_email']} label="Email" rules={[{ type: 'email', required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Phone Number"
                        name={'contact_number'}
                    >
                        <Input defaultValue={""}/>
                    </Form.Item>
                    <Form.Item name={['message']} label="Message" rules={[{ required: true }]}>
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </StyledRow>
    )
}

export default ContactForm;