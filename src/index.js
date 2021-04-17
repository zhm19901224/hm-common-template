import React from 'react';
import ReactDom from 'react-dom';
import { Route } from 'react-router-dom';
import routes from './routes/index';
import Container from './components/Container/index';
var App = function () { return (React.createElement(Container, null, routes.map(function (conf) { return (React.createElement(Route, { exact: conf.exact, path: conf.path, component: conf.component, key: conf.key })); }))); };
ReactDom.render(React.createElement(App, null), document.getElementById('root'));
