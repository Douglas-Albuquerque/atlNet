import React, { useState } from 'react';
import './home.css';
import Body from '../../Components/body';
import logoImgMenu from '../../img/atl.png';

import {
    HomeOutlined,
    PlusCircleOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UsergroupAddOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, } from 'antd';
const { Header, Sider, Content } = Layout;
const HomePage = () => {

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout>
            <Sider style={{ backgroundColor: '#1F4070' }} trigger={null} collapsible collapsed={collapsed}>
                <div className='logoBox'> <Button
                    type="text"
                    icon={collapsed
                        ? <div className='icon'><MenuUnfoldOutlined /></div>
                        : <img className='logoImg' src={logoImgMenu} alt='Logo da Atlanta Tecnologia' />
                    } onClick={() => setCollapsed(!collapsed)}
                    style={{
                        fontSize: '16px',
                        width: 64,
                        height: 64,
                        color: 'white',
                        margin: "0 200 0 0",

                    }}
                /></div>
                <Menu
                    style={{ backgroundColor: '#1F4070', color: '#FFF' }}
                    theme="dark"
                    color='white'
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <HomeOutlined />,
                            label: 'Home',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'Equipamentos',
                        },
                        {
                            key: '3',
                            icon: <PlusCircleOutlined />,
                            label: 'Cadastro',
                        },
                        {
                            key: '4',
                            icon: <UserOutlined />,
                            label: 'Perfil',
                        },
                        {
                            key: '5',
                            icon: <UsergroupAddOutlined />,
                            label: 'Usuários',
                        },

                    ]}
                />
            </Sider>
            <Layout className='layout'>
                <Header
                    style={{
                        padding: 0,
                        background: "#1F4070",
                        display: "flex",
                    }}
                >
                    <p className='text'>Atlanta Network</p>
                </Header>
                <Content
                    style={{
                        padding: 24,
                        minHeight: "100vh",
                        background: "White",
                    }}
                >
                <Body/>
                </Content>
            </Layout>
        </Layout>
    );

};
export default HomePage;