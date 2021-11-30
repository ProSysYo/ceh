import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom';

import { FullscreenOutlined } from '@ant-design/icons';

import { orderActions } from '../../store/slices/orderSlice';
import { fetchAll, loadOrder } from '../../store/actions/orderActions';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { Button, Drawer, Spin } from 'antd';
import SummaryInfo from './SummaryInfo';
import AddEditOrder from './AddEditOrder';


// interface ChildComponentProps extends RouteComponentProps<any> {}

const OrderContainer: React.FC<RouteComponentProps<any>> = ({ match }) => {
    const isEditMode: boolean = match.params?.id
    

    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    const dispatch = useAppDispatch()
    const { isLoading } = useAppSelector(state => state.order)    
    
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
             <StyledButton icon={<FullscreenOutlined />} onClick={showDrawer} size="large" type="dashed">Сводка</StyledButton>

             <AddEditOrder/>

            <Drawer title="Сводка" placement="right" width="500" onClose={onClose} visible={visible}>
                <SummaryInfo/>
            </Drawer>            
        </>
    )
}

export default OrderContainer


const StyledSpin = styled(Spin)`
    position: absolute;
    top: 50%;
    left: 50%;    
`;

const StyledButton = styled(Button)`
    position: absolute;
    bottom: 7%;
    right: 5%;    
`;
