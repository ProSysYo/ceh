import React, { FC } from 'react';
import styled from 'styled-components';
import { Form, Input, InputNumber } from 'antd';
import { useAppSelector } from '../../hooks/useAppSelector';
import Select from '../../components/Select';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { 
    setCustomer, setNumberCustomer, setParty 
} from '../../store/slices/orderSlice';


const Step1: FC = () => {
    const dispatch = useAppDispatch()

    const {
        customers, parties
    } = useAppSelector(state => state.order)
    
    const {
        customer, numberCustomer, number, party
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
                
                <Form.Item label="Количество дверей???">
                    <InputNumber  value={""} onChange={(value)=> console.log(value)} />
                </Form.Item>

                <Form.Item label="Стоимость одной двери???">
                    <InputNumber  value={""} onChange={(value)=> console.log(value)} />
                </Form.Item>

                <Form.Item label="Примечание???">
                    <Input.TextArea rows = {8}  value={numberCustomer} onChange={(e)=> dispatch(setNumberCustomer(e.target.value))} />
                </Form.Item>
            </Form>
        </Container>
    )
}

export default Step1

const Container = styled.div`
    
`;