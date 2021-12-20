import React, { useState } from 'react'
import { Button, Table, Spin } from 'antd';
import styled from 'styled-components';
import { format} from 'date-fns'
import { FileAddOutlined, EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';

import { useAppSelector } from '../../hooks/useAppSelector';
import OrdersFilter from '../../components/OrdersFilter';
import { Link } from 'react-router-dom';
import { IOrder } from '../../interfaces/IOrder';
import Column from 'antd/lib/table/Column';

import ShowOrder from './ShowOrder';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { getOrder } from '../../store/actions/orderActions';
import { orderActions } from '../../store/slices/orderSlice';

const Orders: React.FC = () => { 
    const { orders, isLoading } = useAppSelector(state => state.order)
    const [visible, setVisible] = useState(false)     
    
    const dispatch = useAppDispatch()

    const showDrawer = async (id: string) => {
        await dispatch(getOrder(id))
        setVisible(true);
    };
    const onClose = async () => {
        await dispatch(orderActions.rebootCurrentOrder())
        setVisible(false);
    };   
    
    return (
        <>  
            <div>
                <Button icon={<FileAddOutlined />}><Link to="/addorder"> Новый заказ</Link></Button>
            </div>
            
            <Container>
                <TableContainer>
                    <Table dataSource={orders} pagination={{ pageSize: 40 }} scroll={{ y: 680 }} size="small" rowKey="number">
                        <Column title="Номер" dataIndex="number" width={15} />
                        <Column title="Заказчик" dataIndex="customer" width={10} />
                        <Column title="Номер заказчика" dataIndex="numberCustomer" width={15} />
                        <Column title="Модель" dataIndex="model" width={10} />
                        <Column title="Высота" dataIndex="height" width={10} />
                        <Column title="Ширина" dataIndex="width" width={10} />
                        <Column title="Окно" dataIndex="doorWindow" width={10} />
                        <Column title="Цена" dataIndex="costDoor" width={10} />
                        <Column
                            title = 'Дата создания'
                            dataIndex = 'dateCreate'       
                            width = {10} 
                            render = {((date: Date) => format(new Date(date), "dd.MM.yyyy") )} 
                        />
                        <Column
                            title = 'Действия'                                  
                            width = {20} 
                            render = {(record: IOrder) => (
                                <>
                                    <ActionButton icon={ <EyeOutlined/> } onClick={() => showDrawer(record._id!)} size="small"/>
                                    <ActionLink to={`/editorder/${record._id}`}><EditOutlined/></ActionLink>
                                    <ActionButton icon={ <DeleteOutlined/> } size="small"/>                
                                </>
                            )}
                        />
                    </Table>
                </TableContainer>                                           
                <FilterContainer>
                    <OrdersFilter/>
                </FilterContainer>
                <ShowOrder onClose={onClose} visible={visible}/>
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