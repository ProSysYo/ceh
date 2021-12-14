import React, { FC } from 'react';
import styled from 'styled-components';
import { Form, Input, InputNumber } from 'antd';
import { useAppSelector } from '../../hooks/useAppSelector';
import Select from '../../components/Select';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { orderActions } from '../../store/slices/orderSlice';


const Step1: FC = () => {
    const dispatch = useAppDispatch()

    const {
        customers, parties, validateErrors
    } = useAppSelector(state => state.order)
    
    const {
        customer, numberCustomer, number, party, countDoors, costDoor, note
    } = useAppSelector(state => state.order.order)


    return (
        <Container>
            <Form
                name="basic"
                labelCol={{ span: 9 }}
                wrapperCol={{ span: 5 }}
                size = "middle"              
            >   
                <Form.Item label="Номер заказа">
                    <Input  value={number} />
                </Form.Item>
                <Form.Item                    
                    label="Заказчик"
                    { ...validateErrors.customer && { help: validateErrors.customer, validateStatus: 'error'}}                    
                >
                    <Select 
                        items={customers} 
                        value={customer} 
                        onChange={ (value) => dispatch(orderActions.setCustomer(value))}                       
                    />
                </Form.Item>
                <Form.Item 
                    label="Номер заказчика"
                    { ...validateErrors.numberCustomer && { help: validateErrors.numberCustomer, validateStatus: 'error'}}
                >
                    <Input  value={numberCustomer} onChange={(e)=> dispatch(orderActions.setNumberCustomer(e.target.value))} />
                </Form.Item>

                <Form.Item 
                    label="Партийность"
                    { ...validateErrors.party && { help: validateErrors.party, validateStatus: 'error'}}
                >
                    <Select 
                        items={parties} 
                        value={party} 
                        onChange={ (value) => dispatch(orderActions.setParty(value))}                        
                    />
                </Form.Item>
                
                <Form.Item 
                    label="Количество дверей"
                    { ...validateErrors.countDoors && { help: validateErrors.countDoors, validateStatus: 'error'}}
                >
                    <InputNumber min={0} value={countDoors} onChange={(value)=> dispatch(orderActions.setCountDoors(value))} />
                </Form.Item>

                <Form.Item 
                    label="Стоимость одной двери"
                    { ...validateErrors.costDoor && { help: validateErrors.costDoor, validateStatus: 'error'}}
                >
                    <InputNumber min={0} value={costDoor} onChange={(value)=> dispatch(orderActions.setCostDoor(value))} />
                </Form.Item>

                <Form.Item 
                    label="Примечание"
                    { ...validateErrors.note && { help: validateErrors.note, validateStatus: 'error'}}
                >
                    <Input.TextArea rows = {8}  value={note} onChange={(e)=> dispatch(orderActions.setNote(e.target.value))} />
                </Form.Item>
            </Form>
        </Container>
    )
}

export default Step1

const Container = styled.div`
    
`;