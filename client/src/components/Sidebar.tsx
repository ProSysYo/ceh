import React from 'react';
import styled from 'styled-components';
import { Layout, Menu } from 'antd';
import { UnorderedListOutlined, CopyOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const { Sider } = Layout;



const Sidebar: React.FC = () => {
    return (
        <Sider >
            <Logo/>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<UnorderedListOutlined />}><Link to="/orders">Заказы</Link></Menu.Item>
                <Menu.Item key="2" icon={<CopyOutlined />}><Link to="/neworder">Новый заказ</Link></Menu.Item>               
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
