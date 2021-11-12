import React from 'react'
import {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Button, Drawer, Spin } from 'antd';
import { FullscreenOutlined } from '@ant-design/icons';

import { useAppDispatch } from '../../hooks/useAppDispatch';

import Step1 from './Step1';
import OrderSteps from './OrderSteps';
import Step2 from './Step2';
import { useAppSelector } from '../../hooks/useAppSelector';
import { fetchAll } from '../../store/actions/orderActions';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import Step7 from './Step7';
import SummaryInfo from './SummaryInfo';

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

const NewOrder: React.FC = () => {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    const dispatch = useAppDispatch()
    const { isLoading } = useAppSelector(state => state.order)

    const [step, setStep] = useState(0)
    
    useEffect(() => {
        dispatch(fetchAll())
    }, [dispatch])     

    if (isLoading) return <StyledSpin size="large" tip="Загрузка данных..."/>

    return (
        <Container>
            <Criteries>
                <Steps>
                    <OrderSteps step={step} changeStep={setStep}/>
                </Steps>
                <StyledButton icon={<FullscreenOutlined />} onClick={showDrawer} size="large" type="dashed">Сводка</StyledButton>
                <StepControls>
                    {renderStep(step)}
                </StepControls>  
            </Criteries>



            <Drawer title="Сводка" placement="right" width="500" onClose={onClose} visible={visible}>
                <SummaryInfo/>
            </Drawer>        
        </Container>
    )
}

export default NewOrder

const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;   
`;

const  Criteries = styled.div`
    margin: 10px;
    width: 100%;      
`;

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

const Steps = styled.div`
    
`;

const StepControls = styled.div`
    margin-top: 20px;
    height: 75vh;
    overflow-x: hidden; 
`;