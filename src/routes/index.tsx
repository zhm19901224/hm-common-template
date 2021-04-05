import Home from 'pages/Home/index';
import NotFound from 'pages/NotFound/index';
import Dashboard from '../pages/Dashboard/index';

export default [
  {
    path: '/',
    component: Home,
    exact: true,
    key: '/',
  },
  {
    path: '/home',
    component: Home,
    exact: true,
    key: '/home',
  },
  {
    path: '/dashboard',
    component: Dashboard,
    exact: true,
    key: 'dashboard',
  },
  {
    path: '*',
    component: NotFound,
    key: 'notFound',
  },
];
