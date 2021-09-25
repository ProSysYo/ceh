import React, { FC } from 'react';
import styled from 'styled-components';
import { Checkbox, Form } from 'antd';
import { useAppSelector } from '../../hooks/useAppSelector';
import Select from '../../components/Select';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { 
    setLocationHinge 
} from '../../store/slices/orderSlice';


const Step6: FC = () => {
    const dispatch = useAppDispatch()

    const {
        locationHinges
    } = useAppSelector(state => state.order)
    
    const {
        isDouble, locationHinge
    } = useAppSelector(state => state.order.order)


    return (
        <Container>
            <Form
                name="basic"
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 5 }}
                size = "small"              
            >   
                <Form.Item label="Порог из нержавейки">
                    <Checkbox checked={isDouble} onChange={(e)=> console.log(e)} />
                </Form.Item>

                <Form.Item label="Уличная дверь">
                    <Checkbox checked={isDouble} onChange={(e)=> console.log(e)} />
                </Form.Item>

                <Form.Item label="Эксцентрик">
                    <Checkbox checked={isDouble} onChange={(e)=> console.log(e)} />
                </Form.Item>

                <Form.Item label="Задний лист">
                    <Checkbox checked={isDouble} onChange={(e)=> console.log(e)} />
                </Form.Item>

                <Form.Item label="Термокабель">
                    <Checkbox checked={isDouble} onChange={(e)=> console.log(e)} />
                </Form.Item>

                <Form.Item label="Доводчик">
                    <Checkbox checked={isDouble} onChange={(e)=> console.log(e)} />
                </Form.Item>

                <Form.Item label="Усиление под довочик">
                    <Checkbox checked={isDouble} onChange={(e)=> console.log(e)} />
                </Form.Item>

                <Form.Item label="Электромагнит">
                    <Checkbox checked={isDouble} onChange={(e)=> console.log(e)} />
                </Form.Item>

                <Form.Item label="Подсветка">
                    <Checkbox checked={isDouble} onChange={(e)=> console.log(e)} />
                </Form.Item>

                <Form.Item label="Уплотнитель">
                    <Select 
                        items={locationHinges} 
                        value={locationHinge} 
                        onChange={ (value) => dispatch(setLocationHinge(value))}                        
                    />
                </Form.Item>
            </Form>
        </Container>
    )
}

export default Step6

const Container = styled.div`
    
`;