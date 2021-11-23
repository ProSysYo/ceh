import React, { useState} from 'react'
import { FileAddOutlined } from '@ant-design/icons';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { useEffect } from 'react';
import { fetchAll, getOrders } from '../store/actions/orderActions';
import { Button, Form, InputNumber } from 'antd';
import Select from './Select';

const OrdersFilter: React.FC = () => {
    const [filters, setFilters] = useState({})

    const dispatch = useAppDispatch()
    const { order } = useAppSelector(state => state)

    useEffect(() => {
        dispatch(fetchAll())
    }, [dispatch])

    const handleInputChange = (val: string|number, name: string) => {        
         setFilters({ ...filters, [name]: val })
    }
    return (
        <div>
            <Form.Item label="Модель двери*">
                <Select
                    items={order.models}
                    onChange={(val) => handleInputChange(val, "model")}
                />
            </Form.Item>

            <Form.Item label="Количество контуров">
                <Select
                    items={order.contours}
                    value={order.order.contour}
                />
            </Form.Item>

            <Form.Item label="Высота двери">
                <InputNumber onChange={(val) => handleInputChange(val, "height")} />
            </Form.Item>

            <Button icon={<FileAddOutlined />}  onClick={() => {dispatch(getOrders(filters))}}>Новый заказ</Button>
        </div>
    )
}

export default OrdersFilter
