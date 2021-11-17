import React, { FC } from 'react';
import styled from 'styled-components';
import { Col, Divider, Form, InputNumber, Row } from 'antd';
import { useAppSelector } from '../../hooks/useAppSelector';
import Select from '../../components/Select';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { 
    setContour, setDoorThick, setHeight, setLocationHinge, setModelBox, setThickMetalBox, setThickMetalLeaf, setTypeHinge, setWidth, setWidthDouble 
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
        modelBox, openingType, isDouble, widthDouble, locationHinge, typeHinge,
        thickMetalLeaf, thickMetalBox
    } = useAppSelector(state => state.order.order)


    return (
        <Container>
            <Form
                name="basic"                
                size = "middle"
                labelCol={{ span: 12 }}
                wrapperCol={{ span: 12 }}                                           
            >
            <Divider >Конфигураци модели</Divider>           
            <Row gutter={24} >
                <Col span={12}>                    
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
                </Col>
                <Col span={12}> 
                    <Form.Item>                   
                        <Checkbox checked={isDouble} onChange={(e)=> dispatch(changeIsDouble(e.target.checked))} >Двустворчатая</Checkbox>
                    </Form.Item>
                    <Form.Item label="Высота двери">
                        <InputNumber  value={height} onChange={(value)=> dispatch(setHeight(value))} />
                    </Form.Item>

                    <Form.Item label="Ширина двери">
                        <InputNumber  value={width} onChange={(value)=> dispatch(setWidth(value))} />
                    </Form.Item>
                    <Form.Item label="Ширина раб. створки">
                        <InputNumber disabled={!isDouble} value={widthDouble} onChange={(value)=> dispatch(setWidthDouble(value))} />
                    </Form.Item>
                </Col>
            </Row>

            <Divider >Петли</Divider>                
            <Row gutter={12}>
                <Col span={8}>                
                    <Form.Item label="Расположение петель">
                        <Select 
                            items={locationHinges} 
                            value={locationHinge} 
                            onChange={ (value) => dispatch(setLocationHinge(value))}                        
                        />
                    </Form.Item>
                </Col>
                
                <Col span={8}> 
                    <Form.Item label="Тип петель">
                        <Select 
                            items={typeHinges} 
                            value={typeHinge} 
                            onChange={ (value) => dispatch(setTypeHinge(value))}                        
                        />
                    </Form.Item>
                </Col>

                <Col span={8}>
                    <Form.Item label="Количество петель?">
                        <Select 
                            items={typeHinges} 
                            value={typeHinge} 
                            onChange={ (value) => dispatch(setTypeHinge(value))}                        
                        />
                    </Form.Item>
                    {/* <Form.Item label="Третья петля">
                        <Checkbox checked={isThreeHinge} onChange={(e)=> dispatch(setIsThreeHinge(e.target.checked))}/>
                    </Form.Item> */}
                </Col>
            </Row> 

            <Divider >Толщина металла</Divider>    
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item label="Толщина металла полотна">
                        <Select 
                            items={thickMetalLeafs} 
                            value={thickMetalLeaf} 
                            onChange={ (value) => dispatch(setThickMetalLeaf(value))}                        
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label="Толщина металла короба">
                        <Select 
                            items={thickMetalBoxes} 
                            value={thickMetalBox} 
                            onChange={ (value) => dispatch(setThickMetalBox(value))}                        
                        />
                    </Form.Item>
                </Col>
            </Row>                 
        </Form>    
        </Container>
    )
}

export default Step2

const Container = styled.div`         
    display: flex;
    justify-content: center;
    width: 90%;
    >*{
        width: 90%;
    }
`;