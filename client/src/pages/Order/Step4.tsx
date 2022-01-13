import React, { FC } from 'react';
import styled from 'styled-components';
import { Col, Divider, Form, Row } from 'antd';
import { useAppSelector } from '../../hooks/useAppSelector';
import Select from '../../components/Select';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { orderActions } from '../../store/slices/orderSlice';

const layout1 = {labelCol:{ span: 8 }, wrapperCol:{ span: 6 }}
const layout2 = {labelCol:{ span: 8 }, wrapperCol:{ span: 10 }}

const Step4: FC = () => {
    const dispatch = useAppDispatch()

    const { staticTables } = useAppSelector(state => state.order)
    const { computedTables } = useAppSelector(state => state.order)
    const { block } = useAppSelector(state => state.order)
    const { currentOrder } = useAppSelector(state => state.order)
    const { validateErrors } = useAppSelector(state => state.order)

    return (
        <Container>
            <Form
                name="basic"
                size = "middle"                 
            > 
                <Divider >Дополнительный замок</Divider>                
                <Form.Item 
                    label="Дополнительный замок*" 
                    {...layout1}
                    { ...validateErrors.optionalLock && { help: validateErrors.optionalLock, validateStatus: 'error'}}
                >
                        <Select
                            items={staticTables.optionalLocks}
                            value={currentOrder.optionalLock}
                            onChange={(value) => dispatch(orderActions.setOptionalLock( value))}
                        />
                </Form.Item>                
                
                <Form.Item 
                    label="Цилиндр дополнительного замка" 
                    {...layout1}
                    { ...validateErrors.optionalCylinder && { help: validateErrors.optionalCylinder, validateStatus: 'error'}}
                    
                >
                    <Select
                        items={staticTables.cylinders}
                        value={currentOrder.optionalCylinder}
                        disabled={!block.isOptionalCylinder}
                        onChange={(value) => dispatch(orderActions.setOrderFieldStr({fieldName: "optionalCylinder", value}))}
                    />
                </Form.Item>

                <Divider >Накладки дополнительного замка</Divider>
                <Form.Item 
                    label="Снаружи" 
                    {...layout2}
                    { ...validateErrors.optionalCoverOutside && { help: validateErrors.optionalCoverOutside, validateStatus: 'error'}}
                    { ...validateErrors.optionalCoverColorOutside && { help: validateErrors.optionalCoverColorOutside, validateStatus: 'error'}}
                >
                    <Row>
                        <Col span={14}>
                            <Select 
                                items={computedTables.optionalCovers}
                                value={currentOrder.optionalCoverOutside}
                                disabled={!block.isOptionalCover}
                                onChange={(value) => dispatch(orderActions.setOrderFieldStr({fieldName: "optionalCoverOutside", value}))}
                            />
                        </Col>
                        <Col span={10}>
                            <Select 
                                items={staticTables.fittingColors}
                                value={currentOrder.optionalCoverColorOutside}
                                disabled={!block.isOptionalCover}
                                firstOption="выберите цвет"
                                onChange={(value) => dispatch(orderActions.setOrderFieldStr({fieldName: "optionalCoverColorOutside", value}))}
                            />
                        </Col>
                    </Row>
                </Form.Item>                        
            
                <Form.Item 
                    label="Внутри" 
                    {...layout2}
                    { ...validateErrors.optionalCoverInside && { help: validateErrors.optionalCoverInside, validateStatus: 'error'}}
                    { ...validateErrors.optionalCoverColorInside && { help: validateErrors.optionalCoverColorInside, validateStatus: 'error'}}
                >
                    <Row>
                        <Col span={14}>
                            <Select
                                items={computedTables.optionalCovers}
                                value={currentOrder.optionalCoverInside}
                                disabled={!block.isOptionalCover}
                                onChange={(value) => dispatch(orderActions.setOrderFieldStr({fieldName: "optionalCoverInside", value}))}
                            />
                        </Col>
                        <Col span={10}>
                            <Select 
                                items={staticTables.fittingColors}
                                value={currentOrder.optionalCoverColorInside}
                                disabled={!block.isOptionalCover}
                                firstOption="выберите цвет"
                                onChange={(value) => dispatch(orderActions.setOrderFieldStr({fieldName: "optionalCoverColorInside", value}))}
                            />
                        </Col>
                    </Row>
                </Form.Item> 

                <Divider>Глазок</Divider>
                <Form.Item 
                    label="Глазок" 
                    {...layout2}
                    { ...validateErrors.eye && { help: validateErrors.eye, validateStatus: 'error'}}
                    { ...validateErrors.colorEye && { help: validateErrors.colorEye, validateStatus: 'error'}}
                >
                    <Row>
                        <Col span={14}>
                            <Select
                                items={staticTables.eyes}
                                value={currentOrder.eye}
                                onChange={(value) => dispatch(orderActions.setEye(value))}
                            />
                        </Col>
                        <Col span={10}>
                            <Select 
                                items={staticTables.fittingColors}
                                value={currentOrder.colorEye}
                                firstOption="выберите цвет"
                                onChange={(value) => dispatch(orderActions.setOrderFieldStr({fieldName: "colorEye", value}))}
                            />
                        </Col>
                    </Row>
                </Form.Item>                        
            
                <Form.Item 
                    label="Расположение глазка" 
                    {...layout1}
                    { ...validateErrors.eyeLocation && { help: validateErrors.eyeLocation, validateStatus: 'error'}}
                >
                    <Select
                        items={staticTables.eyeLocations}
                        value={currentOrder.eyeLocation}
                        onChange={(value) => dispatch(orderActions.setOrderFieldStr({fieldName: "eyeLocation", value}))}
                    />
                </Form.Item>                    

                <Divider/>

                <Form.Item 
                    label="Ручка" 
                    {...layout2}
                    { ...validateErrors.handle && { help: validateErrors.handle, validateStatus: 'error'}}
                    { ...validateErrors.handleColor && { help: validateErrors.handleColor, validateStatus: 'error'}}
                >
                    <Row>
                        <Col span={14}>
                            <Select
                                items={staticTables.handles}
                                value={currentOrder.handle}
                                onChange={(value) => dispatch(orderActions.setHandle(value))}
                            />
                        </Col>
                        <Col span={10}>
                            <Select 
                                items={staticTables.fittingColors}
                                value={currentOrder.handleColor}
                                firstOption="выберите цвет"
                                onChange={(value) => dispatch(orderActions.setOrderFieldStr({fieldName: "handleColor", value}))}
                            />
                        </Col>
                    </Row>
                </Form.Item>

                <Form.Item 
                    label="Вертушок" 
                    {...layout2}
                    { ...validateErrors.spinner && { help: validateErrors.spinner, validateStatus: 'error'}}
                    { ...validateErrors.spinnerColor && { help: validateErrors.spinnerColor, validateStatus: 'error'}}
                >
                    <Row>
                        <Col span={14}>
                            <Select
                                items={staticTables.spinners}
                                value={currentOrder.spinner}
                                onChange={(value) => dispatch(orderActions.setSpinner(value))}
                            />
                        </Col>
                        <Col span={10}>
                            <Select 
                                items={staticTables.fittingColors}
                                value={currentOrder.spinnerColor}
                                firstOption="выберите цвет"
                                onChange={(value) => dispatch(orderActions.setOrderFieldStr({fieldName: "spinnerColor", value}))}
                            />
                        </Col>
                    </Row>
                </Form.Item>                                
            </Form>
        </Container>
    )
}

export default Step4

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 90%;
    >*{
        width: 95%;
    }
`;
