import React, { FC } from 'react';
import styled from 'styled-components';
import { Divider, Form } from 'antd';
import { useAppSelector } from '../../hooks/useAppSelector';
import Select from '../../components/Select';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { 
    setParty 
} from '../../store/slices/orderSlice';


const Step4: FC = () => {
    const dispatch = useAppDispatch()

    const {
        parties
    } = useAppSelector(state => state.order)
    
    const {
        party
    } = useAppSelector(state => state.order.order)


    return (
        <Container>
            <Form
                name="basic"
                labelCol={{ span: 9 }}
                wrapperCol={{ span: 6 }}                
            >  
                <Divider>Наружная отделка</Divider>
                <Form.Item label="Отделка / Тип панели">
                    <Select 
                        items={parties} 
                        value={party} 
                        onChange={ (value) => dispatch(setParty(value))}                        
                    />
                </Form.Item>
                <Form.Item label="Элемент отделки / Фрезеровка">
                    <Select 
                        items={parties} 
                        value={party} 
                        onChange={ (value) => dispatch(setParty(value))}                        
                    />
                </Form.Item>
                <Form.Item label="Цвет пленки панели">
                    <Select 
                        items={parties} 
                        value={party} 
                        onChange={ (value) => dispatch(setParty(value))}                        
                    />
                </Form.Item>
                <Form.Item label="Патина на панели">
                    <Select 
                        items={parties} 
                        value={party} 
                        onChange={ (value) => dispatch(setParty(value))}                        
                    />
                </Form.Item>

                <Divider>Внутренняя отделка</Divider>
                <Form.Item label="Отделка / Тип панели">
                    <Select 
                        items={parties} 
                        value={party} 
                        onChange={ (value) => dispatch(setParty(value))}                        
                    />
                </Form.Item>
                <Form.Item label="Элемент отделки / Фрезеровка">
                    <Select 
                        items={parties} 
                        value={party} 
                        onChange={ (value) => dispatch(setParty(value))}                        
                    />
                </Form.Item>
                <Form.Item label="Цвет пленки панели">
                    <Select 
                        items={parties} 
                        value={party} 
                        onChange={ (value) => dispatch(setParty(value))}                        
                    />
                </Form.Item>
                <Form.Item label="Патина на панели">
                    <Select 
                        items={parties} 
                        value={party} 
                        onChange={ (value) => dispatch(setParty(value))}                        
                    />
                </Form.Item>
            </Form>
        </Container>
    )
}

export default Step4

const Container = styled.div`
    
`;