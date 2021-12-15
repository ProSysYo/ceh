import React, { FC } from 'react';
import styled from 'styled-components';
import { Col, Divider, Form, Row } from 'antd';
import { useAppSelector } from '../../hooks/useAppSelector';
import Select from '../../components/Select';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { orderActions } from '../../store/slices/orderSlice';

const layout1 = {labelCol:{ span: 8 }, wrapperCol:{ span: 6 }}
const layout2 = {labelCol:{ span: 8 }, wrapperCol:{ span: 10 }}

const Step3: FC = () => {
    const dispatch = useAppDispatch()

    const { order } = useAppSelector(state => state)
    const { validateErrors } = useAppSelector(state => state.order)

    return (
        <Container>
            <Form
                name="basic"
                size = "middle"                 
            >
                <Divider >Основной замок</Divider>                
                <Form.Item 
                    label="Основной замок*" {...layout1}
                    { ...validateErrors.baseLock && { help: validateErrors.baseLock, validateStatus: 'error'}}
                >
                    <Select
                        items={order.baseLocks}
                        value={order.order.baseLock}
                        onChange={(value) => dispatch(orderActions.setBaseLock(value))}
                    />
                </Form.Item>
            
                <Form.Item 
                    label="Цилиндр" 
                    {...layout1}
                    { ...validateErrors.baseCylinder && { help: validateErrors.baseCylinder, validateStatus: 'error'}}
                >
                    <Select
                        items={order.cylinders}
                        value={order.order.baseCylinder}
                        disabled={!order.isBaseCylinder}
                        onChange={(value) => dispatch(orderActions.setBaseCylinder(value))}
                    />
                </Form.Item>

                <Form.Item 
                    label="Вертушок замка" 
                    {...layout2}
                    { ...validateErrors.lockSpinner && { help: validateErrors.lockSpinner, validateStatus: 'error'}}
                    { ...validateErrors.lockSpinnerColor && { help: validateErrors.lockSpinnerColor, validateStatus: 'error'}}
                >
                    <Row>
                        <Col span={14}>
                            <Select 
                                items={order.spinners}
                                value={order.order.lockSpinner}
                                disabled={!order.isLockSpinner}
                                onChange={(value) => dispatch(orderActions.setLockSpinner(value))}
                            />
                        </Col>
                        <Col span={10}>
                            <Select 
                                items={order.fittingColors}
                                value={order.order.lockSpinnerColor}
                                disabled={!order.isLockSpinner}
                                firstOption="выберите цвет"
                                onChange={(value) => dispatch(orderActions.setLockSpinnerColor(value))}
                            />
                        </Col>
                    </Row>
                </Form.Item>                

                <Divider >Накладки основного замка</Divider> 
                <Form.Item 
                    label="Снаружи" 
                    {...layout2}
                    { ...validateErrors.baseCoverOutside && { help: validateErrors.baseCoverOutside, validateStatus: 'error'}}
                    { ...validateErrors.baseCoverColorOutside && { help: validateErrors.baseCoverColorOutside, validateStatus: 'error'}}
                >
                    <Row>
                        <Col span={14}>
                            <Select 
                                items={order.baseCovers}
                                value={order.order.baseCoverOutside}
                                disabled={!order.isBaseCover}
                                onChange={(value) => dispatch(orderActions.setBaseCoverOutside(value))}
                            />
                        </Col>
                        <Col span={10}>
                            <Select 
                                items={order.fittingColors}
                                value={order.order.baseCoverColorOutside}
                                disabled={!order.isBaseCover}
                                firstOption="выберите цвет"
                                onChange={(value) => dispatch(orderActions.setBaseCoverColorOutside(value))}
                            />
                        </Col>
                    </Row>
                </Form.Item> 
                    
                <Form.Item 
                    label="Внутри" 
                    {...layout2}
                    { ...validateErrors.baseCoverInside && { help: validateErrors.baseCoverInside, validateStatus: 'error'}}
                    { ...validateErrors.baseCoverColorInside && { help: validateErrors.baseCoverColorInside, validateStatus: 'error'}}
                >
                    <Row>
                        <Col span={14}>
                            <Select
                                items={order.baseCovers}
                                value={order.order.baseCoverInside}
                                disabled={!order.isBaseCover}
                                onChange={(value) => dispatch(orderActions.setBaseCoverInside(value))}
                            />
                        </Col>
                        <Col span={10}>
                            <Select 
                                items={order.fittingColors}
                                value={order.order.baseCoverColorInside}
                                disabled={!order.isBaseCover}
                                firstOption="выберите цвет"
                                onChange={(value) => dispatch(orderActions.setBaseCoverColorInside(value))}
                            />
                        </Col>
                    </Row>
                </Form.Item> 

                <Divider >Накладки основного замка 2</Divider>                      
                <Form.Item 
                    label="Снаружи" 
                    {...layout2}
                    { ...validateErrors.baseCoverOutside2 && { help: validateErrors.baseCoverOutside2, validateStatus: 'error'}}
                    { ...validateErrors.baseCoverColorOutside2 && { help: validateErrors.baseCoverColorOutside2, validateStatus: 'error'}}
                >
                    <Row>
                        <Col span={14}>
                            <Select 
                                items={order.baseCovers2}
                                value={order.order.baseCoverOutside2}
                                disabled={!order.isBaseCover2}
                                onChange={(value) => dispatch(orderActions.setBaseCoverOutside2(value))}
                            />
                        </Col>
                        <Col span={10}>
                            <Select 
                                items={order.fittingColors}
                                value={order.order.baseCoverColorOutside2}
                                disabled={!order.isBaseCover2}
                                firstOption="выберите цвет"
                                onChange={(value) => dispatch(orderActions.setBaseCoverColorOutside2(value))}
                            />
                        </Col>
                    </Row>
                </Form.Item>                        
            
                <Form.Item 
                    label="Внутри" 
                    {...layout2}
                    { ...validateErrors.baseCoverInside2 && { help: validateErrors.baseCoverInside2, validateStatus: 'error'}}
                    { ...validateErrors.baseCoverColorInside2 && { help: validateErrors.baseCoverColorInside2, validateStatus: 'error'}}
                >
                    <Row>
                        <Col span={14}>
                            <Select
                                items={order.baseCovers2}
                                value={order.order.baseCoverInside2}
                                disabled={!order.isBaseCover2}
                                onChange={(value) => dispatch(orderActions.setBaseCoverInside2(value))}
                            />
                        </Col>
                        <Col span={10}>
                            <Select 
                                items={order.fittingColors}
                                value={order.order.baseCoverColorInside2}
                                disabled={!order.isBaseCover2}
                                firstOption="выберите цвет"                                       
                                onChange={(value) => dispatch(orderActions.setBaseCoverColorInside2(value))}
                            />
                        </Col>
                    </Row>
                </Form.Item>    

                <Divider >Дополнительный замок</Divider>                
                <Form.Item 
                    label="Дополнительный замок*" 
                    {...layout1}
                    { ...validateErrors.optionalLock && { help: validateErrors.optionalLock, validateStatus: 'error'}}
                >
                        <Select
                            items={order.optionalLocks}
                            value={order.order.optionalLock}
                            onChange={(value) => dispatch(orderActions.setOptionalLock(value))}
                        />
                </Form.Item>                
                
                <Form.Item 
                    label="Цилиндр дополнительного замка" 
                    {...layout1}
                    { ...validateErrors.optionalCylinder && { help: validateErrors.optionalCylinder, validateStatus: 'error'}}
                    
                >
                    <Select
                        items={order.cylinders}
                        value={order.order.optionalCylinder}
                        disabled={!order.isOptionalCylinder}
                        onChange={(value) => dispatch(orderActions.setOptionalCylinder(value))}
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
                                items={order.optionalCovers}
                                value={order.order.optionalCoverOutside}
                                disabled={!order.isOptionalCover}
                                onChange={(value) => dispatch(orderActions.setOptonalCoverOutside(value))}
                            />
                        </Col>
                        <Col span={10}>
                            <Select 
                                items={order.fittingColors}
                                value={order.order.optionalCoverColorOutside}
                                disabled={!order.isOptionalCover}
                                firstOption="выберите цвет"
                                onChange={(value) => dispatch(orderActions.setOptonalCoverColorOutside(value))}
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
                                items={order.optionalCovers}
                                value={order.order.optionalCoverInside}
                                disabled={!order.isOptionalCover}
                                onChange={(value) => dispatch(orderActions.setOptonalCoverInside(value))}
                            />
                        </Col>
                        <Col span={10}>
                            <Select 
                                items={order.fittingColors}
                                value={order.order.optionalCoverColorInside}
                                disabled={!order.isOptionalCover}
                                firstOption="выберите цвет"
                                onChange={(value) => dispatch(orderActions.setOptonalCoverColorInside(value))}
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
                                items={order.eyes}
                                value={order.order.eye}
                                onChange={(value) => dispatch(orderActions.setEye(value))}
                            />
                        </Col>
                        <Col span={10}>
                            <Select 
                                items={order.fittingColors}
                                value={order.order.colorEye}
                                firstOption="выберите цвет"
                                onChange={(value) => dispatch(orderActions.setColorEye(value))}
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
                        items={order.eyeLocations}
                        value={order.order.eyeLocation}
                        onChange={(value) => dispatch(orderActions.setEyeLocation(value))}
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
                                items={order.handles}
                                value={order.order.handle}
                                onChange={(value) => dispatch(orderActions.setHandle(value))}
                            />
                        </Col>
                        <Col span={10}>
                            <Select 
                                items={order.fittingColors}
                                value={order.order.handleColor}
                                firstOption="выберите цвет"
                                onChange={(value) => dispatch(orderActions.setHandleColor(value))}
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
                                items={order.spinners}
                                value={order.order.spinner}
                                onChange={(value) => dispatch(orderActions.setSpinner(value))}
                            />
                        </Col>
                        <Col span={10}>
                            <Select 
                                items={order.fittingColors}
                                value={order.order.spinnerColor}
                                firstOption="выберите цвет"
                                onChange={(value) => dispatch(orderActions.setSpinnerColor(value))}
                            />
                        </Col>
                    </Row>
                </Form.Item>                                
            </Form>
        </Container>
    )
}

export default Step3

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 90%;
    >*{
        width: 95%;
    }
`;
