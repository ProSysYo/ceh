import React from 'react'
import { Button, Table, Spin } from 'antd';
import styled from 'styled-components';
import { FileAddOutlined, EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';

import { useAppSelector } from '../../hooks/useAppSelector';
import OrdersFilter from '../../components/OrdersFilter';
import { Link } from 'react-router-dom';
import { IOrder } from '../../interfaces/IOrder';

const columns = [
    { title: 'Номер', dataIndex: 'number', width: 15 },
    { title: 'Заказчик', dataIndex: 'customer', width: 10 },    
    { title: 'Номер заказчика', dataIndex: 'numberCustomer', width: 15 },    
    { title: 'Модель', dataIndex: 'model', width: 10 }, 
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
    const { orders, isLoading } = useAppSelector(state => state.order)   
    
    return (
        <>  
            <div>
                <Button icon={<FileAddOutlined />}><Link to="/addorder"> Новый заказ</Link></Button>
            </div>
            
            <Container>
                <TableContainer>
                    <Table columns={columns} dataSource={orders} pagination={{ pageSize: 40 }} scroll={{ y: 680 }} size="small" rowKey="number"/>
                </TableContainer>                                           
                <FilterContainer>
                    <OrdersFilter/>
                </FilterContainer>
            </Container>
            
            
            <StyledSpin spinning={isLoading} size="large" tip="Загрузка данных..."/>
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

const StyledSpin = styled(Spin)`
    position: absolute;
    top: 50%;
    left: 50%;    
`;

const Container = styled.div`
    display: flex;
    width: 100%;        
`;

const TableContainer = styled.div`
    margin-top: 10px;
    width: 85%;   
`;

const FilterContainer = styled.div`
    width: 15%;
    margin-left: 10px;        
`;