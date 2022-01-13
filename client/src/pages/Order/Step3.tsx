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
                <Divider >Основной замок</Divider>                
                <Form.Item 
                    label="Основной замок*" {...layout1}
                    { ...validateErrors.baseLock && { help: validateErrors.baseLock, validateStatus: 'error'}}
                >
                    <Select
                        items={staticTables.baseLocks}
                        value={currentOrder.baseLock}
                        onChange={(value) => dispatch(orderActions.setBaseLock(value))}
                    />
                </Form.Item>
            
                <Form.Item 
                    label="Цилиндр" 
                    {...layout1}
                    { ...validateErrors.baseCylinder && { help: validateErrors.baseCylinder, validateStatus: 'error'}}
                >
                    <Select
                        items={staticTables.cylinders}
                        value={currentOrder.baseCylinder}
                        disabled={!block.isBaseCylinder}
                        onChange={(value) => dispatch(orderActions.setOrderFieldStr({fieldName: "baseCylinder", value}))}
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
                                items={staticTables.spinners}
                                value={currentOrder.lockSpinner}
                                disabled={!block.isLockSpinner}
                                onChange={(value) => dispatch(orderActions.setOrderFieldStr({fieldName: "lockSpinner", value}))}
                            />
                        </Col>
                        <Col span={10}>
                            <Select 
                                items={staticTables.fittingColors}
                                value={currentOrder.lockSpinnerColor}
                                disabled={!block.isLockSpinner}
                                firstOption="выберите цвет"
                                onChange={(value) => dispatch(orderActions.setOrderFieldStr({fieldName: "lockSpinnerColor", value}))}
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
                                items={computedTables.baseCovers}
                                value={currentOrder.baseCoverOutside}
                                disabled={!block.isBaseCover}
                                onChange={(value) => dispatch(orderActions.setOrderFieldStr({fieldName: "baseCoverOutside", value}))}
                            />
                        </Col>
                        <Col span={10}>
                            <Select 
                                items={staticTables.fittingColors}
                                value={currentOrder.baseCoverColorOutside}
                                disabled={!block.isBaseCover}
                                firstOption="выберите цвет"
                                onChange={(value) => dispatch(orderActions.setOrderFieldStr({fieldName: "baseCoverColorOutside", value}))}
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
                                items={computedTables.baseCovers}
                                value={currentOrder.baseCoverInside}
                                disabled={!block.isBaseCover}
                                onChange={(value) => dispatch(orderActions.setOrderFieldStr({fieldName: "baseCoverInside", value}))}
                            />
                        </Col>
                        <Col span={10}>
                            <Select 
                                items={staticTables.fittingColors}
                                value={currentOrder.baseCoverColorInside}
                                disabled={!block.isBaseCover}
                                firstOption="выберите цвет"
                                onChange={(value) => dispatch(orderActions.setOrderFieldStr({fieldName: "baseCoverColorInside", value}))}
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
                                items={computedTables.baseCovers2}
                                value={currentOrder.baseCoverOutside2}
                                disabled={!block.isBaseCover2}
                                onChange={(value) => dispatch(orderActions.setOrderFieldStr({fieldName: "baseCoverOutside2", value}))}
                            />
                        </Col>
                        <Col span={10}>
                            <Select 
                                items={staticTables.fittingColors}
                                value={currentOrder.baseCoverColorOutside2}
                                disabled={!block.isBaseCover2}
                                firstOption="выберите цвет"
                                onChange={(value) => dispatch(orderActions.setOrderFieldStr({fieldName: "baseCoverColorOutside2", value}))}
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
                                items={computedTables.baseCovers2}
                                value={currentOrder.baseCoverInside2}
                                disabled={!block.isBaseCover2}
                                onChange={(value) => dispatch(orderActions.setOrderFieldStr({fieldName: "baseCoverInside2", value}))}
                            />
                        </Col>
                        <Col span={10}>
                            <Select 
                                items={staticTables.fittingColors}
                                value={currentOrder.baseCoverColorInside2}
                                disabled={!block.isBaseCover2}
                                firstOption="выберите цвет"                                       
                                onChange={(value) => dispatch(orderActions.setOrderFieldStr({fieldName: "baseCoverColorInside2", value}))}
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
