import React, { FC } from 'react';
import styled from 'styled-components';
import { Form, Input } from 'antd';
import { useAppSelector } from '../../hooks/useAppSelector';
import Select from '../../components/Select';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { 
    setContour, setDoorThick, setHeight, setModelBox, setOpeningType, setWidth, setWidthDouble 
} from '../../store/slices/orderSlice';
import { changeModel, changeIsDouble } from '../../store/actions/orderActions';
import Checkbox from 'antd/lib/checkbox/Checkbox';


const Step2: FC = () => {
    const dispatch = useAppDispatch()

    const {
        models, contours, doorThicks, modelBoxes, openingTypes
    } = useAppSelector(state => state.order)
    
    const {
        model, contour, doorThick, height, width,
        modelBox, openingType, isDouble, widthDouble,
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

                <Form.Item label="Тип открывания">
                    <Select 
                        items={openingTypes} 
                        value={openingType} 
                        onChange={ (value) => dispatch(setOpeningType(value))}                        
                    />
                </Form.Item>

                <Form.Item label="Двустворчатая">
                    <Checkbox checked={isDouble} onChange={(e)=> dispatch(changeIsDouble(e.target.checked))} />
                </Form.Item>

                <Form.Item label="Ширина раб. створки">
                    <Input disabled={!isDouble} value={widthDouble} onChange={(e)=> dispatch(setWidthDouble(Number(e.target.value)))} />
                </Form.Item>
            </Form>
        </Container>
    )
}

export default Step2

const Container = styled.div`
    
`;