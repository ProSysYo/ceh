import React, { FC } from 'react';
import styled from 'styled-components';
import { Divider, Form } from 'antd';
import { useAppSelector } from '../../hooks/useAppSelector';
import Select from '../../components/Select';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { 
    setDecorationOutside,
    setPatinaOutside,
    setWrapInside, 
    setWrapOutside,
    setDecorationInside,
    setPatinaInside
} from '../../store/slices/orderSlice';
import { changeTypeDecorationInside, changeTypeDecorationOutside } from '../../store/actions/orderActions';


const Step4: FC = () => {
    const dispatch = useAppDispatch()

    const {
        typeDecorationsOutside, typeDecorationsInside, decorationsOutside, wraps, isWrapInside, isWrapOutside, isPatinaOutside,
        patinas, decorationsInside, isPatinaInside
    } = useAppSelector(state => state.order)
    
    const {
        typeDecorationOutside, typeDecorationInside, decorationOutside, wrapOutside, wrapInside, patinaOutside, 
        decorationInside, patinaInside
    } = useAppSelector(state => state.order.order)


    return (
        <Container>
            <Form
                name="basic"
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 5 }}   
                size = "small"              
            >  
                <Divider>Наружная отделка</Divider>
                <Form.Item label="Отделка / Тип панели*">
                    <Select 
                        items={typeDecorationsOutside} 
                        value={typeDecorationOutside} 
                        onChange={ (value) => dispatch(changeTypeDecorationOutside(value))}                        
                    />
                </Form.Item>
                <Form.Item label="Элемент отделки / Фрезеровка">
                    <Select 
                        items={decorationsOutside} 
                        value={decorationOutside} 
                        onChange={ (value) => dispatch(setDecorationOutside(value))}                        
                    />
                </Form.Item>
                <Form.Item label="Цвет пленки панели">
                    <Select 
                        items={wraps} 
                        value={wrapOutside}
                        disabled={!isWrapOutside} 
                        onChange={ (value) => dispatch(setWrapOutside(value))}                        
                    />
                </Form.Item>
                <Form.Item label="Патина на панели">
                    <Select 
                        items={patinas} 
                        value={patinaOutside} 
                        disabled={!isPatinaOutside} 
                        onChange={ (value) => dispatch(setPatinaOutside(value))}                        
                    />
                </Form.Item>

                <Divider>Внутренняя отделка</Divider>
                <Form.Item label="Отделка / Тип панели*">
                    <Select 
                        items={typeDecorationsInside} 
                        value={typeDecorationInside} 
                        onChange={ (value) => dispatch(changeTypeDecorationInside(value))}                        
                    />
                </Form.Item>
                <Form.Item label="Элемент отделки / Фрезеровка">
                    <Select 
                        items={decorationsInside} 
                        value={decorationInside} 
                        onChange={ (value) => dispatch(setDecorationInside(value))}                        
                    />
                </Form.Item>
                <Form.Item label="Цвет пленки панели">
                    <Select 
                        items={wraps} 
                        value={wrapInside} 
                        disabled={!isWrapInside}
                        onChange={ (value) => dispatch(setWrapInside(value))}                        
                    />
                </Form.Item>
                <Form.Item label="Патина на панели">
                    <Select 
                        items={patinas} 
                        value={patinaInside}
                        disabled={!isPatinaInside}
                        onChange={ (value) => dispatch(setPatinaInside(value))}                        
                    />
                </Form.Item>  

                <Divider>Наличник</Divider>

                <Form.Item label="Наличник???">
                    <Select 
                        items={wraps} 
                        value={wrapInside} 
                        disabled={!isWrapInside}
                        onChange={ (value) => dispatch(setWrapInside(value))}                        
                    />
                </Form.Item>

                <Form.Item label="Цвет пленки наличника???">
                    <Select 
                        items={wraps} 
                        value={wrapInside} 
                        disabled={!isWrapInside}
                        onChange={ (value) => dispatch(setWrapInside(value))}                        
                    />
                </Form.Item>              
            </Form>
        </Container>
    )
}

export default Step4

const Container = styled.div`
    
`;