import React, { FC } from 'react';
import styled from 'styled-components';
import { Form } from 'antd';
import { useAppSelector } from '../../hooks/useAppSelector';
import Select from '../../components/Select';

const Step0: FC = () => {
    const customers = useAppSelector(state => state.order.customers)

    return (
        <Container>
            <Form
                name="basic"
                labelCol={{ span: 2 }}
                wrapperCol={{ span: 6 }}                
            >
                <Form.Item label="Заказчик">
                    <Select items={customers} defaultValue=""/>
                </Form.Item>
            </Form>
        </Container>
    )
}

export default Step0

const Container = styled.div`
    
`;