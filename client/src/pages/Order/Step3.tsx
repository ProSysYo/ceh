import React, { FC } from 'react';
import styled from 'styled-components';
import { Form } from 'antd';
import { useAppSelector } from '../../hooks/useAppSelector';
import Select from '../../components/Select';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { 
    setBaseLock,    
} from '../../store/slices/orderSlice';


const Step3: FC = () => {
    const dispatch = useAppDispatch()

    const {
        baseLocks
    } = useAppSelector(state => state.order)
    
    const {
        baseLock
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
                        items={baseLocks} 
                        value={baseLock} 
                        onChange={ (value) => dispatch(setBaseLock(value))}                       
                    />
                </Form.Item>                
            </Form>
        </Container>
    )
}

export default Step3

const Container = styled.div`
    
`;