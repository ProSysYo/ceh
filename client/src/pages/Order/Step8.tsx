import React, { FC } from 'react';
import styled from 'styled-components';
import { Checkbox, Col, Divider, Form, Row } from 'antd';
import { useAppSelector } from '../../hooks/useAppSelector';
import Select from '../../components/Select';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { orderActions } from '../../store/slices/orderSlice';


const Step8: FC = () => {
    const dispatch = useAppDispatch()

    const { staticTables } = useAppSelector(state => state.order)      
    const { currentOrder } = useAppSelector(state => state.order)
    const { validateErrors } = useAppSelector(state => state.order)

    return (
        <Container>
            <Form
                name="basic"
                labelCol={{ span: 12 }}
                wrapperCol={{ span: 12 }}
                size = "middle"                 
            >   
                <Divider >Полка левая</Divider>                
                <Row gutter={12}>
                    <Col span={8}>                
                        <Form.Item 
                            label="Тип полки"
                            { ...validateErrors.typePolkaLeft && { help: validateErrors.typePolkaLeft, validateStatus: 'error'}}
                        >
                            <Select 
                                items={staticTables.typePolkas} 
                                value={currentOrder.typePolkaLeft} 
                                onChange={ (value) => dispatch(orderActions.setOrderFieldStr({fieldName: "typePolkaLeft", value}))}                        
                            />
                        </Form.Item>
                    </Col>
                    
                    <Col span={8}> 
                        <Form.Item label="Ковка">
                            <Checkbox checked={currentOrder.isForgePolkaLeft} onChange={(e)=> dispatch(orderActions.setOrderFieldBool({fieldName: "isForgePolkaLeft", value: e.target.checked}))} />
                        </Form.Item>
                    </Col>

                    <Col span={8}>
                        <Form.Item label="Стеклопакет">
                            <Checkbox checked={currentOrder.isGlassPolkaLeft} onChange={(e)=> dispatch(orderActions.setOrderFieldBool({fieldName: "isGlassPolkaLeft", value: e.target.checked}))} />
                        </Form.Item>                 
                    </Col>
                </Row>

                <Divider>Полка правая</Divider>
                <Row gutter={12}>
                    <Col span={8}>                
                        <Form.Item 
                            label="Тип полки"
                            { ...validateErrors.typePolkaRight && { help: validateErrors.typePolkaRight, validateStatus: 'error'}}
                        >
                            <Select 
                                items={staticTables.typePolkas} 
                                value={currentOrder.typePolkaRight} 
                                onChange={ (value) => dispatch(orderActions.setOrderFieldStr({fieldName: "typePolkaRight", value}))}                        
                            />
                        </Form.Item>
                    </Col>
                    
                    <Col span={8}> 
                        <Form.Item label="Ковка">
                            <Checkbox checked={currentOrder.isForgePolkaRight} onChange={(e)=> dispatch(orderActions.setOrderFieldBool({fieldName: "isForgePolkaRight", value: e.target.checked}))} />
                        </Form.Item>
                    </Col>

                    <Col span={8}>
                        <Form.Item label="Стеклопакет">
                            <Checkbox checked={currentOrder.isGlassPolkaRight} onChange={(e)=> dispatch(orderActions.setOrderFieldBool({fieldName: "isGlassPolkaRight", value: e.target.checked}))} />
                        </Form.Item>                 
                    </Col>
                </Row>

                <Divider>Фрамуга</Divider>
                <Row gutter={12}>
                    <Col span={6}>                
                        <Form.Item 
                            label="Исполнение"
                            { ...validateErrors.executionFramuga && { help: validateErrors.executionFramuga, validateStatus: 'error'}}
                        >
                            <Select 
                                items={staticTables.executionFramugas} 
                                value={currentOrder.executionFramuga} 
                                onChange={ (value) => dispatch(orderActions.setOrderFieldStr({fieldName: "executionFramuga", value}))}                        
                            />
                        </Form.Item>
                    </Col>
                    <Col span={6}>                
                        <Form.Item 
                            label="Тип фрамуги"
                            { ...validateErrors.typeFramuga && { help: validateErrors.typeFramuga, validateStatus: 'error'}}
                        >
                            <Select 
                                items={staticTables.typeFramugas} 
                                value={currentOrder.typeFramuga} 
                                onChange={ (value) => dispatch(orderActions.setOrderFieldStr({fieldName: "typeFramuga", value}))}                        
                            />
                        </Form.Item>
                    </Col>
                    
                    <Col span={6}> 
                        <Form.Item label="Ковка">
                            <Checkbox checked={currentOrder.isForgeFramuga} onChange={(e)=> dispatch(orderActions.setOrderFieldBool({fieldName: "isForgeFramuga", value: e.target.checked}))} />
                        </Form.Item>
                    </Col>

                    <Col span={6}>
                        <Form.Item label="Стеклопакет">
                            <Checkbox checked={currentOrder.isGlassFramuga} onChange={(e)=> dispatch(orderActions.setOrderFieldBool({fieldName: "isGlassFramuga", value: e.target.checked}))} />
                        </Form.Item>                 
                    </Col>
                </Row>                             
            </Form>
        </Container>
    )
}

export default Step8

const Container = styled.div`
    
`;