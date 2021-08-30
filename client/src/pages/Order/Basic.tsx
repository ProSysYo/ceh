import React, { FC } from 'react';
import styled from 'styled-components';
import { Form, Select } from 'antd';

const Basic: FC = () => {
    return (
        <Container>
            <Form
                name="basic"
                labelCol={{ span: 2 }}
                wrapperCol={{ span: 6 }}
                initialValues={{ remember: true }}
            >
                <Form.Item label="Заказчик">
                    <Select
                        defaultValue=""
                        showSearch
                        optionFilterProp="children"
                    >
                        <Select.Option value="" disabled>Не выбрано</Select.Option>
                        <Select.Option value="D001">Бункер</Select.Option>
                        <Select.Option value="D002">Оренбург</Select.Option>
                    </Select>
                </Form.Item>
            </Form>
        </Container>
    )
}

export default Basic

const Container = styled.div`
    
`;