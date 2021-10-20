import React, { FC } from 'react';
import styled from 'styled-components';
import { Col, Divider, Form, Row } from 'antd';
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

const formItemLayout = {
    labelCol: { span: 10 },
    wrapperCol: { span: 6 },
};
const formTailLayout = {
    labelCol: { span: 10 },
    wrapperCol: { span: 12 },
};


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
                size = "small"  
            >
                <Divider >Основной замок</Divider>
                
                <Form.Item label="Основной замок*" {...formItemLayout}>
                    <Select
                        items={baseLocks}
                        value={baseLock}
                        onChange={(value) => dispatch(changeBaseLock(value))}
                    />
                </Form.Item>

                <Form.Item label={<Title>Вертушок основного замка</Title>} {...formItemLayout}>
                    <Select
                        items={spinners}
                        value={lockSpinner}
                        disabled={!isLockSpinner}
                        onChange={(value) => dispatch(setLockSpinner(value))}
                    />
                </Form.Item>

                <Form.Item label="Цилиндр основного замка" {...formItemLayout}>
                    <Select
                        items={cylinders}
                        value={baseCylinder}
                        disabled={!isBaseCylinder}
                        onChange={(value) => dispatch(setBaseCylinder(value))}
                    />
                </Form.Item>

                <Form.Item label="Накладки основного замка" {...formTailLayout}>
                    <Row gutter={10}>
                        <Col span={12}>
                            <Select
                                items={baseCovers}
                                value={baseCoverOutside}
                                onChange={(value) => dispatch(setBaseCoverOutside(value))}
                            />
                        </Col>
                        <Col span={12}>
                            <Select
                                items={baseCovers}
                                value={baseCoverInside}
                                onChange={(value) => dispatch(setBaseCoverInside(value))}
                            />
                        </Col>
                    </Row>
                </Form.Item>

                <Form.Item label="Накладки основного замка 2 (сувальда)" {...formTailLayout}>
                    <Row gutter={10}>
                        <Col span={12}>
                            <Select
                                items={baseCovers2}
                                value={baseCoverOutside2}
                                disabled={!isBaseCover2}
                                onChange={(value) => dispatch(setBaseCoverOutside2(value))}
                            />
                        </Col>

                        <Col span={12}>
                            <Select
                                items={baseCovers2}
                                value={baseCoverInside2}
                                disabled={!isBaseCover2}
                                onChange={(value) => dispatch(setBaseCoverInside2(value))}
                            />
                        </Col>
                    </Row>
                </Form.Item>

                <Divider >Дополнительный замок</Divider>
                <Form.Item label="Дополнительный замок*" {...formItemLayout}>
                    <Select
                        items={optionalLocks}
                        value={optionalLock}
                        onChange={(value) => dispatch(changeOptionalLock(value))}
                    />
                </Form.Item>

                <Form.Item label="Цилиндр дополнительного замка" {...formItemLayout}>
                    <Select
                        items={cylinders}
                        value={optionalCylinder}
                        disabled={!isOptionalCylinder}
                        onChange={(value) => dispatch(setOptionalCylinder(value))}
                    />
                </Form.Item>

                <Form.Item label="Накладки дополнительного замка" {...formTailLayout}>
                    <Row gutter={10}>
                        <Col span={12}>
                            <Select
                                items={optionalCovers}
                                value={optionalCoverOutside}
                                onChange={(value) => dispatch(setIsOptonalCoverOutside(value))}
                            />
                        </Col>
                        <Col span={12}>
                            <Select
                                items={optionalCovers}
                                value={optionalCoverInside}
                                onChange={(value) => dispatch(setIsOptonalCoverInside(value))}
                            />
                        </Col>
                    </Row>
                </Form.Item>

                <Divider></Divider>
                <Form.Item label="Глазок" {...formTailLayout}>
                    <Row gutter={10}>
                        <Col span={12}>
                            <Select
                                items={eyes}
                                value={eye}
                                onChange={(value) => dispatch(setEye(value))}
                            />
                        </Col>
                        <Col span={12}>
                            <Select
                                items={eyeLocations}
                                value={eyeLocation}
                                onChange={(value) => dispatch(setEyeLocation(value))}
                            />
                        </Col>
                    </Row>
                </Form.Item>

                <Form.Item label="Ручка" {...formItemLayout}>
                    <Select
                        items={handles}
                        value={handle}
                        onChange={(value) => dispatch(setHandle(value))}
                    />
                </Form.Item>

                <Form.Item label="Вертушок" {...formItemLayout}>
                    <Select
                        items={spinners}
                        value={spinner}
                        onChange={(value) => dispatch(setSpinner(value))}
                    />
                </Form.Item>
            </Form>
        </Container>
    )
}

export default Step3

const Container = styled.div`
    
`;

const Title = styled.label`
    
`;

