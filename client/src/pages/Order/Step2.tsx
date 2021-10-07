import React, { FC } from 'react';
import styled from 'styled-components';
import { Form, InputNumber } from 'antd';
import { useAppSelector } from '../../hooks/useAppSelector';
import Select from '../../components/Select';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { 
    setContour, setDoorThick, setHeight, setIsThreeHinge, setLocationHinge, setModelBox, setOpeningType, setThickMetalBox, setThickMetalLeaf, setTypeHinge, setWidth, setWidthDouble 
} from '../../store/slices/orderSlice';
import { changeModel, changeIsDouble, changeOpeningType } from '../../store/actions/orderActions';
import Checkbox from 'antd/lib/checkbox/Checkbox';


const Step2: FC = () => {
    const dispatch = useAppDispatch()

    const {
        models, contours, doorThicks, modelBoxes, openingTypes, locationHinges, typeHinges, thickMetalLeafs,
        thickMetalBoxes
    } = useAppSelector(state => state.order)
    
    const {
        model, contour, doorThick, height, width,
        modelBox, openingType, isDouble, widthDouble, locationHinge, isThreeHinge, typeHinge,
        thickMetalLeaf, thickMetalBox
    } = useAppSelector(state => state.order.order)


    return (
        <Container>
            <Form
                name="basic"
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 5 }}
                size = "small"             
            >   
                <Form.Item label="Модель двери*">
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
                    <InputNumber  value={height} onChange={(value)=> dispatch(setHeight(value))} />
                </Form.Item>

                <Form.Item label="Ширина двери">
                    <InputNumber  value={width} onChange={(value)=> dispatch(setWidth(value))} />
                </Form.Item>

                <Form.Item label="Модель коробки">
                    <Select 
                        items={modelBoxes} 
                        value={modelBox} 
                        onChange={ (value) => dispatch(setModelBox(value))}                        
                    />
                </Form.Item>

                <Form.Item label="Тип открывания*">
                    <Select 
                        items={openingTypes} 
                        value={openingType} 
                        onChange={ (value) => dispatch(changeOpeningType(value))}                        
                    />
                </Form.Item>

                <Form.Item label="Двустворчатая">
                    <Checkbox checked={isDouble} onChange={(e)=> dispatch(changeIsDouble(e.target.checked))} />
                </Form.Item>

                <Form.Item label="Ширина раб. створки">
                    <InputNumber disabled={!isDouble} value={widthDouble} onChange={(value)=> dispatch(setWidthDouble(value))} />
                </Form.Item>

                <Form.Item label="Расположение петель">
                    <Select 
                        items={locationHinges} 
                        value={locationHinge} 
                        onChange={ (value) => dispatch(setLocationHinge(value))}                        
                    />
                </Form.Item>

                <Form.Item label="3 петли">
                    <Checkbox checked={isThreeHinge} onChange={(e)=> dispatch(setIsThreeHinge(e.target.checked))} />
                </Form.Item>

                <Form.Item label="Тип петель">
                    <Select 
                        items={typeHinges} 
                        value={typeHinge} 
                        onChange={ (value) => dispatch(setTypeHinge(value))}                        
                    />
                </Form.Item>
                
                <Form.Item label="Толщина металла полотна">
                    <Select 
                        items={thickMetalLeafs} 
                        value={thickMetalLeaf} 
                        onChange={ (value) => dispatch(setThickMetalLeaf(value))}                        
                    />
                </Form.Item>

                <Form.Item label="Толщина металла короба">
                    <Select 
                        items={thickMetalBoxes} 
                        value={thickMetalBox} 
                        onChange={ (value) => dispatch(setThickMetalBox(value))}                        
                    />
                </Form.Item>
            </Form>
        </Container>
    )
}

export default Step2

const Container = styled.div`
    
`;