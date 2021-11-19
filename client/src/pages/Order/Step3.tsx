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

    const {
        baseLocks, optionalLocks, spinners, cylinders, baseCovers, baseCovers2, isLockSpinner, isBaseCylinder, isBaseCover2,
        isOptionalCylinder, optionalCovers, eyes, handles, eyeLocations, fittingColors, isBaseCover, isOptionalCover
    } = useAppSelector(state => state.order)

    const {
        baseLock, lockSpinner, baseCylinder, baseCoverOutside, baseCoverInside, baseCoverOutside2, baseCoverInside2, optionalLock,
        optionalCylinder, optionalCoverOutside, optionalCoverInside, eye, handle, spinner, eyeLocation, baseCoverColorInside, baseCoverColorOutside,
        baseCoverColorOutside2, baseCoverColorInside2, colorEye, optionalCoverColorOutside, optionalCoverColorInside, lockSpinnerColor, handleColor,
        spinnerColor
    } = useAppSelector(state => state.order.order)

    

    return (
        <Container>
            <Form
                name="basic"
                size = "middle"                 
            >
                <Divider >Основной замок</Divider>                
                <Form.Item label="Основной замок*" {...layout1}>
                    <Select
                        items={baseLocks}
                        value={baseLock}
                        onChange={(value) => dispatch(orderActions.setBaseLock(value))}
                    />
                </Form.Item>
            
                <Form.Item label="Цилиндр" {...layout1}>
                    <Select
                        items={cylinders}
                        value={baseCylinder}
                        disabled={!isBaseCylinder}
                        onChange={(value) => dispatch(orderActions.setBaseCylinder(value))}
                    />
                </Form.Item>

                <Form.Item label="Вертушок замка" {...layout2}>
                    <Row>
                        <Col span={14}>
                            <Select 
                                items={spinners}
                                value={lockSpinner}
                                disabled={!isLockSpinner}
                                onChange={(value) => dispatch(orderActions.setLockSpinner(value))}
                            />
                        </Col>
                        <Col span={10}>
                            <Select 
                                items={fittingColors}
                                value={lockSpinnerColor}
                                disabled={!isLockSpinner}
                                firstOption="выберите цвет"
                                onChange={(value) => dispatch(orderActions.setLockSpinnerColor(value))}
                            />
                        </Col>
                    </Row>
                </Form.Item>                

                <Divider >Накладки основного замка</Divider> 
                <Form.Item label="Снаружи" {...layout2}>
                    <Row>
                        <Col span={14}>
                            <Select 
                                items={baseCovers}
                                value={baseCoverOutside}
                                disabled={!isBaseCover}
                                onChange={(value) => dispatch(orderActions.setBaseCoverOutside(value))}
                            />
                        </Col>
                        <Col span={10}>
                            <Select 
                                items={fittingColors}
                                value={baseCoverColorOutside}
                                disabled={!isBaseCover}
                                firstOption="выберите цвет"
                                onChange={(value) => dispatch(orderActions.setBaseCoverColorOutside(value))}
                            />
                        </Col>
                    </Row>
                </Form.Item> 
                    
                <Form.Item label="Внутри" {...layout2}>
                    <Row>
                        <Col span={14}>
                            <Select
                                items={baseCovers}
                                value={baseCoverInside}
                                disabled={!isBaseCover}
                                onChange={(value) => dispatch(orderActions.setBaseCoverInside(value))}
                            />
                        </Col>
                        <Col span={10}>
                            <Select 
                                items={fittingColors}
                                value={baseCoverColorInside}
                                disabled={!isBaseCover}
                                firstOption="выберите цвет"
                                onChange={(value) => dispatch(orderActions.setBaseCoverColorInside(value))}
                            />
                        </Col>
                    </Row>
                </Form.Item> 

                <Divider >Накладки основного замка сувальда (если двухсистемный замок)</Divider>                      
                <Form.Item label="Снаружи" {...layout2}>
                    <Row>
                        <Col span={14}>
                            <Select 
                                items={baseCovers2}
                                value={baseCoverOutside2}
                                disabled={!isBaseCover2}
                                onChange={(value) => dispatch(orderActions.setBaseCoverOutside2(value))}
                            />
                        </Col>
                        <Col span={10}>
                            <Select 
                                items={fittingColors}
                                value={baseCoverColorOutside2}
                                disabled={!isBaseCover2}
                                firstOption="выберите цвет"
                                onChange={(value) => dispatch(orderActions.setBaseCoverColorOutside2(value))}
                            />
                        </Col>
                    </Row>
                </Form.Item>                        
            
                <Form.Item label="Внутри" {...layout2}>
                    <Row>
                        <Col span={14}>
                            <Select
                                items={baseCovers2}
                                value={baseCoverInside2}
                                disabled={!isBaseCover2}
                                onChange={(value) => dispatch(orderActions.setBaseCoverInside2(value))}
                            />
                        </Col>
                        <Col span={10}>
                            <Select 
                                items={fittingColors}
                                value={baseCoverColorInside2}
                                disabled={!isBaseCover2}
                                firstOption="выберите цвет"                                       
                                onChange={(value) => dispatch(orderActions.setBaseCoverColorInside2(value))}
                            />
                        </Col>
                    </Row>
                </Form.Item>    

                <Divider >Дополнительный замок</Divider>                
                <Form.Item label="Дополнительный замок*" {...layout1}>
                        <Select
                            items={optionalLocks}
                            value={optionalLock}
                            onChange={(value) => dispatch(orderActions.setOptionalLock(value))}
                        />
                </Form.Item>                
                
                <Form.Item label="Цилиндр дополнительного замка" {...layout1}>
                    <Select
                        items={cylinders}
                        value={optionalCylinder}
                        disabled={!isOptionalCylinder}
                        onChange={(value) => dispatch(orderActions.setOptionalCylinder(value))}
                    />
                </Form.Item>

                <Divider >Накладки дополнительного замка</Divider>
                <Form.Item label="Снаружи" {...layout2}>
                    <Row>
                        <Col span={14}>
                            <Select 
                                items={optionalCovers}
                                value={optionalCoverOutside}
                                disabled={!isOptionalCover}
                                onChange={(value) => dispatch(orderActions.setOptonalCoverOutside(value))}
                            />
                        </Col>
                        <Col span={10}>
                            <Select 
                                items={fittingColors}
                                value={optionalCoverColorOutside}
                                disabled={!isOptionalCover}
                                firstOption="выберите цвет"
                                onChange={(value) => dispatch(orderActions.setOptonalCoverColorOutside(value))}
                            />
                        </Col>
                    </Row>
                </Form.Item>                        
            
                <Form.Item label="Внутри" {...layout2}>
                    <Row>
                        <Col span={14}>
                            <Select
                                items={optionalCovers}
                                value={optionalCoverInside}
                                disabled={!isOptionalCover}
                                onChange={(value) => dispatch(orderActions.setOptonalCoverInside(value))}
                            />
                        </Col>
                        <Col span={10}>
                            <Select 
                                items={fittingColors}
                                value={optionalCoverColorInside}
                                disabled={!isOptionalCover}
                                firstOption="выберите цвет"
                                onChange={(value) => dispatch(orderActions.setOptonalCoverColorInside(value))}
                            />
                        </Col>
                    </Row>
                </Form.Item> 

                <Divider>Глазок</Divider>
                <Form.Item label="Глазок" {...layout2}>
                    <Row>
                        <Col span={14}>
                            <Select
                                items={eyes}
                                value={eye}
                                onChange={(value) => dispatch(orderActions.setEye(value))}
                            />
                        </Col>
                        <Col span={10}>
                            <Select 
                                items={fittingColors}
                                value={colorEye}
                                firstOption="выберите цвет"
                                onChange={(value) => dispatch(orderActions.setColorEye(value))}
                            />
                        </Col>
                    </Row>
                </Form.Item>                        
            
                <Form.Item label="Расположение глазка" {...layout1}>
                    <Select
                        items={eyeLocations}
                        value={eyeLocation}
                        onChange={(value) => dispatch(orderActions.setEyeLocation(value))}
                    />
                </Form.Item>                    

                <Divider/>

                <Form.Item label="Ручка" {...layout2}>
                    <Row>
                        <Col span={14}>
                            <Select
                                items={handles}
                                value={handle}
                                onChange={(value) => dispatch(orderActions.setHandle(value))}
                            />
                        </Col>
                        <Col span={10}>
                            <Select 
                                items={fittingColors}
                                value={handleColor}
                                firstOption="выберите цвет"
                                onChange={(value) => dispatch(orderActions.setHandleColor(value))}
                            />
                        </Col>
                    </Row>
                </Form.Item>

                <Form.Item label="Вертушок" {...layout2}>
                    <Row>
                        <Col span={14}>
                            <Select
                                items={spinners}
                                value={spinner}
                                onChange={(value) => dispatch(orderActions.setSpinner(value))}
                            />
                        </Col>
                        <Col span={10}>
                            <Select 
                                items={fittingColors}
                                value={spinnerColor}
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
