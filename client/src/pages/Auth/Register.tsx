import { Button, Divider, Form, Input } from "antd";
import { FC } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { register } from '../../store/slices/authSlice';

const Register: FC = () => {
    const dispatch = useAppDispatch()
    const [form] = Form.useForm();

    const onFinish = async (values: any) => {
        const res = await dispatch(register(values)).unwrap()
        if (res) {
            form.resetFields();
        }        
    };
    
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Container>
            <Form
                name="register"
                form={form}
                labelCol={{ span: 11 }}
                wrapperCol={{ span: 13 }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                >
                <Divider>Регистрация</Divider>    
                <Form.Item
                    label="Логин"
                    name="login"
                    rules={[{ required: true, message: 'Введите логин' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Имя пользователя"
                    name="name"
                    rules={[{ required: true, message: 'Введите имя пользователя' }]}
                >
                    <Input />
                </Form.Item>
                
                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[{ required: true, message: 'Введите пароль' }]}
                >
                    <Input.Password />
                </Form.Item>                

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">Зарегистрировать</Button>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Link to="/login">Перейти к авторизации</Link>
                </Form.Item>
            </Form>
        </Container>
    )
}

export default Register;

const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
`