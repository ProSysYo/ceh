import React, { useState } from 'react'
import { Button, Table, Spin, Tooltip,  Calendar } from 'antd';
import styled from 'styled-components';
import  moment from 'moment'
import { FileAddOutlined, EditOutlined, DeleteOutlined, EyeOutlined, ScheduleOutlined } from '@ant-design/icons';

import { useAppSelector } from '../../hooks/useAppSelector';
import OrdersFilter from '../../components/OrdersFilter';
import { Link } from 'react-router-dom';
import { IOrder } from '../../interfaces/IOrder';
import Column from 'antd/lib/table/Column';

import ShowOrder from './ShowOrder';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { getOrder } from '../../store/actions/orderActions';
import { orderActions } from '../../store/slices/orderSlice';
import Modal from 'antd/lib/modal/Modal';
import { type } from 'os';
import { openNotification } from '../../commons/notification';

const Orders: React.FC = () => { 
    const { orders, isLoading } = useAppSelector(state => state.order)
    const [visible, setVisible] = useState(false)
    const [visibleCalendar, setVisibleCalendar] = useState(false)      
    const [selectedId, setSelectedId] = useState("")      
    const [planeDate, setPlaneDate] = useState("")      
    
    const dispatch = useAppDispatch()

    const showDrawer = async (id: string) => {
        await dispatch(getOrder(id))
        setVisible(true);
    };

    const onClose = async () => {
        dispatch(orderActions.rebootCurrentOrder())
        setVisible(false);
    }; 
    
    const showCalendar = (id: string) => {
        setSelectedId(id)
        setVisibleCalendar(true)        
    }

    const calendarCancel = () => { 
        setSelectedId("")
        setVisibleCalendar(false)
        setPlaneDate("")
    }

    const calendarOk = () => {
        if (!planeDate) {
            openNotification("error", "Выберите дату отгрузки")
            return 
        }
        if (!selectedId) {
            openNotification("error", "Нет выбранного заказа")
            return
        }
    }

    const onSelectDate = (value: moment.Moment) => { 
        setPlaneDate(value.format("DD.MM.YYYY"))
    }
    
    return (
        <>  
            <div>
                <Button icon={<FileAddOutlined />}><Link to="/addorder"> Новый заказ</Link></Button>
            </div>
            
            <Container>
                <TableContainer>
                    <Table dataSource={orders} pagination={{ pageSize: 40 }} scroll={{ y: 680 }} size="small" rowKey="number" loading={isLoading}>
                        <Column title="Номер" dataIndex="number" width={15} />
                        <Column title="Номера дверей" dataIndex="" width={15} />
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
                            render = {((date: Date) => moment(date).format("DD.MM.YYYY",) )} 
                        />
                        <Column
                            title = 'Действия'                                  
                            width = {20} 
                            render = {(record: IOrder) => (
                                <> 
                                    <Tooltip placement="bottom" title="Просмотр">
                                        <ActionButton icon={ <EyeOutlined/> } onClick={() => showDrawer(record._id!)} size="small"/>
                                    </Tooltip>

                                    <Tooltip placement="bottom" title="Редактировать">
                                        <ActionLink to={`/editorder/${record._id}`}><EditOutlined/></ActionLink>
                                    </Tooltip>

                                    <Tooltip placement="bottom" title="Удалить">
                                        <ActionButton icon={ <DeleteOutlined/> } size="small"/>
                                    </Tooltip>

                                    <Tooltip placement="bottom" title="Запустить">
                                        <ActionButton icon={ <ScheduleOutlined/> } onClick={() => showCalendar(record._id!)} size="small" />
                                    </Tooltip>    
                                </>
                            )}
                        />
                    </Table>
                </TableContainer> 

                <FilterContainer>
                    <OrdersFilter/>
                </FilterContainer>
                
                <ShowOrder onClose={onClose} visible={visible}/>

                <Modal 
                    title="Выберите дату отгрузки" 
                    visible={visibleCalendar} 
                    onOk={calendarOk} 
                    onCancel={calendarCancel} 
                    destroyOnClose 
                >                    
                    <Calendar fullscreen={false} onSelect={onSelectDate} />
                </Modal>
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