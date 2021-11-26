import React, { useState } from 'react'
import { Button, Table, Drawer } from 'antd';
import styled from 'styled-components';
import { FilterOutlined, FileAddOutlined, EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';

import { useAppSelector } from '../../hooks/useAppSelector';
import OrdersFilter from '../../components/OrdersFilter';
import { Link } from 'react-router-dom';
import { IOrder } from '../../interfaces/IOrder';

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
    { 
        title: 'Действия', 
        dataIndex: '', 
        width: 20, 
        render: (record: IOrder) => (
            <>
                <ActionButton icon={ <EyeOutlined/> } size="small"/>
                <ActionLink to={`/editorder/${record._id}`}><EditOutlined/></ActionLink>
                <ActionButton icon={ <DeleteOutlined/> } size="small"/>                
            </>
        )
    },   
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
                <Button icon={<FileAddOutlined />}><Link to="/addorder"> Новый заказ</Link></Button>                
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

const ActionButton = styled(Button)`
    margin-right: 20px;
`;

const ActionLink = styled(Link)`
    margin-right: 20px;
    font-size: 14px;    
`;