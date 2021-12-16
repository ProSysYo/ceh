import React from 'react'
import { Button, Layout } from 'antd';
import styled from 'styled-components';
import { UnorderedListOutlined } from '@ant-design/icons';

const { Header } = Layout;

interface TopBarProps {
    onMenuClick: () => void;
}

const TopBar: React.FC<TopBarProps> = ({onMenuClick}) => {
    return (
        <MainHeader>
            <Button onClick={onMenuClick} icon={<UnorderedListOutlined/>}></Button>
        </MainHeader>
    )
}

export default TopBar

const MainHeader = styled(Header)`
    background: #fff;
    height: 40px;
    display: flex;
    align-items: center;
`;