import React, { FC } from 'react';
import styled from 'styled-components';
import { Form } from 'antd';
import { useAppSelector } from '../../hooks/useAppSelector';
import Select from '../../components/Select';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { orderActions } from '../../store/slices/orderSlice';


const Step8: FC = () => {
    const dispatch = useAppDispatch()

    const { staticTables } = useAppSelector(state => state.order)
    const { computedTables } = useAppSelector(state => state.order)    
    const { currentOrder } = useAppSelector(state => state.order)
    const { validateErrors } = useAppSelector(state => state.order)

    return (
        <Container>
            <Form
                name="basic"
                labelCol={{ span: 9 }}
                wrapperCol={{ span: 5 }}
                size = "middle"                 
            >                   
                <Form.Item 
                    label="Полка слева"
                    { ...validateErrors.typeWindow && { help: validateErrors.typeWindow, validateStatus: 'error'}}
                >
                    <Select 
                        items={staticTables.typeWindows} 
                        value={currentOrder.typeWindow} 
                        onChange={ (value) => dispatch(orderActions.setTypeWindow(value))}                       
                    />
                </Form.Item>
                <Form.Item 
                    label="Полка справа"
                    { ...validateErrors.doorWindow && { help: validateErrors.doorWindow, validateStatus: 'error'}}
                >
                    <Select 
                        items={computedTables.currentWindows} 
                        value={currentOrder.doorWindow} 
                        onChange={ (value) => dispatch(orderActions.setDoorWindow(value))}                       
                    />
                </Form.Item>
                <Form.Item 
                    label="Фрамуга"
                    { ...validateErrors.colorTint && { help: validateErrors.colorTint, validateStatus: 'error'}}
                >
                    <Select 
                        items={staticTables.colorTints} 
                        value={currentOrder.colorTint} 
                        onChange={ (value) => dispatch(orderActions.setOrderFieldStr({fieldName: "colorTint", value}))}                        
                    />
                </Form.Item>                             
            </Form>
        </Container>
    )
}

export default Step8

const Container = styled.div`
    
`;