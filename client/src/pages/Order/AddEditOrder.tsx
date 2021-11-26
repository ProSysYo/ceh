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

const AddEditOrder: React.FC = () => {    
    
    const [step, setStep] = useState(0)

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
        </Container>
    )
}

export default AddEditOrder

const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;   
`;

const  Criteries = styled.div`
    margin: 10px;
    width: 100%;      
`;

const Steps = styled.div`
    
`;

const StepControls = styled.div`
    margin-top: 20px;
    height: 75vh;
    overflow-x: hidden; 
`;