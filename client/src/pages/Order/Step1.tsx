import React, { FC } from 'react';
import styled from 'styled-components';
import { Form, Input, InputNumber } from 'antd';
import { useAppSelector } from '../../hooks/useAppSelector';
import Select from '../../components/Select';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { 
    setCostDoor,
    setCountDoors,
    setCustomer, setNote, setNumberCustomer, setParty 
} from '../../store/slices/orderSlice';


const Step1: FC = () => {
    const dispatch = useAppDispatch()

    const {
        customers, parties
    } = useAppSelector(state => state.order)
    
    const {
        customer, numberCustomer, number, party, countDoors, costDoor, note
    } = useAppSelector(state => state.order.order)


    return (
        <Container>
            <Form
                name="basic"
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 5 }}
                size = "small"              
            >   
                <Form.Item label="Номер заказа">
                    <Input  value={number} />
                </Form.Item>
                <Form.Item label="Заказчик">
                    <Select 
                        items={customers} 
                        value={customer} 
                        onChange={ (value) => dispatch(setCustomer(value))}                       
                    />
                </Form.Item>
                <Form.Item label="Номер заказчика">
                    <Input  value={numberCustomer} onChange={(e)=> dispatch(setNumberCustomer(e.target.value))} />
                </Form.Item>

                <Form.Item label="Партийность">
                    <Select 
                        items={parties} 
                        value={party} 
                        onChange={ (value) => dispatch(setParty(value))}                        
                    />
                </Form.Item>
                
                <Form.Item label="Количество дверей">
                    <InputNumber min={0} value={countDoors} onChange={(value)=> dispatch(setCountDoors(value))} />
                </Form.Item>

                <Form.Item label="Стоимость одной двери">
                    <InputNumber min={0} value={costDoor} onChange={(value)=> dispatch(setCostDoor(value))} />
                </Form.Item>

                <Form.Item label="Примечание">
                    <Input.TextArea rows = {8}  value={note} onChange={(e)=> dispatch(setNote(e.target.value))} />
                </Form.Item>
            </Form>
        </Container>
    )
}

export default Step1

const Container = styled.div`
    
`;