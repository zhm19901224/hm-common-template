import { Home, Dashboard, NotFound } from './lazyComponents';
import Hooks from '../pages/Hooks/index';

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
    path: '/hooks',
    component: Hooks,
    exact: true,
    key: 'hooks',
  },
  {
    path: '*',
    component: NotFound,
    key: 'notFound',
  },
];
