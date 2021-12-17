import React from 'react'
import { useState } from 'react';

import styled from 'styled-components';


import Step1 from './Step1';
import OrderSteps from './OrderSteps';
import Step2 from './Step2';

import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import Step7 from './Step7';
import { Button } from 'antd';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { addOrder, updateOrder } from '../../store/actions/orderActions';

const renderStep = (step: number) => {
    switch (step) {
        case 0: return <Step1/>
        case 1: return <Step2/>
        case 2: return <Step3/>
        case 3: return <Step4/>
        case 4: return <Step5/>
        case 5: return <Step6/>
        case 6: return <Step7/>
    }
}

const AddEditOrder: React.FC<{isEditMode: boolean, id: string}> = ({isEditMode, id}) => {    
    
    const [step, setStep] = useState(0)

    const dispatch = useAppDispatch()

    const { order } = useAppSelector(state => state)

    return (
        <Container>
            <Criteries>
                <Steps>
                    <OrderSteps step={step} changeStep={setStep}/>
                </Steps>
               
                <StepControls>
                    {renderStep(step)}
                </StepControls>                 
            </Criteries>
            <Buttons>
                {isEditMode && <Button disabled={order.isFetching} loading={order.isFetching} onClick={() => dispatch(updateOrder(order.order))} >Изменить</Button>}
                {!isEditMode && <Button disabled={order.isFetching} loading={order.isFetching} onClick={() => dispatch(addOrder(order.order))} >Сохранить</Button>}                
                <Button disabled={order.isFetching}>Отмена</Button>
            </Buttons>                  
        </Container>
    )
}

export default AddEditOrder

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-end;
`;

const  Criteries = styled.div`
    margin: 10px;
    width: 100%;      
`;

const Steps = styled.div`
    
`;

const StepControls = styled.div`
    margin-top: 10px;
    height: 78vh;
    overflow-x: hidden; 
`;

const Buttons = styled.div`    
    > * {
        margin: 0 10px;
    }
`;