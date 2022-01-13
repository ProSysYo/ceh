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
            <Step title="Заказ" />
            <Step title="Модель" />
            <Step title="Основной замок" />           
            <Step title="Доп. замок / Фурнитура" />           
            <Step title="Отделка" />
            <Step title="Окно" />            
            <Step title="Опции" />            
            <Step title="Сводка" />
        </Steps>
    )
}

export default OrderSteps
