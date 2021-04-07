import { Home, Dashboard, NotFound } from './lazyComponents';

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
