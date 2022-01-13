import React, { FC } from 'react';
import styled from 'styled-components';
import { Col, Divider, Form, InputNumber, Row } from 'antd';
import { useAppSelector } from '../../hooks/useAppSelector';
import Select from '../../components/Select';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { orderActions } from '../../store/slices/orderSlice';

const Step2: FC = () => {
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
                            items={staticTables.models} 
                            value={currentOrder.model} 
                            onChange={ (value) => dispatch(orderActions.setModel(value))}                       
                        />
                    </Form.Item>                    

                    <Form.Item 
                        label="Толщина полотна"
                        { ...validateErrors.doorThick && { help: validateErrors.doorThick, validateStatus: 'error'}}
                    >
                        <Select 
                            items={computedTables.doorThicks} 
                            value={currentOrder.doorThick}                            
                            onChange={ (value) => dispatch(orderActions.setOrderFieldNum({fieldName: "doorThick", value}))}                        
                        />
                    </Form.Item>
                    <Form.Item 
                        label="Модель коробки"
                        { ...validateErrors.modelBox && { help: validateErrors.modelBox, validateStatus: 'error'}}
                    >
                        <Select 
                            items={staticTables.modelBoxes} 
                            value={currentOrder.modelBox} 
                            onChange={ (value) => dispatch(orderActions.setOrderFieldStr({fieldName: "modelBox", value}))}                        
                        />
                    </Form.Item>

                    <Form.Item 
                        label="Расположение наличника (внутр. откр.)"
                        { ...validateErrors.locationJumb && { help: validateErrors.locationJumb, validateStatus: 'error'}}
                    >
                        <Select 
                            items={staticTables.locationJambs} 
                            value={currentOrder.locationJumb}
                            disabled={!block.isLocationJamb}
                            onChange={ (value) => dispatch(orderActions.setOrderFieldStr({fieldName: "locationJumb", value}))}                        
                        />
                    </Form.Item>
                    <Form.Item 
                        label="Уплотнитель"
                        { ...validateErrors.sealer && { help: validateErrors.sealer, validateStatus: 'error'}}
                    >
                        <Select 
                            items={staticTables.sealers} 
                            value={currentOrder.sealer} 
                            onChange={ (value) => dispatch(orderActions.setOrderFieldStr({fieldName: "sealer", value}))}                        
                        />
                    </Form.Item>
                    <Form.Item 
                        label="Цвет покраски двери"
                        { ...validateErrors.doorColor && { help: validateErrors.doorColor, validateStatus: 'error'}}
                    >
                        <Select 
                            items={staticTables.colorDoors} 
                            value={currentOrder.colorDoor} 
                            onChange={ (value) => dispatch(orderActions.setOrderFieldStr({fieldName: "colorDoor", value}))}                        
                        />
                    </Form.Item>
                </Col>
                <Col span={12}> 
                    <Form.Item 
                        label="Высота двери"
                        { ...validateErrors.height && { help: validateErrors.height, validateStatus: 'error'}}
                    >
                        <InputNumber  value={currentOrder.height} onChange={(value)=> dispatch(orderActions.setOrderFieldNum({fieldName: "height", value}))} />
                    </Form.Item>

                    <Form.Item 
                        label="Ширина двери"
                        { ...validateErrors.width && { help: validateErrors.width, validateStatus: 'error'}}
                    >
                        <InputNumber  value={currentOrder.width} onChange={(value)=> dispatch(orderActions.setOrderFieldNum({fieldName: "width", value}))} />
                    </Form.Item>
                    
                    <Form.Item 
                        label="Ширина раб. створки"
                        { ...validateErrors.widthDouble && { help: validateErrors.widthDouble, validateStatus: 'error'}}
                    >
                        <InputNumber disabled={!block.isDouble} value={currentOrder.widthDouble} onChange={(value)=> dispatch(orderActions.setOrderFieldNum({fieldName: "widthDouble", value}))} />
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
                            items={staticTables.locationHinges} 
                            value={currentOrder.locationHinge} 
                            onChange={ (value) => dispatch(orderActions.setOrderFieldStr({fieldName: "locationHinge", value}))}                        
                        />
                    </Form.Item>
                </Col>
                
                <Col span={8}> 
                    <Form.Item 
                        label="Тип петель"
                        { ...validateErrors.typeHinge && { help: validateErrors.typeHinge, validateStatus: 'error'}}
                    >
                        <Select 
                            items={staticTables.typeHinges} 
                            value={currentOrder.typeHinge} 
                            onChange={ (value) => dispatch(orderActions.setOrderFieldStr({fieldName: "typeHinge", value}))}                        
                        />
                    </Form.Item>
                </Col>

                <Col span={8}>
                    <Form.Item 
                        label="Количество петель"
                        { ...validateErrors.countHinge && { help: validateErrors.countHinge, validateStatus: 'error'}}
                    >
                        <Select 
                            items={staticTables.hingeCounts} 
                            value={currentOrder.countHinge} 
                            onChange={ (value) => dispatch(orderActions.setOrderFieldNum({fieldName: "countHinge", value}))}                        
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
                            items={staticTables.thickMetalLeafs} 
                            value={currentOrder.thickMetalLeaf} 
                            onChange={ (value) => dispatch(orderActions.setOrderFieldNum({fieldName: "thickMetalLeaf", value}))}                        
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item 
                        label="Толщина металла короба"
                        { ...validateErrors.thickMetalBox && { help: validateErrors.thickMetalBox, validateStatus: 'error'}}
                    >
                        <Select 
                            items={staticTables.thickMetalBoxes} 
                            value={currentOrder.thickMetalBox} 
                            onChange={ (value) => dispatch(orderActions.setOrderFieldNum({fieldName: "thickMetalBox", value}))}                        
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Divider >Крепление</Divider>    
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item 
                        label="Уши"
                        { ...validateErrors.ear && { help: validateErrors.ear, validateStatus: 'error'}}
                    >
                        <Select 
                            items={staticTables.ears} 
                            value={currentOrder.ear} 
                            onChange={ (value) => dispatch(orderActions.setOrderFieldStr({fieldName: "ear", value}))}                        
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item 
                        label="Отверстия в коробе"
                        { ...validateErrors.holeInBox && { help: validateErrors.holeInBox, validateStatus: 'error'}}
                    >
                        <Select 
                            items={staticTables.holeInBoxes} 
                            value={currentOrder.holeInBox} 
                            onChange={ (value) => dispatch(orderActions.setOrderFieldStr({fieldName: "holeInBox", value}))}                        
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