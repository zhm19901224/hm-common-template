import React, { Component } from 'react';
import ReactDom from 'react-dom';
import store from './store/index.js';
import { Provider } from 'mobx-react';
import Home from './pages/Home/index';

const App = props => (
    <Provider store={ store }>
        <Home />
    </Provider>
)

ReactDom.render(<App />, document.getElementById('root'))