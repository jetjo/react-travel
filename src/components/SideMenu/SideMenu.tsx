import React from "react";
import sideMenuList from "@/mocks/side-menu";
import style from './SideMenu.module.css';
import { Menu } from "antd";
import { GifOutlined } from "@ant-design/icons";

const SideMenu: React.FC = () =>
{
    return (
        <Menu mode={ 'vertical' } className={ style.sideMenu }>
            {
                sideMenuList.map( ( m, i ) =>
                {
                    return (
                        <Menu.SubMenu
                            key={ `side-menu-${ i }` }
                            title={ <span> <GifOutlined /> { m.title } </span> }
                        >
                            {
                                m.subMenu.map( ( sm, j ) =>
                                {
                                    return (
                                        <Menu.SubMenu
                                            key={ `side-sub-menu-${ j }` }
                                            title={ <span> <GifOutlined /> { sm.title } </span> }
                                        >
                                            {
                                                sm.subMenu.map( ( it, k ) =>
                                                {
                                                    return (
                                                        <Menu.Item
                                                            key={ `menu-${ k }` }
                                                        >
                                                            <span> <GifOutlined /> { it }</span>
                                                        </Menu.Item>
                                                    );
                                                } )
                                            }
                                        </Menu.SubMenu>
                                    );
                                } )
                            }
                        </Menu.SubMenu>
                    );
                } )
            }
        </Menu>
    );
};

export default SideMenu;
