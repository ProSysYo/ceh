import React, { FC } from 'react';
import styled from 'styled-components';
import { Checkbox, Form } from 'antd';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { orderActions } from '../../store/slices/orderSlice';


const Step7: FC = () => {
    const dispatch = useAppDispatch()

    const { currentOrder } = useAppSelector(state => state.order)    

    return (
        <Container>
            <Form
                name="basic"
                labelCol={{ span: 9 }}
                wrapperCol={{ span: 5 }}
                size = "middle"              
            >   
                <Form.Item label="Порог из нержавейки">
                    <Checkbox checked={currentOrder.isStainlessDoorStep} onChange={(e)=> dispatch(orderActions.setOrderFieldBool({fieldName: "isStainlessDoorStep", value: e.target.checked}))} />
                </Form.Item>

                <Form.Item label="Эксцентрик">
                    <Checkbox checked={currentOrder.isEccentric} onChange={(e)=> dispatch(orderActions.setOrderFieldBool({fieldName: "isEccentric", value: e.target.checked}))} />
                </Form.Item>

                <Form.Item label="Задний лист">
                    <Checkbox checked={currentOrder.isBackSheet} onChange={(e)=> dispatch(orderActions.setOrderFieldBool({fieldName: "isBackSheet", value: e.target.checked}))} />
                </Form.Item>

                <Form.Item label="Термокабель">
                    <Checkbox checked={currentOrder.isTermoCable} onChange={(e)=> dispatch(orderActions.setOrderFieldBool({fieldName: "isTermoCable", value: e.target.checked}))} />
                </Form.Item>

                <Form.Item label="Доводчик">
                    <Checkbox checked={currentOrder.isCloser} onChange={(e)=> dispatch(orderActions.setOrderFieldBool({fieldName: "isCloser", value: e.target.checked}))} />
                </Form.Item>

                <Form.Item label="Усиление под довочик">
                    <Checkbox checked={currentOrder.isEnhanceCloser} onChange={(e)=> dispatch(orderActions.setOrderFieldBool({fieldName: "isEnhanceCloser", value: e.target.checked}))} />
                </Form.Item>

                <Form.Item label="Электромагнит">
                    <Checkbox checked={currentOrder.isElectromagnet} onChange={(e)=> dispatch(orderActions.setOrderFieldBool({fieldName: "isElectromagnet", value: e.target.checked}))} />
                </Form.Item>

                <Form.Item label="Подсветка">
                    <Checkbox checked={currentOrder.isIllumination} onChange={(e)=> dispatch(orderActions.setOrderFieldBool({fieldName: "isIllumination", value: e.target.checked}))} />
                </Form.Item>

                <Form.Item label="Шумоизоляция">
                    <Checkbox checked={currentOrder.isNoise} onChange={(e)=> dispatch(orderActions.setOrderFieldBool({fieldName: "isNoise", value: e.target.checked}))} />
                </Form.Item>              
            </Form>
        </Container>
    )
}

export default Step7

const Container = styled.div`
    
`;