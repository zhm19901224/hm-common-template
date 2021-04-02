import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { store, actions } from '../../store/index';
import routes from '../../routes/index';
import TopBar from '../TopBar/index';
import Main from '../Main/index';

const Container = () => {
  //   return (
  //     <Provider store={store} action={actions}>
  //       <BrowserRouter>
  //         <TopBar></TopBar>

  //         <Switch>
  //           {routes.map((conf) => (
  //             <Route
  //               exact={conf.exact}
  //               path={conf.path}
  //               component={conf.component}
  //               key={conf.key}
  //             />
  //           ))}
  //         </Switch>
  //       </BrowserRouter>
  //     </Provider>
  //   );

  return (
    <>
      <TopBar />
      <Main />
    </>
  );
};

export default Container;
