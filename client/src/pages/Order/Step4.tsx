import React, { FC } from 'react';
import styled from 'styled-components';
import { Divider, Form } from 'antd';
import { useAppSelector } from '../../hooks/useAppSelector';
import Select from '../../components/Select';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { 
    setDecorationOutside,
    setPatinaOutside,
    setParty,     
    setWrapInside, 
    setWrapOutside
} from '../../store/slices/orderSlice';
import { changeTypeDecorationInside, changeTypeDecorationOutside } from '../../store/actions/orderActions';


const Step4: FC = () => {
    const dispatch = useAppDispatch()

    const {
        parties, typeDecorationsOutside, typeDecorationsInside, decorationsOutside, wraps, isWrapInside, isWrapOutside, isPatinaOutside,
        patinas, 
    } = useAppSelector(state => state.order)
    
    const {
        party, typeDecorationOutside, typeDecorationInside, decorationOutside, wrapOutside, wrapInside, patinaOutside
    } = useAppSelector(state => state.order.order)


    return (
        <Container>
            <Form
                name="basic"
                labelCol={{ span: 9 }}
                wrapperCol={{ span: 7 }}                
            >  
                <Divider>Наружная отделка</Divider>
                <Form.Item label="Отделка / Тип панели*">
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
                        items={wraps} 
                        value={wrapOutside}
                        disabled={!isWrapOutside} 
                        onChange={ (value) => dispatch(setWrapOutside(value))}                        
                    />
                </Form.Item>
                <Form.Item label="Патина на панели">
                    <Select 
                        items={patinas} 
                        value={patinaOutside} 
                        disabled={!isPatinaOutside} 
                        onChange={ (value) => dispatch(setPatinaOutside(value))}                        
                    />
                </Form.Item>

                <Divider>Внутренняя отделка</Divider>
                <Form.Item label="Отделка / Тип панели*">
                    <Select 
                        items={typeDecorationsInside} 
                        value={typeDecorationInside} 
                        onChange={ (value) => dispatch(changeTypeDecorationInside(value))}                        
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
                        items={wraps} 
                        value={wrapInside} 
                        disabled={!isWrapInside}
                        onChange={ (value) => dispatch(setWrapInside(value))}                        
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