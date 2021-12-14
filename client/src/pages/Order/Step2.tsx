import React, { FC } from 'react';
import styled from 'styled-components';
import { Col, Divider, Form, InputNumber, Row } from 'antd';
import { useAppSelector } from '../../hooks/useAppSelector';
import Select from '../../components/Select';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { orderActions } from '../../store/slices/orderSlice';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import { useEffect } from 'react';


const Step2: FC = () => {
    const dispatch = useAppDispatch()

    const { order } = useAppSelector(state => state)
    const validateErrors = order.validateErrors

    useEffect(() => {        
        dispatch(orderActions.setComputedModel())
    }, [order.order.model, order.order.isDouble, order.order.openingType, order.order.contour, dispatch])
        
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
                    <Form.Item 
                        label="Модель двери*"
                        { ...validateErrors.model && { help: validateErrors.model, validateStatus: 'error'}}
                    >
                        <Select 
                            items={order.models} 
                            value={order.order.model} 
                            onChange={ (value) => dispatch(orderActions.setModel(value))}                       
                        />
                    </Form.Item>

                    <Form.Item 
                        label="Количество контуров"
                        { ...validateErrors.contour && { help: validateErrors.contour, validateStatus: 'error'}}
                    >
                        <Select 
                            items={order.contours} 
                            value={order.order.contour} 
                            onChange={ (value) => dispatch(orderActions.setContour(value))}                        
                        />
                    </Form.Item>

                    <Form.Item 
                        label="Толщина полотна"
                        { ...validateErrors.doorThick && { help: validateErrors.doorThick, validateStatus: 'error'}}
                    >
                        <Select 
                            items={order.doorThicks} 
                            value={order.order.doorThick} 
                            onChange={ (value) => dispatch(orderActions.setDoorThick(value))}                        
                        />
                    </Form.Item>
                    <Form.Item 
                        label="Модель коробки"
                        { ...validateErrors.modelBox && { help: validateErrors.modelBox, validateStatus: 'error'}}
                    >
                        <Select 
                            items={order.modelBoxes} 
                            value={order.order.modelBox} 
                            onChange={ (value) => dispatch(orderActions.setModelBox(value))}                        
                        />
                    </Form.Item>

                    <Form.Item 
                        label="Тип открывания*"
                        { ...validateErrors.openingType && { help: validateErrors.openingType, validateStatus: 'error'}}
                    >
                        <Select 
                            items={order.openingTypes} 
                            value={order.order.openingType} 
                            onChange={ (value) => dispatch(orderActions.setOpeningType(value))}                        
                        />
                    </Form.Item>
                </Col>
                <Col span={12}> 
                    <Form.Item 
                        { ...validateErrors.isDouble && { help: validateErrors.isDouble, validateStatus: 'error'}}
                    >                   
                        <Checkbox checked={order.order.isDouble} onChange={(e)=> dispatch(orderActions.setIsDouble(e.target.checked))} >Двустворчатая</Checkbox>
                    </Form.Item>

                    <Form.Item 
                        label="Высота двери"
                        { ...validateErrors.height && { help: validateErrors.height, validateStatus: 'error'}}
                    >
                        <InputNumber  value={order.order.height} onChange={(value)=> dispatch(orderActions.setHeight(value))} />
                    </Form.Item>

                    <Form.Item 
                        label="Ширина двери"
                        { ...validateErrors.width && { help: validateErrors.width, validateStatus: 'error'}}
                    >
                        <InputNumber  value={order.order.width} onChange={(value)=> dispatch(orderActions.setWidth(value))} />
                    </Form.Item>
                    
                    <Form.Item 
                        label="Ширина раб. створки"
                        { ...validateErrors.widthDouble && { help: validateErrors.widthDouble, validateStatus: 'error'}}
                    >
                        <InputNumber disabled={!order.order.isDouble} value={order.order.widthDouble} onChange={(value)=> dispatch(orderActions.setWidthDouble(value))} />
                    </Form.Item>
                </Col>
            </Row>

            <Divider >Петли</Divider>                
            <Row gutter={12}>
                <Col span={8}>                
                    <Form.Item 
                        label="Расположение петель"
                        { ...validateErrors.locationHinge && { help: validateErrors.locationHinge, validateStatus: 'error'}}
                    >
                        <Select 
                            items={order.locationHinges} 
                            value={order.order.locationHinge} 
                            onChange={ (value) => dispatch(orderActions.setLocationHinge(value))}                        
                        />
                    </Form.Item>
                </Col>
                
                <Col span={8}> 
                    <Form.Item 
                        label="Тип петель"
                        { ...validateErrors.typeHinge && { help: validateErrors.typeHinge, validateStatus: 'error'}}
                    >
                        <Select 
                            items={order.typeHinges} 
                            value={order.order.typeHinge} 
                            onChange={ (value) => dispatch(orderActions.setTypeHinge(value))}                        
                        />
                    </Form.Item>
                </Col>

                <Col span={8}>
                    <Form.Item 
                        label="Количество петель"
                        { ...validateErrors.countHinge && { help: validateErrors.countHinge, validateStatus: 'error'}}
                    >
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
                    <Form.Item 
                        label="Толщина металла полотна"
                        { ...validateErrors.thickMetalLeaf && { help: validateErrors.thickMetalLeaf, validateStatus: 'error'}}
                    >
                        <Select 
                            items={order.thickMetalLeafs} 
                            value={order.order.thickMetalLeaf} 
                            onChange={ (value) => dispatch(orderActions.setThickMetalLeaf(value))}                        
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item 
                        label="Толщина металла короба"
                        { ...validateErrors.thickMetalBox && { help: validateErrors.thickMetalBox, validateStatus: 'error'}}
                    >
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