import React, { FC } from 'react';
import styled from 'styled-components';
import { Form, Input } from 'antd';
import { useAppSelector } from '../../hooks/useAppSelector';
import Select from '../../components/Select';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { changeTypeWindow } from '../../store/actions/orderActions';
import { setColorForge, setColorTint, setDoorWindow } from '../../store/slices/orderSlice';


const Step5: FC = () => {
    const dispatch = useAppDispatch()

    const {
        typeWindows, currentWindows, colorTints, colorForges
    } = useAppSelector(state => state.order)
    
    const {
        typeWindow, doorWindow, colorTint, colorForge
    } = useAppSelector(state => state.order.order)


    return (
        <Container>
            <Form
                name="basic"
                labelCol={{ span: 9 }}
                wrapperCol={{ span: 6 }}                
            >                   
                <Form.Item label="Тип окна">
                    <Select 
                        items={typeWindows} 
                        value={typeWindow} 
                        onChange={ (value) => dispatch(changeTypeWindow(value))}                       
                    />
                </Form.Item>
                <Form.Item label="Окно">
                    <Select 
                        items={currentWindows} 
                        value={doorWindow} 
                        onChange={ (value) => dispatch(setDoorWindow(value))}                       
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
                        onChange={ (value) => dispatch(setColorForge(value))}                       
                    />
                </Form.Item>
                <Form.Item label="Патина на ковке">
                    <Select 
                        items={typeWindows} 
                        value={typeWindow} 
                        onChange={ (value) => dispatch(changeTypeWindow(value))}                       
                    />
                </Form.Item>
                <Form.Item label="Высота стеклопакета">
                    <Input  value={""} onChange={(e)=> console.log(e.target.value)} />
                </Form.Item>
                <Form.Item label="Ширина стеклопакета">
                    <Input  value={""} onChange={(e)=> console.log(e.target.value)} />
                </Form.Item>
                <Form.Item label="Толщина стеклопакета">
                    <Input  value={""} onChange={(e)=> console.log(e.target.value)} />
                </Form.Item> 
            </Form>
        </Container>
    )
}

export default Step5

const Container = styled.div`
    
`;