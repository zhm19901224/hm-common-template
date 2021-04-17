import React from 'react';
import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';
import { store, actions } from '../../store/index';
import TopBar from '../TopBar/index';
import Main from '../Main/index';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
var Container = function (props) {
    return (React.createElement(React.Fragment, null,
        React.createElement(Provider, { store: store, action: actions },
            React.createElement(ConfigProvider, { locale: zhCN },
                React.createElement(BrowserRouter, null,
                    React.createElement(TopBar, null),
                    React.createElement(Main, null, props.children))))));
};
export default Container;
