import React, { FC } from 'react';
import styled from 'styled-components';
import { Divider, Form } from 'antd';
import { useAppSelector } from '../../hooks/useAppSelector';
import Select from '../../components/Select';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { orderActions } from '../../store/slices/orderSlice';

const Step4: FC = () => {
    const dispatch = useAppDispatch()

    const { order } = useAppSelector(state => state)
    const { validateErrors } = useAppSelector(state => state.order)

    return (
        <Container>
            <Form
                name="basic"
                labelCol={{ span: 9 }}
                wrapperCol={{ span: 5 }}   
                size = "middle"              
            >  
                <Divider>Наружная отделка</Divider>
                <Form.Item 
                    label="Отделка / Тип панели*"
                    { ...validateErrors.typeDecorationOutside && { help: validateErrors.typeDecorationOutside, validateStatus: 'error'}}
                >
                    <Select 
                        items={order.typeDecorationsOutside} 
                        value={order.order.typeDecorationOutside} 
                        onChange={ (value) => dispatch(orderActions.setTypeDecorationOutside(value))}                        
                    />
                </Form.Item>
                <Form.Item 
                    label="Элемент отделки / Фрезеровка"
                    { ...validateErrors.decorationOutside && { help: validateErrors.decorationOutside, validateStatus: 'error'}}
                >
                    <Select 
                        items={order.decorationsOutside} 
                        value={order.order.decorationOutside} 
                        onChange={ (value) => dispatch(orderActions.setDecorationOutside(value))}                        
                    />
                </Form.Item>
                <Form.Item 
                    label="Цвет пленки панели"
                    { ...validateErrors.wrapOutside && { help: validateErrors.wrapOutside, validateStatus: 'error'}}
                >
                    <Select 
                        items={order.wraps} 
                        value={order.order.wrapOutside}
                        disabled={!order.isWrapOutside} 
                        onChange={ (value) => dispatch(orderActions.setWrapOutside(value))}                        
                    />
                </Form.Item>
                <Form.Item 
                    label="Патина на панели"
                    { ...validateErrors.patinaOutside && { help: validateErrors.patinaOutside, validateStatus: 'error'}}
                >
                    <Select 
                        items={order.patinas} 
                        value={order.order.patinaOutside} 
                        disabled={!order.isPatinaOutside} 
                        onChange={ (value) => dispatch(orderActions.setPatinaOutside(value))}                        
                    />
                </Form.Item>

                <Divider>Внутренняя отделка</Divider>
                <Form.Item 
                    label="Отделка / Тип панели*"
                    { ...validateErrors.typeDecorationInside && { help: validateErrors.typeDecorationInside, validateStatus: 'error'}}
                >
                    <Select 
                        items={order.typeDecorationsInside} 
                        value={order.order.typeDecorationInside} 
                        onChange={ (value) => dispatch(orderActions.setTypeDecorationInside(value))}                        
                    />
                </Form.Item>
                <Form.Item 
                    label="Элемент отделки / Фрезеровка"
                    { ...validateErrors.decorationInside && { help: validateErrors.decorationInside, validateStatus: 'error'}}
                >
                    <Select 
                        items={order.decorationsInside} 
                        value={order.order.decorationInside} 
                        onChange={ (value) => dispatch(orderActions.setDecorationInside(value))}                        
                    />
                </Form.Item>
                <Form.Item 
                    label="Цвет пленки панели"
                    { ...validateErrors.wrapInside && { help: validateErrors.wrapInside, validateStatus: 'error'}}
                >
                    <Select 
                        items={order.wraps} 
                        value={order.order.wrapInside} 
                        disabled={!order.isWrapInside}
                        onChange={ (value) => dispatch(orderActions.setWrapInside(value))}                        
                    />
                </Form.Item>
                <Form.Item 
                    label="Патина на панели"
                    { ...validateErrors.patinaInside && { help: validateErrors.patinaInside, validateStatus: 'error'}}
                >
                    <Select 
                        items={order.patinas} 
                        value={order.order.patinaInside}
                        disabled={!order.isPatinaInside}
                        onChange={ (value) => dispatch(orderActions.setPatinaInside(value))}                        
                    />
                </Form.Item>  

                <Divider>Наличник</Divider> 
                <Form.Item 
                    label="Наличник"
                    { ...validateErrors.jamb && { help: validateErrors.jamb, validateStatus: 'error'}}
                >
                    <Select 
                        items={order.currentJambs} 
                        value={order.order.jamb}
                        onChange={ (value) => dispatch(orderActions.setJamb(value))}                        
                    />
                </Form.Item>

                <Form.Item 
                    label="Цвет пленки наличника"
                    { ...validateErrors.jambWrap && { help: validateErrors.jambWrap, validateStatus: 'error'}}
                >
                    <Select 
                        items={order.wraps} 
                        value={order.order.jambWrap} 
                        disabled={!order.isJambWrap}
                        onChange={ (value) => dispatch(orderActions.setJambWrap(value))}                        
                    />
                </Form.Item>              
            </Form>
        </Container>
    )
}

export default Step4

const Container = styled.div`
    
`;