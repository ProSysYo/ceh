import React, {FC} from 'react';
import { Steps } from 'antd';

const { Step } = Steps;

interface IOrderSteps {
    step: number;
    changeStep: (current: number) => void;
}

const OrderSteps: FC<IOrderSteps> = ({step, changeStep}) => {
    const onChange = (current: number) => {        
        changeStep(current);        
    };

    return (
        <Steps size="small" current={step} onChange={onChange}>
            <Step title="Основное" />
            <Step title="Модель" />
            <Step title="Фурнитура" />            
            <Step title="Отделка" />
            <Step title="Окно" />
            <Step title="Металл" />
            <Step title="Доп." />
            <Step title="Сводка" />
        </Steps>
    )
}

export default OrderSteps
