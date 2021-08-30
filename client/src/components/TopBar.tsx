import React from 'react'
import { Layout } from 'antd';
import styled from 'styled-components';

const { Header } = Layout;

const TopBar: React.FC = () => {
    return (
        <MainHeader>Цех 2.0</MainHeader>
    )
}

export default TopBar

const MainHeader = styled(Header)`
    background: #fff;
`;