import React, { FC } from 'react';
import styled from 'styled-components';
import { Form } from 'antd';
import { useAppSelector } from '../../hooks/useAppSelector';
import Select from '../../components/Select';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { 
    setBaseCoverInside,
    setBaseCoverOutside,
    setBaseCylinder,
    setLockSpinner,    
} from '../../store/slices/orderSlice';
import { changeBaseLock } from '../../store/actions/orderActions';


const Step3: FC = () => {
    const dispatch = useAppDispatch()

    const {
        baseLocks, spinners, cylinders, baseCovers, isLockSpinner, isBaseCylinder
    } = useAppSelector(state => state.order)
    
    const {
        baseLock, lockSpinner, baseCylinder, baseCoverOutside, baseCoverInside
    } = useAppSelector(state => state.order.order)


    return (
        <Container>
            <Form
                name="basic"
                labelCol={{ span: 9 }}
                wrapperCol={{ span: 6 }}                
            >                   
                <Form.Item label="Основной замок*">
                    <Select 
                        items={baseLocks} 
                        value={baseLock} 
                        onChange={ (value) => dispatch(changeBaseLock(value))}                       
                    />
                </Form.Item>

                <Form.Item label="Вертушок основного замка">
                    <Select 
                        items={spinners} 
                        value={lockSpinner}
                        disabled = {!isLockSpinner} 
                        onChange={ (value) => dispatch(setLockSpinner(value))}                       
                    />
                </Form.Item>

                <Form.Item label="Цилиндр основного замка">
                    <Select 
                        items={cylinders} 
                        value={baseCylinder}
                        disabled = {!isBaseCylinder} 
                        onChange={ (value) => dispatch(setBaseCylinder(value))}                       
                    />
                </Form.Item>

                <Form.Item label="Накладка основного замка снаружи">
                    <Select 
                        items={baseCovers} 
                        value={baseCoverOutside}                        
                        onChange={ (value) => dispatch(setBaseCoverOutside(value))}                       
                    />
                </Form.Item> 

                <Form.Item label="Накладка основного замка внутри">
                    <Select 
                        items={baseCovers} 
                        value={baseCoverInside}                        
                        onChange={ (value) => dispatch(setBaseCoverInside(value))}                       
                    />
                </Form.Item>           
            </Form>
        </Container>
    )
}

export default Step3

const Container = styled.div`
    
`;