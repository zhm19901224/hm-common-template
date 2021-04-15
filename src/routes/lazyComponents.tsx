import Loadable from 'react-loadable';
import { Spin } from 'antd';

function createAsyncComponent(componentPath: string) {
  // ES规范中动态import函数，可以传入变量参数，但webpack不支持动态import函数传入的是参数，只能是字符串。
  // https://blog.csdn.net/u010682774/article/details/113607979
  return Loadable({
    loader: () => import(`../${componentPath}.tsx`),
    loading: Spin
  });
}

export const Home = createAsyncComponent('pages/Home/index');

export const NotFound = createAsyncComponent('pages/NotFound/index');

export const Dashboard = createAsyncComponent('pages/Dashboard/index');
