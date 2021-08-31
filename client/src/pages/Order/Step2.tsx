import React, { FC } from 'react';
import styled from 'styled-components';
import { Form, Input } from 'antd';
import { useAppSelector } from '../../hooks/useAppSelector';
import Select from '../../components/Select';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { 
    setContour, setDoorThick, setHeight, setModelBox, setWidth 
} from '../../store/slices/orderSlice';
import { changeModel } from '../../store/actions/orderActions';


const Step2: FC = () => {
    const dispatch = useAppDispatch()

    const {
        models, contours, doorThicks, modelBoxes
    } = useAppSelector(state => state.order)
    
    const {
        model, contour, doorThick, height, width,
        modelBox
    } = useAppSelector(state => state.order.order)


    return (
        <Container>
            <Form
                name="basic"
                labelCol={{ span: 9 }}
                wrapperCol={{ span: 6 }}                
            >   
                <Form.Item label="Модель двери">
                    <Select 
                        items={models} 
                        value={model} 
                        onChange={ (value) => dispatch(changeModel(value))}                       
                    />
                </Form.Item>

                <Form.Item label="Количество контуров">
                    <Select 
                        items={contours} 
                        value={contour} 
                        onChange={ (value) => dispatch(setContour(value))}                        
                    />
                </Form.Item>

                <Form.Item label="Толщина полотна">
                    <Select 
                        items={doorThicks} 
                        value={doorThick} 
                        onChange={ (value) => dispatch(setDoorThick(value))}                        
                    />
                </Form.Item>

                <Form.Item label="Высота двери">
                    <Input  value={height} onChange={(e)=> dispatch(setHeight(e.target.value))} />
                </Form.Item>

                <Form.Item label="Ширина двери">
                    <Input  value={width} onChange={(e)=> dispatch(setWidth(e.target.value))} />
                </Form.Item>

                <Form.Item label="Модель коробки">
                    <Select 
                        items={modelBoxes} 
                        value={modelBox} 
                        onChange={ (value) => dispatch(setModelBox(value))}                        
                    />
                </Form.Item>

            </Form>
        </Container>
    )
}

export default Step2

const Container = styled.div`
    
`;