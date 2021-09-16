import React, { FC } from 'react';
import styled from 'styled-components';
import { Divider, Form } from 'antd';
import { useAppSelector } from '../../hooks/useAppSelector';
import Select from '../../components/Select';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { 
    setDecorationOutside,
    setParty, 
    setTypeDecorationInside 
} from '../../store/slices/orderSlice';
import { changeTypeDecorationOutside } from '../../store/actions/orderActions';


const Step4: FC = () => {
    const dispatch = useAppDispatch()

    const {
        parties, typeDecorationsOutside, typeDecorationsInside, decorationsOutside
    } = useAppSelector(state => state.order)
    
    const {
        party, typeDecorationOutside, typeDecorationInside, decorationOutside
    } = useAppSelector(state => state.order.order)


    return (
        <Container>
            <Form
                name="basic"
                labelCol={{ span: 9 }}
                wrapperCol={{ span: 7 }}                
            >  
                <Divider>Наружная отделка</Divider>
                <Form.Item label="Отделка / Тип панели">
                    <Select 
                        items={typeDecorationsOutside} 
                        value={typeDecorationOutside} 
                        onChange={ (value) => dispatch(changeTypeDecorationOutside(value))}                        
                    />
                </Form.Item>
                <Form.Item label="Элемент отделки / Фрезеровка">
                    <Select 
                        items={decorationsOutside} 
                        value={decorationOutside} 
                        onChange={ (value) => dispatch(setDecorationOutside(value))}                        
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
                        items={typeDecorationsInside} 
                        value={typeDecorationInside} 
                        onChange={ (value) => dispatch(setTypeDecorationInside(value))}                        
                    />
                </Form.Item>
                <Form.Item label="Элемент отделки / Фрезеровка">
                    <Select 
                        items={parties} 
                        value={typeDecorationInside} 
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