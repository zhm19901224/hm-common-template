import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Route } from 'react-router-dom';
import routes from './routes/index';
import Container from './components/Container/index';
import './index.scss';

const App = () => (
  <Container>
    {routes.map((conf) => (
      <Route
        exact={conf.exact}
        path={conf.path}
        component={conf.component}
        key={conf.key}
      />
    ))}
  </Container>
);

ReactDom.render(<App />, document.getElementById('root'));
