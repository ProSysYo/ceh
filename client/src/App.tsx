import React, { FC, useState } from 'react'
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';
import Sidebar from './components/Sidebar';

const { Header, Content } = Layout;

const App: FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <BrowserRouter>
            <Layout>
                <Sidebar collapsed={collapsed} toggle={toggle}/>
                <Layout className="site-layout">
                    <Header className="site-layout-background">Цех 2.0</Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            height: "88vh"                            
                        }}
                    >
                        Content
                    </Content>
                </Layout>
            </Layout>
        </BrowserRouter>
    )
}

export default App
