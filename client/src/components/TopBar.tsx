import React, { useState } from 'react'
import { Avatar, Button, Layout, Popover } from 'antd';
import styled from 'styled-components';
import { UnorderedListOutlined, UserOutlined} from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks/useAppSelector';
import { authActions } from '../store/slices/authSlice';


const { Header } = Layout;

interface TopBarProps {
    onMenuClick: () => void;}


const TopBar: React.FC<TopBarProps> = ({onMenuClick}) => {
    const dispatch = useDispatch()
    const [visible, setVisible] = useState(false)   
    const { user } = useAppSelector(state => state.auth)

    const leaveHandle = () => {
            dispatch(authActions.logout())    
    }

    const handleVisibleChange = () => {
        setVisible(state => !state)
    }

    return (
        <MainHeader>
            <Button onClick={onMenuClick} icon={<UnorderedListOutlined/>}></Button>
            <PopoverS content={<Button onClick={leaveHandle} type="text">Выйти</Button>}                         
                trigger="click" 
                placement="bottom" 
                className="popover"
                visible={visible}
                onVisibleChange={handleVisibleChange}                    
            >                
                <Avatar icon={<UserOutlined />} />
                <UserName>{user?.name}</UserName>
            </PopoverS>
        </MainHeader>
    )
}

export default TopBar

const MainHeader = styled(Header)`
    background: #fff;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const UserName = styled.span`
    margin-left: 10px;
`

const PopoverS = styled(Popover)`
    :hover {
        cursor: pointer;
    }
`