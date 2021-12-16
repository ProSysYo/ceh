import React, { FC } from 'react';
import styled from 'styled-components';
import { Checkbox, Form } from 'antd';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { orderActions } from '../../store/slices/orderSlice';


const Step6: FC = () => {
    const dispatch = useAppDispatch()

    const { order } = useAppSelector(state => state)    

    return (
        <Container>
            <Form
                name="basic"
                labelCol={{ span: 9 }}
                wrapperCol={{ span: 5 }}
                size = "middle"              
            >   
                <Form.Item label="Порог из нержавейки">
                    <Checkbox checked={order.order.isStainlessDoorStep} onChange={(e)=> dispatch(orderActions.setIsStainlessDoorStep(e.target.checked))} />
                </Form.Item>

                <Form.Item label="Уличная дверь">
                    <Checkbox checked={order.order.isStreetDoor} onChange={(e)=> dispatch(orderActions.setIsStreetDoor(e.target.checked))} />
                </Form.Item>

                <Form.Item label="Эксцентрик">
                    <Checkbox checked={order.order.isEccentric} onChange={(e)=> dispatch(orderActions.setIsEccentric(e.target.checked))} />
                </Form.Item>

                <Form.Item label="Задний лист">
                    <Checkbox checked={order.order.isBackSheet} onChange={(e)=> dispatch(orderActions.setIsBackSheet(e.target.checked))} />
                </Form.Item>

                <Form.Item label="Термокабель">
                    <Checkbox checked={order.order.isTermoCable} onChange={(e)=> dispatch(orderActions.setIsTermoCable(e.target.checked))} />
                </Form.Item>

                <Form.Item label="Доводчик">
                    <Checkbox checked={order.order.isCloser} onChange={(e)=> dispatch(orderActions.setIsCloser(e.target.checked))} />
                </Form.Item>

                <Form.Item label="Усиление под довочик">
                    <Checkbox checked={order.order.isEnhanceCloser} onChange={(e)=> dispatch(orderActions.setIsEnhanceCloser(e.target.checked))} />
                </Form.Item>

                <Form.Item label="Электромагнит">
                    <Checkbox checked={order.order.isElectromagnet} onChange={(e)=> dispatch(orderActions.setIsElectromagnet(e.target.checked))} />
                </Form.Item>

                <Form.Item label="Подсветка">
                    <Checkbox checked={order.order.isIllumination} onChange={(e)=> dispatch(orderActions.setIsIllumination(e.target.checked))} />
                </Form.Item>                
            </Form>
        </Container>
    )
}

export default Step6

const Container = styled.div`
    
`;