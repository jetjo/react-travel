import React from "react";
import logo from '@/assets/logo.svg';
import style from './Header.module.css';
import { Typography, Dropdown, Menu, Button, Layout, Input } from "antd";
import { GlobalOutlined } from "@ant-design/icons";

import { useStoreSelector, useStoreDispatch } from '@/store-hooks';
import { counterIncrement, counterSet } from "@/features";

const Header:React.FC = () =>
{
    const count = useStoreSelector( ( s ) => s.counter.value );
    const dispatch = useStoreDispatch();

    return (
        <div className={ style.appHeader }>
            {/* top-header */ }
            <div className={ style.topHeader }>
                <div className={ style.inner }>
                    <Typography.Text>
                        让旅游更幸福{ count }
                    </Typography.Text>
                    <div className={ style.dropdownBox }>
                        <Dropdown.Button
                            style={ { marginLeft: 15 } }
                            overlay={
                                <Menu>
                                    <Menu.Item>中文</Menu.Item>
                                    <Menu.Item>English</Menu.Item>
                                </Menu>
                            }
                            icon={ <GlobalOutlined /> }
                        >
                            语言
                        </Dropdown.Button>
                    </div>
                    <Button.Group
                        className={ style.buttonGroup }
                    >
                        <Button>注册</Button>
                        <Button onClick={() => dispatch(counterSet(9))}>登录</Button>
                    </Button.Group>
                </div>
            </div>
            {/* main-header */ }
            <Layout.Header
                className={ style.mainHeader }
            >
                <img
                    src={ logo }
                    alt="logo"
                    className={ style.AppLogo }
                />
                <Typography.Title
                    level={ 3 }
                    className={ style.title }
                >
                    React 旅游网
                </Typography.Title>
                <Input.Search
                    placeholder='请输入旅游目的地、主题或者关键字'
                    className={ style.searchInput }
                />
            </Layout.Header>
            {/* nav-list */ }
            <Menu
                mode={ 'horizontal' }
                className={ style.mainMenu }
            >
                <Menu.Item key={ 1 }>旅游首页</Menu.Item>
                <Menu.Item key={ 2 }>周末游</Menu.Item>
                <Menu.Item key={ 3 }>跟团游</Menu.Item>
                <Menu.Item key={ 4 }>自由行</Menu.Item>
                <Menu.Item key={ 5 }>私家团</Menu.Item>
                <Menu.Item key={ 6 }>游轮</Menu.Item>
                <Menu.Item key={ 7 }>酒店+景点</Menu.Item>
                <Menu.Item key={ 8 }>当地玩乐</Menu.Item>
                <Menu.Item key={ 9 }>主题游</Menu.Item>
                <Menu.Item key={ 10 }>定制游</Menu.Item>
                <Menu.Item key={ 11 }>游学</Menu.Item>
                <Menu.Item key={ 12 }>签证</Menu.Item>
                <Menu.Item key={ 13 }>企业游</Menu.Item>
                <Menu.Item key={ 14 }>高端游</Menu.Item>
                <Menu.Item key={ 15 }>爱玩户外</Menu.Item>
                <Menu.Item key={ 16 }>保险</Menu.Item>
            </Menu>
        </div>
    )
};

export default Header;
