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
                                items={staticTables.spinners}
                                value={currentOrder.lockSpinner}
                                disabled={!block.isLockSpinner}
                                onChange={(value) => dispatch(orderActions.setLockSpinner(value))}
                            />
                        </Col>
                        <Col span={10}>
                            <Select 
                                items={staticTables.fittingColors}
                                value={currentOrder.lockSpinnerColor}
                                disabled={!block.isLockSpinner}
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
                                items={computedTables.baseCovers}
                                value={currentOrder.baseCoverOutside}
                                disabled={!block.isBaseCover}
                                onChange={(value) => dispatch(orderActions.setBaseCoverOutside(value))}
                            />
                        </Col>
                        <Col span={10}>
                            <Select 
                                items={staticTables.fittingColors}
                                value={currentOrder.baseCoverColorOutside}
                                disabled={!block.isBaseCover}
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
                                items={computedTables.baseCovers}
                                value={currentOrder.baseCoverInside}
                                disabled={!block.isBaseCover}
                                onChange={(value) => dispatch(orderActions.setBaseCoverInside(value))}
                            />
                        </Col>
                        <Col span={10}>
                            <Select 
                                items={staticTables.fittingColors}
                                value={currentOrder.baseCoverColorInside}
                                disabled={!block.isBaseCover}
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
                                items={computedTables.baseCovers2}
                                value={currentOrder.baseCoverOutside2}
                                disabled={!block.isBaseCover2}
                                onChange={(value) => dispatch(orderActions.setBaseCoverOutside2(value))}
                            />
                        </Col>
                        <Col span={10}>
                            <Select 
                                items={staticTables.fittingColors}
                                value={currentOrder.baseCoverColorOutside2}
                                disabled={!block.isBaseCover2}
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
                                items={computedTables.baseCovers2}
                                value={currentOrder.baseCoverInside2}
                                disabled={!block.isBaseCover2}
                                onChange={(value) => dispatch(orderActions.setBaseCoverInside2(value))}
                            />
                        </Col>
                        <Col span={10}>
                            <Select 
                                items={staticTables.fittingColors}
                                value={currentOrder.baseCoverColorInside2}
                                disabled={!block.isBaseCover2}
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
                            items={staticTables.optionalLocks}
                            value={currentOrder.optionalLock}
                            onChange={(value) => dispatch(orderActions.setOptionalLock(value))}
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
                                items={computedTables.optionalCovers}
                                value={currentOrder.optionalCoverOutside}
                                disabled={!block.isOptionalCover}
                                onChange={(value) => dispatch(orderActions.setOptonalCoverOutside(value))}
                            />
                        </Col>
                        <Col span={10}>
                            <Select 
                                items={staticTables.fittingColors}
                                value={currentOrder.optionalCoverColorOutside}
                                disabled={!block.isOptionalCover}
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
                                items={computedTables.optionalCovers}
                                value={currentOrder.optionalCoverInside}
                                disabled={!block.isOptionalCover}
                                onChange={(value) => dispatch(orderActions.setOptonalCoverInside(value))}
                            />
                        </Col>
                        <Col span={10}>
                            <Select 
                                items={staticTables.fittingColors}
                                value={currentOrder.optionalCoverColorInside}
                                disabled={!block.isOptionalCover}
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
                        items={staticTables.eyeLocations}
                        value={currentOrder.eyeLocation}
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
