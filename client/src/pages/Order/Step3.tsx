import React, { FC } from 'react';
import styled from 'styled-components';
import { Col, Divider, Form, Row } from 'antd';
import { useAppSelector } from '../../hooks/useAppSelector';
import Select from '../../components/Select';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import {
    setBaseCoverColorInside,
    setBaseCoverColorInside2,
    setBaseCoverColorOutside,
    setBaseCoverColorOutside2,
    setBaseCoverInside,
    setBaseCoverInside2,
    setBaseCoverOutside,
    setBaseCoverOutside2,
    setBaseCylinder,
    setColorEye,
    setEye,
    setEyeLocation,
    setHandle,
    setOptonalCoverInside,
    setOptonalCoverOutside,
    setLockSpinner,
    setOptionalCylinder,
    setSpinner,
    setOptonalCoverColorOutside,
    setOptonalCoverColorInside,
} from '../../store/slices/orderSlice';
import { changeBaseLock, changeOptionalLock } from '../../store/actions/orderActions';

const Step3: FC = () => {
    const dispatch = useAppDispatch()

    const {
        baseLocks, optionalLocks, spinners, cylinders, baseCovers, baseCovers2, isLockSpinner, isBaseCylinder, isBaseCover2,
        isOptionalCylinder, optionalCovers, eyes, handles, eyeLocations, fittingColors
    } = useAppSelector(state => state.order)

    const {
        baseLock, lockSpinner, baseCylinder, baseCoverOutside, baseCoverInside, baseCoverOutside2, baseCoverInside2, optionalLock,
        optionalCylinder, optionalCoverOutside, optionalCoverInside, eye, handle, spinner, eyeLocation, baseCoverColorInside, baseCoverColorOutside,
        baseCoverColorOutside2, baseCoverColorInside2, colorEye, optionalCoverColorOutside, optionalCoverColorInside
    } = useAppSelector(state => state.order.order)


    return (
        <Container>
            <Form
                name="basic"
                size = "middle"
                labelCol={{ span: 12 }}
                wrapperCol={{ span: 12 }} 
            >
                <Divider >Основной замок</Divider>
                <Row gutter={6}>
                    <Col span={8}>
                        <Form.Item label="Основной замок*" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                            <Select
                                items={baseLocks}
                                value={baseLock}
                                onChange={(value) => dispatch(changeBaseLock(value))}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Цилиндр" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                            <Select
                                items={cylinders}
                                value={baseCylinder}
                                disabled={!isBaseCylinder}
                                onChange={(value) => dispatch(setBaseCylinder(value))}
                            />
                        </Form.Item>                        
                    </Col>
                    <Col span={8}>
                        <Form.Item label={<Title>Вертушок</Title>} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                            <Select
                                items={spinners}
                                value={lockSpinner}
                                disabled={!isLockSpinner}
                                onChange={(value) => dispatch(setLockSpinner(value))}
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Divider >Накладки основного замка</Divider>  
                <Row gutter={24}>
                    <Col span={12}>       
                        <Form.Item label="Снаружи" labelCol={{ span: 4 }} wrapperCol={{ span: 24 }}>
                            <Row>
                                <Col span={15}>
                                    <Select 
                                        items={baseCovers}
                                        value={baseCoverOutside}
                                        onChange={(value) => dispatch(setBaseCoverOutside(value))}
                                    />
                                </Col>
                                <Col span={9}>
                                    <Select 
                                        items={fittingColors}
                                        value={baseCoverColorOutside}
                                        firstOption="выберите цвет"
                                        onChange={(value) => dispatch(setBaseCoverColorOutside(value))}
                                    />
                                </Col>
                            </Row>
                        </Form.Item>                        
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Внутри" labelCol={{ span: 4 }} wrapperCol={{ span: 24 }}>
                            <Row>
                                <Col span={15}>
                                    <Select
                                        items={baseCovers}
                                        value={baseCoverInside}
                                        onChange={(value) => dispatch(setBaseCoverInside(value))}
                                    />
                                </Col>
                                <Col span={9}>
                                    <Select 
                                        items={fittingColors}
                                        value={baseCoverColorInside}
                                        firstOption="выберите цвет"
                                        onChange={(value) => dispatch(setBaseCoverColorInside(value))}
                                    />
                                </Col>
                            </Row>
                        </Form.Item>                        
                    </Col>
                </Row>

                <Divider >Накладки основного замка сувальда (если двухсистемный замок)</Divider>
                <Row gutter={24}>
                    <Col span={12}>       
                        <Form.Item label="Снаружи" labelCol={{ span: 4 }} wrapperCol={{ span: 24 }}>
                            <Row>
                                <Col span={15}>
                                    <Select 
                                        items={baseCovers2}
                                        value={baseCoverOutside2}
                                        disabled={!isBaseCover2}
                                        onChange={(value) => dispatch(setBaseCoverOutside2(value))}
                                    />
                                </Col>
                                <Col span={9}>
                                    <Select 
                                        items={fittingColors}
                                        value={baseCoverColorOutside2}
                                        disabled={!isBaseCover2}
                                        firstOption="выберите цвет"
                                        onChange={(value) => dispatch(setBaseCoverColorOutside2(value))}
                                    />
                                </Col>
                            </Row>
                        </Form.Item>                        
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Внутри" labelCol={{ span: 4 }} wrapperCol={{ span: 24 }}>
                            <Row>
                                <Col span={15}>
                                    <Select
                                        items={baseCovers2}
                                        value={baseCoverInside2}
                                        disabled={!isBaseCover2}
                                        onChange={(value) => dispatch(setBaseCoverInside2(value))}
                                    />
                                </Col>
                                <Col span={9}>
                                    <Select 
                                        items={fittingColors}
                                        value={baseCoverColorInside2}
                                        disabled={!isBaseCover2}
                                        firstOption="выберите цвет"                                       
                                        onChange={(value) => dispatch(setBaseCoverColorInside2(value))}
                                    />
                                </Col>
                            </Row>
                        </Form.Item>                        
                    </Col>
                </Row>                

                <Divider >Дополнительный замок</Divider>  
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item label="Дополнительный замок*">
                            <Select
                                items={optionalLocks}
                                value={optionalLock}
                                onChange={(value) => dispatch(changeOptionalLock(value))}
                            />
                    </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Цилиндр дополнительного замка">
                            <Select
                                items={cylinders}
                                value={optionalCylinder}
                                disabled={!isOptionalCylinder}
                                onChange={(value) => dispatch(setOptionalCylinder(value))}
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Divider >Накладки дополнительного замка</Divider>  
                <Row gutter={24}>
                    <Col span={12}>       
                        <Form.Item label="Снаружи" labelCol={{ span: 4 }} wrapperCol={{ span: 24 }}>
                            <Row>
                                <Col span={15}>
                                    <Select 
                                        items={optionalCovers}
                                        value={optionalCoverOutside}
                                        onChange={(value) => dispatch(setOptonalCoverOutside(value))}
                                    />
                                </Col>
                                <Col span={9}>
                                    <Select 
                                        items={fittingColors}
                                        value={optionalCoverColorOutside}
                                        firstOption="выберите цвет"
                                        onChange={(value) => dispatch(setOptonalCoverColorOutside(value))}
                                    />
                                </Col>
                            </Row>
                        </Form.Item>                        
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Внутри" labelCol={{ span: 4 }} wrapperCol={{ span: 24 }}>
                            <Row>
                                <Col span={15}>
                                    <Select
                                        items={optionalCovers}
                                        value={optionalCoverInside}
                                        onChange={(value) => dispatch(setOptonalCoverInside(value))}
                                    />
                                </Col>
                                <Col span={9}>
                                    <Select 
                                        items={fittingColors}
                                        value={optionalCoverColorInside}
                                        firstOption="выберите цвет"
                                        onChange={(value) => dispatch(setOptonalCoverColorInside(value))}
                                    />
                                </Col>
                            </Row>
                        </Form.Item>                        
                    </Col>
                </Row>

                <Divider>Глазок</Divider>             
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item label="Глазок" labelCol={{ span: 4 }} wrapperCol={{ span: 24 }}>
                            <Row>
                                <Col span={15}>
                                    <Select
                                        items={eyes}
                                        value={eye}
                                        onChange={(value) => dispatch(setEye(value))}
                                    />
                                </Col>
                                <Col span={9}>
                                    <Select 
                                        items={fittingColors}
                                        value={colorEye}
                                        firstOption="выберите цвет"
                                        onChange={(value) => dispatch(setColorEye(value))}
                                    />
                                </Col>
                            </Row>
                        </Form.Item>                        
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Расположение глазка">
                            <Select
                                items={eyeLocations}
                                value={eyeLocation}
                                onChange={(value) => dispatch(setEyeLocation(value))}
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Divider/>
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item label="Ручка">
                            <Select
                                items={handles}
                                value={handle}
                                onChange={(value) => dispatch(setHandle(value))}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Вертушок">
                            <Select
                                items={spinners}
                                value={spinner}
                                onChange={(value) => dispatch(setSpinner(value))}
                            />
                        </Form.Item>
                    </Col>
                </Row>
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

const Title = styled.label`
    
`;

