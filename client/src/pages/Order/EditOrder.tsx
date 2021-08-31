import React from 'react'
import {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../hooks/useAppDispatch';

import { 
    setCustomer, setNumberCustomer, setParty, setModel, setContour, setDoorThick, setModelBox 
} from '../../store/slices/orderSlice';

import Step1 from './Step1';
import OrderSteps from './OrderSteps';
import Step2 from './Step2';
import { IOrder } from '../../interfaces/IOrder';
import { fetchCustomers, fetchParties, fetchModels, fetchModelBoxes } from '../../store/actions/orderActions';

const renderStep = (step: number) => {
    switch (step) {
        case 0: return <Step1/>
        case 1: return <Step2/>
    }
}

const order: IOrder = {
    customer: "D001",
    number: "Ж5560",
    numberCustomer: "Термо сч. 400",
    party: "партия",
    model: "ММ",
    contour: "1",
    doorThick: 60,
    height: 1950,
    width: 950,
    modelBox: "открытая"
  }

const EditOrder: React.FC = () => {
    const dispatch = useAppDispatch()

    const [step, setStep] = useState(0)
    
    useEffect(() => {
        async function load () {
            await dispatch(fetchCustomers())
            await dispatch(fetchParties())
            await dispatch(fetchModels())
            await dispatch(fetchModelBoxes())
            dispatch(setCustomer(order.customer))
            dispatch(setNumberCustomer(order.numberCustomer))
            dispatch(setParty(order.party))
            dispatch(setModel(order.model))
            dispatch(setContour(order.contour.toString()))
            dispatch(setDoorThick(order.doorThick.toString()))
            dispatch(setModelBox(order.modelBox))
        }
        load()
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

export default EditOrder

const Container = styled.div`
    
`;

const Steps = styled.div`
    
`;

const StepControls = styled.div`
    margin-top: 20px;
`;