import React from 'react';
import styled from 'styled-components';
import { Layout, Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';
const { Sider } = Layout;

interface ISider {
    collapsed: boolean;
    toggle: () => void; 
}

const Sidebar: React.FC<ISider> = ({collapsed, toggle}) => {
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={toggle}>
            <Logo/>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<UserOutlined />}>Новый заказ</Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>Заказы</Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>Цех</Menu.Item>
            </Menu>
        </Sider>
    )
}

const Logo = styled.div`
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);  
`;

export default Sidebar
