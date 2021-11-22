import React, { FC } from 'react';
import styled from 'styled-components';
import { Col, Divider, Form, InputNumber, Row } from 'antd';
import { useAppSelector } from '../../hooks/useAppSelector';
import Select from '../../components/Select';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { orderActions } from '../../store/slices/orderSlice';
import Checkbox from 'antd/lib/checkbox/Checkbox';


const Step2: FC = () => {
    const dispatch = useAppDispatch()

    const { order } = useAppSelector(state => state)
        
    return (
        <Container>
            <Form
                name="basic"                
                size = "middle"
                labelCol={{ span: 12 }}
                wrapperCol={{ span: 12 }}                                           
            >
            <Divider >Конфигураци модели</Divider>           
            <Row gutter={24} >
                <Col span={12}>                    
                    <Form.Item label="Модель двери*">
                        <Select 
                            items={order.models} 
                            value={order.order.model} 
                            onChange={ (value) => dispatch(orderActions.setModel(value))}                       
                        />
                    </Form.Item>

                    <Form.Item label="Количество контуров">
                        <Select 
                            items={order.contours} 
                            value={order.order.contour} 
                            onChange={ (value) => dispatch(orderActions.setContour(value))}                        
                        />
                    </Form.Item>

                    <Form.Item label="Толщина полотна">
                        <Select 
                            items={order.doorThicks} 
                            value={order.order.doorThick} 
                            onChange={ (value) => dispatch(orderActions.setDoorThick(value))}                        
                        />
                    </Form.Item>
                    <Form.Item label="Модель коробки">
                        <Select 
                            items={order.modelBoxes} 
                            value={order.order.modelBox} 
                            onChange={ (value) => dispatch(orderActions.setModelBox(value))}                        
                        />
                    </Form.Item>

                    <Form.Item label="Тип открывания*">
                        <Select 
                            items={order.openingTypes} 
                            value={order.order.openingType} 
                            onChange={ (value) => dispatch(orderActions.setOpeningType(value))}                        
                        />
                    </Form.Item>
                </Col>
                <Col span={12}> 
                    <Form.Item>                   
                        <Checkbox checked={order.order.isDouble} onChange={(e)=> dispatch(orderActions.setIsDouble(e.target.checked))} >Двустворчатая</Checkbox>
                    </Form.Item>
                    <Form.Item label="Высота двери">
                        <InputNumber  value={order.order.height} onChange={(value)=> dispatch(orderActions.setHeight(value))} />
                    </Form.Item>

                    <Form.Item label="Ширина двери">
                        <InputNumber  value={order.order.width} onChange={(value)=> dispatch(orderActions.setWidth(value))} />
                    </Form.Item>
                    <Form.Item label="Ширина раб. створки">
                        <InputNumber disabled={!order.order.isDouble} value={order.order.widthDouble} onChange={(value)=> dispatch(orderActions.setWidthDouble(value))} />
                    </Form.Item>
                </Col>
            </Row>

            <Divider >Петли</Divider>                
            <Row gutter={12}>
                <Col span={8}>                
                    <Form.Item label="Расположение петель">
                        <Select 
                            items={order.locationHinges} 
                            value={order.order.locationHinge} 
                            onChange={ (value) => dispatch(orderActions.setLocationHinge(value))}                        
                        />
                    </Form.Item>
                </Col>
                
                <Col span={8}> 
                    <Form.Item label="Тип петель">
                        <Select 
                            items={order.typeHinges} 
                            value={order.order.typeHinge} 
                            onChange={ (value) => dispatch(orderActions.setTypeHinge(value))}                        
                        />
                    </Form.Item>
                </Col>

                <Col span={8}>
                    <Form.Item label="Количество петель">
                        <Select 
                            items={order.hingeCounts} 
                            value={order.order.countHinge} 
                            onChange={ (value) => dispatch(orderActions.setCountHinge(value))}                        
                        />
                    </Form.Item>                    
                </Col>
            </Row> 

            <Divider >Толщина металла</Divider>    
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item label="Толщина металла полотна">
                        <Select 
                            items={order.thickMetalLeafs} 
                            value={order.order.thickMetalLeaf} 
                            onChange={ (value) => dispatch(orderActions.setThickMetalLeaf(value))}                        
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label="Толщина металла короба">
                        <Select 
                            items={order.thickMetalBoxes} 
                            value={order.order.thickMetalBox} 
                            onChange={ (value) => dispatch(orderActions.setThickMetalBox(value))}                        
                        />
                    </Form.Item>
                </Col>
            </Row>                 
        </Form>    
        </Container>
    )
}

export default Step2

const Container = styled.div`         
    display: flex;
    justify-content: center;
    width: 90%;
    >*{
        width: 90%;
    }
`;