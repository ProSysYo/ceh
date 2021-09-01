import React, { FC } from 'react';
import styled from 'styled-components';
import { Form } from 'antd';
import { useAppSelector } from '../../hooks/useAppSelector';
import Select from '../../components/Select';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { 
    setCustomer
} from '../../store/slices/orderSlice';


const Step3: FC = () => {
    const dispatch = useAppDispatch()

    const {
        customers
    } = useAppSelector(state => state.order)
    
    const {
        customer
    } = useAppSelector(state => state.order.order)


    return (
        <Container>
            <Form
                name="basic"
                labelCol={{ span: 9 }}
                wrapperCol={{ span: 6 }}                
            >                   
                <Form.Item label="Основной замок">
                    <Select 
                        items={customers} 
                        value={customer} 
                        onChange={ (value) => dispatch(setCustomer(value))}                       
                    />
                </Form.Item>                
            </Form>
        </Container>
    )
}

export default Step3

const Container = styled.div`
    
`;