import React, { FC } from 'react';
import styled from 'styled-components';
import { Divider, Form } from 'antd';
import { useAppSelector } from '../../hooks/useAppSelector';
import Select from '../../components/Select';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { orderActions } from '../../store/slices/orderSlice';
import { changeTypeDecorationInside } from '../../store/actions/orderActions';


const Step4: FC = () => {
    const dispatch = useAppDispatch()

    const {
        typeDecorationsOutside, typeDecorationsInside, decorationsOutside, wraps, isWrapInside, isWrapOutside, isPatinaOutside,
        patinas, decorationsInside, isPatinaInside, currentJambs, isJambWrap, locationJambs, isLocationJamb
    } = useAppSelector(state => state.order)
    
    const {
        typeDecorationOutside, typeDecorationInside, decorationOutside, wrapOutside, wrapInside, patinaOutside, 
        decorationInside, patinaInside, jamb, jambWrap, locationJumb
    } = useAppSelector(state => state.order.order)


    return (
        <Container>
            <Form
                name="basic"
                labelCol={{ span: 9 }}
                wrapperCol={{ span: 5 }}   
                size = "middle"              
            >  
                <Divider>Наружная отделка</Divider>
                <Form.Item label="Отделка / Тип панели*">
                    <Select 
                        items={typeDecorationsOutside} 
                        value={typeDecorationOutside} 
                        onChange={ (value) => dispatch(orderActions.setTypeDecorationOutside(value))}                        
                    />
                </Form.Item>
                <Form.Item label="Элемент отделки / Фрезеровка">
                    <Select 
                        items={decorationsOutside} 
                        value={decorationOutside} 
                        onChange={ (value) => dispatch(orderActions.setDecorationOutside(value))}                        
                    />
                </Form.Item>
                <Form.Item label="Цвет пленки панели">
                    <Select 
                        items={wraps} 
                        value={wrapOutside}
                        disabled={!isWrapOutside} 
                        onChange={ (value) => dispatch(orderActions.setWrapOutside(value))}                        
                    />
                </Form.Item>
                <Form.Item label="Патина на панели">
                    <Select 
                        items={patinas} 
                        value={patinaOutside} 
                        disabled={!isPatinaOutside} 
                        onChange={ (value) => dispatch(orderActions.setPatinaOutside(value))}                        
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
                        onChange={ (value) => dispatch(orderActions.setDecorationInside(value))}                        
                    />
                </Form.Item>
                <Form.Item label="Цвет пленки панели">
                    <Select 
                        items={wraps} 
                        value={wrapInside} 
                        disabled={!isWrapInside}
                        onChange={ (value) => dispatch(orderActions.setWrapInside(value))}                        
                    />
                </Form.Item>
                <Form.Item label="Патина на панели">
                    <Select 
                        items={patinas} 
                        value={patinaInside}
                        disabled={!isPatinaInside}
                        onChange={ (value) => dispatch(orderActions.setPatinaInside(value))}                        
                    />
                </Form.Item>  

                <Divider>Наличник</Divider>

                <Form.Item label="Расположение наличника (внутр. откр.)">
                    <Select 
                        items={locationJambs} 
                        value={locationJumb}
                        disabled={!isLocationJamb}
                        onChange={ (value) => dispatch(orderActions.setLocationJumb(value))}                        
                    />
                </Form.Item>

                <Form.Item label="Наличник">
                    <Select 
                        items={currentJambs} 
                        value={jamb}
                        onChange={ (value) => dispatch(orderActions.setJamb(value))}                        
                    />
                </Form.Item>

                <Form.Item label="Цвет пленки наличника">
                    <Select 
                        items={wraps} 
                        value={jambWrap} 
                        disabled={!isJambWrap}
                        onChange={ (value) => dispatch(orderActions.setJambWrap(value))}                        
                    />
                </Form.Item>              
            </Form>
        </Container>
    )
}

export default Step4

const Container = styled.div`
    
`;