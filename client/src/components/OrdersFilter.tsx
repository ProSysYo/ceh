import React, { useState} from 'react'
import styled from 'styled-components';
import { FunnelPlotOutlined, ClearOutlined } from '@ant-design/icons';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { useEffect } from 'react';
import { fetchAll, getOrders } from '../store/actions/orderActions';
import { Button, Form, Input, InputNumber } from 'antd';
import Select from './Select';
import Checkbox from 'antd/lib/checkbox/Checkbox';

const layout1 = {labelCol:{ span: 8 }, wrapperCol:{ span: 14 }}
//const layout2 = {labelCol:{ span: 8 }, wrapperCol:{ span: 10 }}

const contours = [
    {value: 1, name: 1},
    {value: 2, name: 2},
    {value: 3, name: 3},
]

const doorThicks = [
    {value: 60, name: 60},
    {value: 70, name: 70},
    {value: 80, name: 80},
    {value: 90, name: 90},
    {value: 100, name: 100},
]

const OrdersFilter: React.FC = () => {
    const [filters, setFilters] = useState({})
    const [form] = Form.useForm();

    const dispatch = useAppDispatch()
    const { order } = useAppSelector(state => state)

    useEffect(() => {
        dispatch(fetchAll())
    }, [dispatch])

    const handleInputChange = (value: any) => {
        console.log(value);
        
         setFilters((prev) => ({ ...prev, ...value })) 
    }
    
    const resetFilters = () => {        
        form.resetFields()
        setFilters({})
    }   

    return (
        <>
            <Filters>
                <Form form={form} onValuesChange={(val) => handleInputChange(val)} size="small">
                    <Form.Item name="number" label="Номер заказа" {...layout1}>
                        <Input />
                    </Form.Item>

                    <Form.Item name="customer" label="Заказчик" {...layout1}>
                        <Select
                            items={order.customers}                                                  
                        />
                    </Form.Item>

                    <Form.Item name="numberCustomer" label="Номер заказчика" {...layout1}>
                        <Input />
                    </Form.Item>

                    <Form.Item name="party" label="Партийность" {...layout1}>
                        <Select
                            items={order.parties}                                                  
                        />
                    </Form.Item>

                    <Form.Item name="model" label="Модель двери" {...layout1}>
                        <Select
                            items={order.models}                                                  
                        />
                    </Form.Item>

                    <Form.Item name="isDouble" label="Двустворчатая" valuePropName="checked" {...layout1}>
                        <Checkbox />
                    </Form.Item>

                    <Form.Item name="contour" label="Количество контуров"  {...layout1}>
                        <Select
                            items={contours}                                                      
                        />
                    </Form.Item>

                    <Form.Item name="doorThick" label="Толщина двери"  {...layout1}>
                        <Select
                            items={doorThicks}                                                       
                        />
                    </Form.Item>

                    <Form.Item name="modelBox" label="Модель коробки" {...layout1}>
                        <Select
                            items={order.modelBoxes}                                                        
                        />
                    </Form.Item>

                    <Form.Item name="openingType" label="Тип открывания" {...layout1}>
                        <Select
                            items={order.openingTypes}                                                        
                        />
                    </Form.Item>

                    <Form.Item name="height" label="Высота двери" {...layout1}>
                        <InputNumber  />
                    </Form.Item>

                    <Form.Item name="width" label="Ширина двери" {...layout1}>
                        <InputNumber  />
                    </Form.Item>

                    <Form.Item name="widthDouble" label="Ширина доп. створки" {...layout1}>
                        <InputNumber  />
                    </Form.Item>

                    <Form.Item name="locationHinge" label="Расположение петель" {...layout1}>
                        <Select
                            items={order.locationHinges}                                                        
                        />
                    </Form.Item>

                    <Form.Item name="typeHinge" label="Тип петель" {...layout1}>
                        <Select
                            items={order.typeHinges}                                                        
                        />
                    </Form.Item>                    

                    <Form.Item name="countHinge" label="Количество петель" {...layout1}>
                        <Select
                            items={order.hingeCounts}                                                        
                        />
                    </Form.Item>

                    <Form.Item name="thickMetalLeaf" label="t металла полотна" {...layout1}>
                        <Select
                            items={order.thickMetalLeafs}                                                        
                        />
                    </Form.Item>

                    <Form.Item name="thickMetalBox" label="t металла короба" {...layout1}>
                        <Select
                            items={order.thickMetalBoxes}                                                        
                        />
                    </Form.Item>





                    <Form.Item name="name" label="name" {...layout1}>
                        <Select
                            items={order.locationHinges}                                                        
                        />
                    </Form.Item>
                </Form>  
            </Filters>
            
            <div>
                <Button icon={<FunnelPlotOutlined />}  onClick={() => dispatch(getOrders(filters))}>Подобрать</Button>
                <Button icon={<ClearOutlined />} onClick={resetFilters}>Сброс</Button>
            </div>
        </>

    )
}

export default OrdersFilter

const Filters = styled.div`
    height: 85vh;    
    overflow-x: hidden;    
`;