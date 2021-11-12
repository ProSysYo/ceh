import React, { FC } from 'react';
import styled from 'styled-components';
import { Col, Divider, Form, Input, Row } from 'antd';
import { useAppSelector } from '../../hooks/useAppSelector';
import Select from '../../components/Select';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import {
    setBaseCoverInside,
    setBaseCoverInside2,
    setBaseCoverOutside,
    setBaseCoverOutside2,
    setBaseCylinder,
    setEye,
    setEyeLocation,
    setHandle,
    setIsOptonalCoverInside,
    setIsOptonalCoverOutside,
    setLockSpinner,
    setOptionalCylinder,
    setSpinner,
} from '../../store/slices/orderSlice';
import { changeBaseLock, changeOptionalLock } from '../../store/actions/orderActions';

const Step3: FC = () => {
    const dispatch = useAppDispatch()

    const {
        baseLocks, optionalLocks, spinners, cylinders, baseCovers, baseCovers2, isLockSpinner, isBaseCylinder, isBaseCover2,
        isOptionalCylinder, optionalCovers, eyes, handles, eyeLocations
    } = useAppSelector(state => state.order)

    const {
        baseLock, lockSpinner, baseCylinder, baseCoverOutside, baseCoverInside, baseCoverOutside2, baseCoverInside2, optionalLock,
        optionalCylinder, optionalCoverOutside, optionalCoverInside, eye, handle, spinner, eyeLocation
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
                <Row gutter={1}>
                    <Col span={12}>
                        <Form.Item label="Основной замок*" >
                            <Select
                                items={baseLocks}
                                value={baseLock}
                                onChange={(value) => dispatch(changeBaseLock(value))}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Цилиндр основного замка">
                            <Select
                                items={cylinders}
                                value={baseCylinder}
                                disabled={!isBaseCylinder}
                                onChange={(value) => dispatch(setBaseCylinder(value))}
                            />
                        </Form.Item>
                        <Form.Item label={<Title>Вертушок основного замка</Title>}>
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
                        <Form.Item label="Снаружи">
                            <Input.Group compact>
                                <Select 
                                    items={baseCovers}
                                    value={baseCoverOutside}
                                    onChange={(value) => dispatch(setBaseCoverOutside(value))}
                                />
                                <Select 
                                    items={baseCovers}
                                    value={baseCoverOutside}
                                    onChange={(value) => dispatch(setBaseCoverOutside(value))}
                                />
                            </Input.Group>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Внутри">
                            <Select
                                items={baseCovers}
                                value={baseCoverInside}
                                onChange={(value) => dispatch(setBaseCoverInside(value))}
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Divider >Накладки основного замка сувальда (если двухсистемный замок)</Divider>  
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item label="Снаружи">
                            <Select
                                items={baseCovers2}
                                value={baseCoverOutside2}
                                disabled={!isBaseCover2}
                                onChange={(value) => dispatch(setBaseCoverOutside2(value))}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Внутри">
                            <Select
                                items={baseCovers2}
                                value={baseCoverInside2}
                                disabled={!isBaseCover2}
                                onChange={(value) => dispatch(setBaseCoverInside2(value))}
                            />
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
                        <Form.Item label="Снаружи">
                            <Select
                                items={optionalCovers}
                                value={optionalCoverOutside}
                                onChange={(value) => dispatch(setIsOptonalCoverOutside(value))}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Внутри">
                            <Select
                                items={optionalCovers}
                                value={optionalCoverInside}
                                onChange={(value) => dispatch(setIsOptonalCoverInside(value))}
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Divider>Глазок</Divider>             
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item label="Глазок">
                            <Select
                                items={eyes}
                                value={eye}
                                onChange={(value) => dispatch(setEye(value))}
                            />
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
        width: 90%;
    }
`;

const Title = styled.label`
    
`;

