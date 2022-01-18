import { Button, Divider, Form, Input } from "antd";
import { FC } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { register } from '../../store/slices/authSlice';

const Register: FC = () => {
    const dispatch = useAppDispatch()

    const onFinish = async (values: any) => {
        await dispatch(register(values))
    };
    
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Container>
            <Form
                name="register"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
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