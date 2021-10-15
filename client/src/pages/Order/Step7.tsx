import React, { FC } from 'react';
import styled from 'styled-components';
import { Button, Form } from 'antd';
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
            <Form
                name="basic"
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 5 }}
                size = "small"              
            >   
                <Form.Item>
                    <Button  onClick={()=> dispatch(addOrder(order))} >Сохранить</Button>
                </Form.Item>                
            </Form>
        </Container>
    )
}

export default Step7

const Container = styled.div`
    
`;