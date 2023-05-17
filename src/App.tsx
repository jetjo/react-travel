import React from 'react';
import logo from './logo.svg';
import 'antd/dist/reset.css';
import style from './App.module.css';
import { Layout, Typography, Input, Menu, Button, Dropdown } from 'antd';

function App ()
{
  return (
    <div className={ style.App }>
      <div className={ style.appHeader }>
        <Layout.Header className={ style.mainHeader }>
          <img src={ logo } alt="logo"
            className={ style.AppLogo } />
          <Typography.Title level={ 3 }
            className={ style.title }>
            React 旅游网
          </Typography.Title>
          <Input.Search
            placeholder='请输入旅游目的地、主题或者关键字'
            className={ style.searchInput } />
        </Layout.Header>
      </div>
    </div>
  );
}

export default App;
