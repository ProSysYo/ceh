import React, { FC, useState } from 'react'
import 'antd/dist/antd.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Drawer, Layout } from 'antd';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import styled from 'styled-components';
import OrderContainer from './pages/Order/OrderContainer';
import Orders from './pages/Order/Orders';

const { Content } = Layout;

const App: FC = () => {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    return (        
        <BrowserRouter>
            <Layout>
                <Drawer title="Меню" placement="left" width="250" onClose={onClose} visible={visible}>
                    <Sidebar />
                </Drawer>
                
                <StyledLayout>
                    <TopBar onMenuClick={showDrawer}/>
                    <StyledContent>
                    <Switch>
                        <Route exact path="/orders" component={Orders} />                        
                        <Route exact path="/addorder" component={OrderContainer} />                        
                        <Route exact path="/editorder/:id" component={OrderContainer} />                        
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
    margin: 5px 10px;
    padding: 5px 20px;
    height: 94vh;
`;

const StyledLayout = styled(Layout)`
    background: rgba(255, 255, 255, 0.2);
`;