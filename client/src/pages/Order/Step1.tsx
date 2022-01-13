import React, { FC } from 'react';
import styled from 'styled-components';
import { Form, Input, InputNumber } from 'antd';
import { useAppSelector } from '../../hooks/useAppSelector';
import Select from '../../components/Select';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { orderActions } from '../../store/slices/orderSlice';


const Step1: FC = () => {
    const dispatch = useAppDispatch()

    const { validateErrors } = useAppSelector(state => state.order)
    const { staticTables } = useAppSelector(state => state.order)
    
    const { currentOrder } = useAppSelector(state => state.order)


    return (
        <Container>
            <Form
                name="basic"
                labelCol={{ span: 9 }}
                wrapperCol={{ span: 5 }}
                size = "middle"              
            >   
                <Form.Item label="Номер заказа">
                    <Input  value={currentOrder.number} />
                </Form.Item>
                <Form.Item                    
                    label="Заказчик"
                    { ...validateErrors.customer && { help: validateErrors.customer, validateStatus: 'error'}}                    
                >
                    <Select 
                        items={staticTables.customers} 
                        value={currentOrder.customer} 
                        onChange={ (value) => dispatch(orderActions.setOrderFieldStr({fieldName: "customer", value}))}                       
                    />
                </Form.Item>
                <Form.Item 
                    label="Номер заказчика"
                    { ...validateErrors.numberCustomer && { help: validateErrors.numberCustomer, validateStatus: 'error'}}
                >
                    <Input  value={currentOrder.numberCustomer} onChange={(e)=> dispatch(orderActions.setOrderFieldStr({fieldName: "numberCustomer", value: e.target.value}))} />
                </Form.Item>

                <Form.Item 
                    label="Партийность"
                    { ...validateErrors.party && { help: validateErrors.party, validateStatus: 'error'}}
                >
                    <Select 
                        items={staticTables.parties} 
                        value={currentOrder.party} 
                        onChange={ (value) => dispatch(orderActions.setOrderFieldStr({fieldName: "party", value}))}                        
                    />
                </Form.Item>
                <Form.Item 
                    label="Упаковка"
                    { ...validateErrors.packaging && { help: validateErrors.packaging, validateStatus: 'error'}}
                >
                    <Select 
                        items={staticTables.packagings} 
                        value={currentOrder.packaging} 
                        onChange={ (value) => dispatch(orderActions.setOrderFieldStr({fieldName: "packaging", value}))}                        
                    />
                </Form.Item>
                
                <Form.Item 
                    label="Количество дверей"
                    { ...validateErrors.countDoors && { help: validateErrors.countDoors, validateStatus: 'error'}}
                >
                    <InputNumber min={0} value={currentOrder.countDoors} onChange={(value)=> dispatch(orderActions.setOrderFieldNum({fieldName: "countDoors", value}))} />
                </Form.Item>

                <Form.Item 
                    label="Стоимость одной двери"
                    { ...validateErrors.costDoor && { help: validateErrors.costDoor, validateStatus: 'error'}}
                >
                    <InputNumber min={0} value={currentOrder.costDoor} onChange={(value)=> dispatch(orderActions.setOrderFieldNum({fieldName: "costDoor", value}))} />
                </Form.Item>

                <Form.Item 
                    label="Примечание"
                    { ...validateErrors.note && { help: validateErrors.note, validateStatus: 'error'}}
                >
                    <Input.TextArea rows = {8}  value={currentOrder.note} onChange={(e)=> dispatch(orderActions.setOrderFieldStr({fieldName: "note", value: e.target.value}))} />
                </Form.Item>
            </Form>
        </Container>
    )
}

export default Step1

const Container = styled.div`
    
`;