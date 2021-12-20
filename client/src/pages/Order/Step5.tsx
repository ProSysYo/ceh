import React, { FC } from 'react';
import styled from 'styled-components';
import { Form, InputNumber } from 'antd';
import { useAppSelector } from '../../hooks/useAppSelector';
import Select from '../../components/Select';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { orderActions } from '../../store/slices/orderSlice';


const Step5: FC = () => {
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
                labelCol={{ span: 9 }}
                wrapperCol={{ span: 5 }}
                size = "middle"                 
            >                   
                <Form.Item 
                    label="Тип окна*"
                    { ...validateErrors.typeWindow && { help: validateErrors.typeWindow, validateStatus: 'error'}}
                >
                    <Select 
                        items={staticTables.typeWindows} 
                        value={currentOrder.typeWindow} 
                        onChange={ (value) => dispatch(orderActions.setTypeWindow(value))}                       
                    />
                </Form.Item>
                <Form.Item 
                    label="Окно*"
                    { ...validateErrors.doorWindow && { help: validateErrors.doorWindow, validateStatus: 'error'}}
                >
                    <Select 
                        items={computedTables.currentWindows} 
                        value={currentOrder.doorWindow} 
                        onChange={ (value) => dispatch(orderActions.setDoorWindow(value))}                       
                    />
                </Form.Item>
                <Form.Item 
                    label="Цвет тонировки"
                    { ...validateErrors.colorTint && { help: validateErrors.colorTint, validateStatus: 'error'}}
                >
                    <Select 
                        items={staticTables.colorTints} 
                        value={currentOrder.colorTint} 
                        onChange={ (value) => dispatch(orderActions.setColorTint(value))}                        
                    />
                </Form.Item> 
                <Form.Item 
                    label="Цвет ковки"
                    { ...validateErrors.colorForge && { help: validateErrors.colorForge, validateStatus: 'error'}}
                >
                    <Select 
                        items={staticTables.colorForges} 
                        value={currentOrder.colorForge}
                        disabled={!block.isColorForge}
                        onChange={ (value) => dispatch(orderActions.setColorForge(value))}                       
                    />
                </Form.Item>
                <Form.Item 
                    label="Патина на ковке"
                    { ...validateErrors.patinaForge && { help: validateErrors.patinaForge, validateStatus: 'error'}}
                >
                    <Select 
                        items={staticTables.patinaForges} 
                        value={currentOrder.patinaForge}
                        disabled={!block.isPatinaForge}
                        onChange={ (value) => dispatch(orderActions.setPatinaForge(value))}                       
                    />
                </Form.Item>
                <Form.Item 
                    label="Высота стеклопакета"
                    { ...validateErrors.heightWindow && { help: validateErrors.heightWindow, validateStatus: 'error'}}
                >
                    <InputNumber value={currentOrder.heightWindow} onChange={(value)=> dispatch(orderActions.setHeightWindow(value))} />
                </Form.Item>
                <Form.Item 
                    label="Ширина стеклопакета"
                    { ...validateErrors.widthWindow && { help: validateErrors.widthWindow, validateStatus: 'error'}}
                >
                    <InputNumber  value={currentOrder.widthWindow} onChange={(value)=>  dispatch(orderActions.setWidthWindow(value))} />
                </Form.Item>
                <Form.Item 
                    label="Толщина стеклопакета"
                    { ...validateErrors.thickWindow && { help: validateErrors.thickWindow, validateStatus: 'error'}}
                >
                    <InputNumber  value={currentOrder.thickWindow} onChange={(value)=> dispatch(orderActions.setThickWindow(value))} />
                </Form.Item> 
            </Form>
        </Container>
    )
}

export default Step5

const Container = styled.div`
    
`;