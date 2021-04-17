import Loadable from 'react-loadable';
import { Spin } from 'antd';
function createAsyncComponent(componentPath) {
    return Loadable({
        loader: function () { return import("../" + componentPath + ".tsx"); },
        loading: Spin
    });
}
export var Home = createAsyncComponent('pages/Home/index');
export var NotFound = createAsyncComponent('pages/NotFound/index');
export var Dashboard = createAsyncComponent('pages/Dashboard/index');
