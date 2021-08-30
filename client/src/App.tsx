import React, { FC, useState } from 'react'
import 'antd/dist/antd.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import styled from 'styled-components';
import Order from './pages/Order/Order';

const { Content } = Layout;

const App: FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <BrowserRouter>
            <Layout>
                <Sidebar collapsed={collapsed} toggle={toggle}/>
                <StyledLayout>
                    <TopBar/>
                    <StyledContent>
                    <Switch>
                        <Route exact path="/order" component={Order} />
                        <Route exact path="/userlist" />
                    </Switch>
                    </StyledContent>
                </StyledLayout>
            </Layout>
        </BrowserRouter>
    )
}

export default App

const StyledContent = styled(Content)`
    background: #fff;
    margin: 24px 16px;
    padding: 24px;
    height: 88vh; 
`;

const StyledLayout = styled(Layout)`
    background: rgba(255, 255, 255, 0.2);
`;