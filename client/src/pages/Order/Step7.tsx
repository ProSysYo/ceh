import React, { FC } from 'react';
import styled from 'styled-components';
import { Button, Descriptions } from 'antd';
import { useAppSelector } from '../../hooks/useAppSelector';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { addOrder } from '../../store/actions/orderActions';
// import { 
//     setCostDoor,
//     setCountDoors,
//     setCustomer, setNote, setNumberCustomer, setParty 
// } from '../../store/slices/orderSlice';


const Step7: FC = () => {
    const dispatch = useAppDispatch()

    const {
        order
    } = useAppSelector(state => state.order)
    
    // const {
    //     customer, numberCustomer, number, party, countDoors, costDoor, note
    // } = useAppSelector(state => state.order.order)


    return (
        <Container>             
            <Descriptions title="Информация по заказу" column={1} bordered size="small">
                <Descriptions.Item label="Номер заказа">{order.number}</Descriptions.Item>
                <Descriptions.Item label="Заказчик">{order.customer}</Descriptions.Item>
                <Descriptions.Item label="Номер заказчика">{order.numberCustomer}</Descriptions.Item>
                <Descriptions.Item label="Партийность">{order.party}</Descriptions.Item>
                <Descriptions.Item label="Количество дверей">{order.countDoors}</Descriptions.Item>
                <Descriptions.Item label="Стоимость одной двери">{order.costDoor}</Descriptions.Item>
                <Descriptions.Item label="Примечание">{order.note}</Descriptions.Item>
                
            </Descriptions>    
            <Button  onClick={()=> dispatch(addOrder(order))} >Сохранить</Button>
        </Container>
    )
}

export default Step7

const Container = styled.div`
    width: 50%;
`;