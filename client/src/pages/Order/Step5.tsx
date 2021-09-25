import React, { FC } from 'react';
import styled from 'styled-components';
import { Form, InputNumber } from 'antd';
import { useAppSelector } from '../../hooks/useAppSelector';
import Select from '../../components/Select';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { changeTypeWindow, changeWindow } from '../../store/actions/orderActions';
import { setColorForge, setColorTint, setHeightWindow, setPatinaForge, setThickWindow, setWidthWindow } from '../../store/slices/orderSlice';


const Step5: FC = () => {
    const dispatch = useAppDispatch()

    const {
        typeWindows, currentWindows, colorTints, colorForges, patinaForges, isColorForge, isPatinaForge
    } = useAppSelector(state => state.order)
    
    const {
        typeWindow, doorWindow, colorTint, colorForge, patinaForge, heightWindow, widthWindow, thickWindow
    } = useAppSelector(state => state.order.order)


    return (
        <Container>
            <Form
                name="basic"
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 5 }}
                size = "small"                 
            >                   
                <Form.Item label="Тип окна*">
                    <Select 
                        items={typeWindows} 
                        value={typeWindow} 
                        onChange={ (value) => dispatch(changeTypeWindow(value))}                       
                    />
                </Form.Item>
                <Form.Item label="Окно*">
                    <Select 
                        items={currentWindows} 
                        value={doorWindow} 
                        onChange={ (value) => dispatch(changeWindow(value))}                       
                    />
                </Form.Item>
                <Form.Item label="Цвет тонировки">
                    <Select 
                        items={colorTints} 
                        value={colorTint} 
                        onChange={ (value) => dispatch(setColorTint(value))}                        
                    />
                </Form.Item> 
                <Form.Item label="Цвет ковки">
                    <Select 
                        items={colorForges} 
                        value={colorForge}
                        disabled={!isColorForge}
                        onChange={ (value) => dispatch(setColorForge(value))}                       
                    />
                </Form.Item>
                <Form.Item label="Патина на ковке">
                    <Select 
                        items={patinaForges} 
                        value={patinaForge}
                        disabled={!isPatinaForge}
                        onChange={ (value) => dispatch(setPatinaForge(value))}                       
                    />
                </Form.Item>
                <Form.Item label="Высота стеклопакета">
                    <InputNumber value={heightWindow} onChange={(value)=> dispatch(setHeightWindow(value))} />
                </Form.Item>
                <Form.Item label="Ширина стеклопакета">
                    <InputNumber  value={widthWindow} onChange={(value)=>  dispatch(setWidthWindow(value))} />
                </Form.Item>
                <Form.Item label="Толщина стеклопакета">
                    <InputNumber  value={thickWindow} onChange={(value)=> dispatch(setThickWindow(value))} />
                </Form.Item> 
            </Form>
        </Container>
    )
}

export default Step5

const Container = styled.div`
    
`;