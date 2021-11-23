import React, {useState} from 'react'
import { FileAddOutlined } from '@ant-design/icons';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { useEffect } from 'react';
import { fetchAll, getOrders } from '../store/actions/orderActions';
import { Button, Form, InputNumber } from 'antd';
import Select from './Select';
import { orderActions } from '../store/slices/orderSlice';

const OrdersFilter: React.FC = () => {
    const [filters, setFilters] = useState({})

    const dispatch = useAppDispatch()
    const { order } = useAppSelector(state => state)

    useEffect(() => {
        dispatch(fetchAll())
    }, [dispatch])

    const handleInputChange = (e: any, name: string) => {
        setFilters({ ...filters, [name]: e.target.value })
    }
    return (
        <div>
            <Form.Item label="Модель двери*">
                <Select
                    items={order.models}
                    value={order.order.model}                    
                    onChange={(e)=>handleInputChange(e,"model")}
                />
            </Form.Item>

            <Form.Item label="Количество контуров">
                <Select
                    items={order.contours}
                    value={order.order.contour}                    
                    onChange={(e)=>handleInputChange(e,"contour")}                    
                />
            </Form.Item>

            <Form.Item label="Высота двери">
                <InputNumber onChange={(e)=>handleInputChange(e,"height")} />
            </Form.Item>

            <Button icon={<FileAddOutlined />}  onClick={() => dispatch(getOrders(filters))}>Новый заказ</Button>
        </div>
    )
}

export default OrdersFilter
