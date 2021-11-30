import React from 'react';
import styled from 'styled-components';
import { Layout, Menu } from 'antd';
import { UnorderedListOutlined, FileAddOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const { Sider } = Layout;



const Sidebar: React.FC = () => {
    return (
        <Sider >
            
            <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<UnorderedListOutlined />}><Link to="/orders">Заказы</Link></Menu.Item>
                <Menu.Item key="2" icon={<FileAddOutlined />}><Link to="/addorder">Новый заказа</Link></Menu.Item>                             
            </Menu>
        </Sider>
    )
}



export default Sidebar
