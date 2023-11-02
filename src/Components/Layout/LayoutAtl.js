import React, { useState } from 'react';
import './LayoutAtl.css';
import logoImgMenu from '../../img/atl.png';
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "../../Pages/Home/HomePage";
import CreateEquip from "../../Pages/CreateEquip/CreateEquip";
import Contracts from "../../Pages/Contracts/Contracts";
import Equipaments from '../../Pages/Equipaments/Equipaments';

import {
    HomeOutlined,
    PlusCircleOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UsergroupAddOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, ConfigProvider, } from 'antd';

const { Header, Sider, Content } = Layout;

const LayoutAtl = () => {

    const navigate = useNavigate()
    const [collapsed, setCollapsed] = useState(true);

    return (
        <Layout>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: "#275296",
                    }
                }}
            >
                <Sider
                    trigger={null}
                    collapsible collapsed={collapsed}
                    style={{ backgroundColor: '#1F4070', color: '#FFF' }}
                >
                    <div className='logoBox'>
                        <Button
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
                                background: "transparent"
                            }}
                        />
                    </div>
                    <Menu
                        style={{ backgroundColor: '#1F4070', color: '#FFF' }}
                        theme="dark"
                        color='white'
                        mode="inline"
                        onClick={({ key }) => {
                            navigate(key);
                        }}
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '/',
                                icon: <HomeOutlined />,
                                label: 'Home',

                            },
                            {
                                key: '/createequip',
                                icon: <PlusCircleOutlined />,
                                label: 'Cadastro de Equipamentos',
                            },
                            {
                                key: '/contracts',
                                icon: <VideoCameraOutlined />,
                                label: 'Equipamentos',
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
            </ConfigProvider>
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
                        minHeight: "93.1vh",
                    }}
                >
                    <div>
                        <Routes>
                            {<Route path="contracts" element={<Contracts />} />}
                            <Route path="/" element={<HomePage />} />
                            <Route path="createequip" element={<CreateEquip />} />
                            <Route path="equipamentos/:item" element={<Equipaments />} />
                            {/* <Route path="*" element={<NotFound />} /> */}
                        </Routes>
                    </div>

                </Content>

            </Layout>
        </Layout >

    );

};
export default LayoutAtl;