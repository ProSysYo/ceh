import React, { useState } from 'react'
import { Button, Table, Drawer } from 'antd';
import { FilterOutlined, FileAddOutlined } from '@ant-design/icons';

import { useAppSelector } from '../../hooks/useAppSelector';
import OrdersFilter from '../../components/OrdersFilter';
import { Link } from 'react-router-dom';

const columns = [
    { title: 'Номер', dataIndex: 'number', width: 15 },
    { title: 'Заказчик', dataIndex: 'customer', width: 10 },    
    { title: 'Номер заказчика', dataIndex: 'numberCustomer', width: 15 },    
    { title: 'Модель', dataIndex: 'computedModel', width: 10 }, 
    { title: 'Высота', dataIndex: 'height', width: 10 },    
    { title: 'Ширина', dataIndex: 'width', width: 10 },    
    { title: 'Окно', dataIndex: 'doorWindow', width: 10 },    
    { title: 'Количество', dataIndex: 'countDoors', width: 10 },   
    { title: 'Цена', dataIndex: 'costDoor', width: 10 },   
    { title: 'Запущен', dataIndex: '', width: 10 },   
    { title: 'Действия', dataIndex: '', width: 20, render: () => <span>action</span> },   
  ];

const Orders: React.FC = () => {    
    const { orders } = useAppSelector(state => state.order)

    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    return (
        <>  
            <div>
                <Button icon={<FileAddOutlined />}><Link to="/neworder"> Новый заказ</Link></Button>                
                <Button icon={<FilterOutlined />}  onClick={showDrawer}>Фильтры</Button>
            </div>
            
            <br/>
            <br/>
            <Table columns={columns} dataSource={orders} pagination={{ pageSize: 40 }} scroll={{ y: 600 }} size="small" rowKey="number"/>

            <Drawer title="Фильтры" placement="right" width="400" onClose={onClose} visible={visible}>
                <OrdersFilter/>
            </Drawer> 
        </>
    )
}

export default Orders
