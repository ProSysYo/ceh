import React, { FC } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { useAppSelector } from '../../hooks/useAppSelector';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { addOrder } from '../../store/actions/orderActions';
import SummaryInfo from './SummaryInfo';



const Step7: FC = () => {
    const dispatch = useAppDispatch()

    const {
        order
    } = useAppSelector(state => state.order)

    return (
        <Container>
            <SummaryInfo/>
            <div>
                <Button onClick={() => dispatch(addOrder(order))} >Сохранить</Button>
            </div>
        </Container>
    )
}

export default Step7

const Container = styled.div`   
    display: flex;
    flex-direction: column;
    align-items: flex-end;     
`;

