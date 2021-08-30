import React from 'react'
import {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchCustomers } from '../../store/slices/orderSlice';
import Basic from './Basic';
import OrderSteps from './OrderSteps';

const renderStep = (step: number) => {
    switch (step) {
        case 0: return <Basic/>
    }
}

const Order: React.FC = () => {
    const dispatch = useAppDispatch()

    const [step, setStep] = useState(0)
    
    useEffect(() => {
        dispatch(fetchCustomers())
    }, [dispatch])
    
    return (
        <Container>
            <Steps>
                <OrderSteps step={step} changeStep={setStep}/>
            </Steps>
            
            <StepControls>
                {renderStep(step)}
            </StepControls>            
        </Container>
    )
}

export default Order

const Container = styled.div`
    
`;

const Steps = styled.div`
    
`;

const StepControls = styled.div`
    margin-top: 20px;
`;