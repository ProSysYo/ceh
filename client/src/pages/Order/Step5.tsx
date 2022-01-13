import React, { FC } from 'react';
import styled from 'styled-components';
import { Divider, Form } from 'antd';
import { useAppSelector } from '../../hooks/useAppSelector';
import Select from '../../components/Select';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { orderActions } from '../../store/slices/orderSlice';

const Step5: FC = () => {
    const dispatch = useAppDispatch()

    const { currentOrder } = useAppSelector(state => state.order)
    const { staticTables } = useAppSelector(state => state.order)
    const { computedTables } = useAppSelector(state => state.order)
    const { block } = useAppSelector(state => state.order)
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
                        items={computedTables.typeDecorationsOutside} 
                        value={currentOrder.typeDecorationOutside} 
                        onChange={ (value) => dispatch(orderActions.setTypeDecorationOutside(value))}                        
                    />
                </Form.Item>
                <Form.Item 
                    label="Элемент отделки / Фрезеровка"
                    { ...validateErrors.decorationOutside && { help: validateErrors.decorationOutside, validateStatus: 'error'}}
                >
                    <Select 
                        items={computedTables.decorationsOutside} 
                        value={currentOrder.decorationOutside} 
                        onChange={ (value) => dispatch(orderActions.setOrderFieldStr({fieldName: "decorationOutside", value}))}                        
                    />
                </Form.Item>
                <Form.Item 
                    label="Цвет пленки панели"
                    { ...validateErrors.wrapOutside && { help: validateErrors.wrapOutside, validateStatus: 'error'}}
                >
                    <Select 
                        items={staticTables.wraps} 
                        value={currentOrder.wrapOutside}
                        disabled={!block.isWrapOutside} 
                        onChange={ (value) => dispatch(orderActions.setOrderFieldStr({fieldName: "wrapOutside", value}))}                        
                    />
                </Form.Item>
                <Form.Item 
                    label="Патина на панели"
                    { ...validateErrors.patinaOutside && { help: validateErrors.patinaOutside, validateStatus: 'error'}}
                >
                    <Select 
                        items={staticTables.patinas} 
                        value={currentOrder.patinaOutside} 
                        disabled={!block.isPatinaOutside} 
                        onChange={ (value) => dispatch(orderActions.setOrderFieldStr({fieldName: "patinaOutside", value}))}                        
                    />
                </Form.Item>

                <Divider>Внутренняя отделка</Divider>
                <Form.Item 
                    label="Отделка / Тип панели*"
                    { ...validateErrors.typeDecorationInside && { help: validateErrors.typeDecorationInside, validateStatus: 'error'}}
                >
                    <Select 
                        items={computedTables.typeDecorationsInside} 
                        value={currentOrder.typeDecorationInside} 
                        onChange={ (value) => dispatch(orderActions.setTypeDecorationInside(value))}                        
                    />
                </Form.Item>
                <Form.Item 
                    label="Элемент отделки / Фрезеровка"
                    { ...validateErrors.decorationInside && { help: validateErrors.decorationInside, validateStatus: 'error'}}
                >
                    <Select 
                        items={computedTables.decorationsInside} 
                        value={currentOrder.decorationInside} 
                        onChange={ (value) => dispatch(orderActions.setOrderFieldStr({fieldName: "decorationInside", value}))}                        
                    />
                </Form.Item>
                <Form.Item 
                    label="Цвет пленки панели"
                    { ...validateErrors.wrapInside && { help: validateErrors.wrapInside, validateStatus: 'error'}}
                >
                    <Select 
                        items={staticTables.wraps} 
                        value={currentOrder.wrapInside} 
                        disabled={!block.isWrapInside}
                        onChange={ (value) => dispatch(orderActions.setOrderFieldStr({fieldName: "wrapInside", value}))}                        
                    />
                </Form.Item>
                <Form.Item 
                    label="Патина на панели"
                    { ...validateErrors.patinaInside && { help: validateErrors.patinaInside, validateStatus: 'error'}}
                >
                    <Select 
                        items={staticTables.patinas} 
                        value={currentOrder.patinaInside}
                        disabled={!block.isPatinaInside}
                        onChange={ (value) => dispatch(orderActions.setOrderFieldStr({fieldName: "patinaInside", value}))}                        
                    />
                </Form.Item>  

                <Divider>Наличник</Divider> 
                <Form.Item 
                    label="Наличник"
                    { ...validateErrors.jamb && { help: validateErrors.jamb, validateStatus: 'error'}}
                >
                    <Select 
                        items={computedTables.currentJambs} 
                        value={currentOrder.jamb}
                        onChange={ (value) => dispatch(orderActions.setOrderFieldStr({fieldName: "jamb", value}))}                        
                    />
                </Form.Item>

                <Form.Item 
                    label="Цвет пленки наличника"
                    { ...validateErrors.jambWrap && { help: validateErrors.jambWrap, validateStatus: 'error'}}
                >
                    <Select 
                        items={staticTables.wraps} 
                        value={currentOrder.jambWrap} 
                        disabled={!block.isJambWrap}
                        onChange={ (value) => dispatch(orderActions.setOrderFieldStr({fieldName: "jambWrap", value}))}                        
                    />
                </Form.Item>              
            </Form>
        </Container>
    )
}

export default Step5

const Container = styled.div`
    
`;