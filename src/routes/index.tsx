import Home from 'pages/Home/index';
import NotFound from 'pages/NotFound/index';

export default [
  {
    path: '/',
    component: Home,
    exact: true,
    key: '/',
  },
  {
    component: NotFound,
    key: 'notFound',
  },
];
