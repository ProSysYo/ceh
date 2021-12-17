import React, { useEffect } from 'react'
import styled from 'styled-components';
import { Redirect, RouteComponentProps } from 'react-router-dom';

import { orderActions } from '../../store/slices/orderSlice';
import { fetchAll, loadOrder } from '../../store/actions/orderActions';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { Spin } from 'antd';
import AddEditOrder from './AddEditOrder';


// interface ChildComponentProps extends RouteComponentProps<any> {}

const OrderContainer: React.FC<RouteComponentProps<any>> = ({ match }) => {
    const isEditMode: boolean = match.params?.id
       

    const dispatch = useAppDispatch()
    const { isLoading, isSuccess} = useAppSelector(state => state.order)    
    
    useEffect(() => {
        const loadData = async () => {
            await  dispatch(fetchAll())
            
            if (isEditMode) {
                await dispatch(loadOrder(match.params.id))
            }
        }

        loadData()

        return () => {
            dispatch(orderActions.rebootState())
        }
    // eslint-disable-next-line
    }, [])     

    if (isLoading) return <StyledSpin size="large" tip="Загрузка данных..."/>

    return (
        <>  
            <AddEditOrder isEditMode={isEditMode} id={match.params.id}/>
            {isSuccess && <Redirect to="/orders" />}           
        </>
    )
}

export default OrderContainer


const StyledSpin = styled(Spin)`
    position: absolute;
    top: 50%;
    left: 50%;    
`;
