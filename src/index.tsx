import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { store, actions } from './store/index.js';
import { Provider } from 'mobx-react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './routes/index';
import Container from './components/Container/index';

import test from './pages/Test/index';

test();

// const App = (props) => (
//   <Provider store={store} action={actions}>
//     <BrowserRouter>
//       <Switch>
//         {routes.map((conf) => (
//           <Route
//             exact={conf.exact}
//             path={conf.path}
//             component={conf.component}
//             key={conf.key}
//           />
//         ))}
//       </Switch>
//     </BrowserRouter>
//   </Provider>
// );
const App = () => <Container />;

ReactDom.render(<App />, document.getElementById('root'));
