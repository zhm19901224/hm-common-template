import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { store, actions } from '../../store/index';
import routes from '../../routes/index';
import TopBar from '../TopBar/index';
import Main from '../Main/index';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';

const Container = (props: any) => {
  return (
    <>
      <Provider store={store} action={actions}>
        <ConfigProvider locale={zhCN}>
          <BrowserRouter>
            <TopBar />
            <Main>{props.children}</Main>
          </BrowserRouter>
        </ConfigProvider>
      </Provider>
    </>
  );
};

export default Container;
