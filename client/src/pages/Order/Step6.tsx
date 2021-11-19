import React, { FC } from 'react';
import styled from 'styled-components';
import { Checkbox, Form } from 'antd';
import { useAppSelector } from '../../hooks/useAppSelector';
import Select from '../../components/Select';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { orderActions } from '../../store/slices/orderSlice';


const Step6: FC = () => {
    const dispatch = useAppDispatch()

    const {
        locationHinges
    } = useAppSelector(state => state.order)
    
    const {
        isStainlessDoorStep, locationHinge, isDouble, isStreetDoor, isEccentric, isBackSheet, isCloser, isEnhanceCloser
    } = useAppSelector(state => state.order.order)


    return (
        <Container>
            <Form
                name="basic"
                labelCol={{ span: 9 }}
                wrapperCol={{ span: 5 }}
                size = "middle"              
            >   
                <Form.Item label="Порог из нержавейки">
                    <Checkbox checked={isStainlessDoorStep} onChange={(e)=> dispatch(orderActions.setIsStainlessDoorStep(e.target.checked))} />
                </Form.Item>

                <Form.Item label="Уличная дверь">
                    <Checkbox checked={isStreetDoor} onChange={(e)=> dispatch(orderActions.setIsStreetDoor(e.target.checked))} />
                </Form.Item>

                <Form.Item label="Эксцентрик">
                    <Checkbox checked={isEccentric} onChange={(e)=> dispatch(orderActions.setIsEccentric(e.target.checked))} />
                </Form.Item>

                <Form.Item label="Задний лист">
                    <Checkbox checked={isBackSheet} onChange={(e)=> dispatch(orderActions.setIsBackSheet(e.target.checked))} />
                </Form.Item>

                <Form.Item label="Термокабель?">
                    <Checkbox checked={isDouble} onChange={(e)=> console.log(e)} />
                </Form.Item>

                <Form.Item label="Доводчик">
                    <Checkbox checked={isCloser} onChange={(e)=> dispatch(orderActions.setIsCloser(e.target.checked))} />
                </Form.Item>

                <Form.Item label="Усиление под довочик">
                    <Checkbox checked={isEnhanceCloser} onChange={(e)=> dispatch(orderActions.setIsEnhanceCloser(e.target.checked))} />
                </Form.Item>

                <Form.Item label="Электромагнит?">
                    <Checkbox checked={isDouble} onChange={(e)=> console.log(e)} />
                </Form.Item>

                <Form.Item label="Подсветка?">
                    <Checkbox checked={isDouble} onChange={(e)=> console.log(e)} />
                </Form.Item>

                <Form.Item label="Уплотнитель?">
                    <Select 
                        items={locationHinges} 
                        value={locationHinge} 
                        onChange={ (value) => dispatch(orderActions.setLocationHinge(value))}                        
                    />
                </Form.Item>
            </Form>
        </Container>
    )
}

export default Step6

const Container = styled.div`
    
`;