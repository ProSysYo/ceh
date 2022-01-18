import React, { FC, useState } from 'react'
import 'antd/dist/antd.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Drawer, Layout } from 'antd';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import styled from 'styled-components';
import OrderContainer from './pages/Order/OrderContainer';
import Orders from './pages/Order/Orders';
import Home from './pages/Home/Home';
import { useAppSelector } from './hooks/useAppSelector';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

const { Content } = Layout;

const App: FC = () => {
    const { isAuth } = useAppSelector(state => state.auth)

    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    return (        
        <BrowserRouter>
            {isAuth
                ? <Layout>
                    <Drawer title="Меню" placement="left" width="250" onClose={onClose} visible={visible}>
                        <Sidebar />
                    </Drawer>
                    
                    <StyledLayout>
                        <TopBar onMenuClick={showDrawer}/>
                        <StyledContent>
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/orders" component={Orders} />                        
                                <Route exact path="/addorder" component={OrderContainer} />                        
                                <Route exact path="/editorder/:id" component={OrderContainer} />
                                <Redirect to="/"/>                       
                            </Switch>
                        </StyledContent>
                    </StyledLayout>
                </Layout>
                :
                <Layout>
                    <StyledContent>
                        <Switch>
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/register" component={Register} />
                            <Redirect to="/login"/>                                             
                        </Switch>
                    </StyledContent>

                </Layout>
            }
            
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