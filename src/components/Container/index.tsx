import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { store, actions } from '../../store/index';
import routes from '../../routes/index';
import TopBar from '../TopBar/index';
import Main from '../Main/index';

const Container = (props) => {
  return (
    <>
      <Provider store={store} action={actions}>
        <BrowserRouter>
          <TopBar />
          <Main>{props.children}</Main>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default Container;
