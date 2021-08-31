import React from 'react'
import {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../hooks/useAppDispatch';

import Step1 from './Step1';
import OrderSteps from './OrderSteps';
import Step2 from './Step2';
import { fetchCustomers, fetchParties, fetchModels, fetchModelBoxes } from '../../store/actions/orderActions';

const renderStep = (step: number) => {
    switch (step) {
        case 0: return <Step1/>
        case 1: return <Step2/>
    }
}

const NewOrder: React.FC = () => {
    const dispatch = useAppDispatch()

    const [step, setStep] = useState(0)
    
    useEffect(() => {
        dispatch(fetchCustomers())
        dispatch(fetchParties())
        dispatch(fetchModels())
        dispatch(fetchModelBoxes())
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

export default NewOrder

const Container = styled.div`
    
`;

const Steps = styled.div`
    
`;

const StepControls = styled.div`
    margin-top: 20px;
`;