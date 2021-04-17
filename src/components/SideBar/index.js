import React from 'react';
import styles from './index.scss';
import { Menu } from 'antd';
import { useHistory } from 'react-router-dom';
import { HomeOutlined, RiseOutlined } from '@ant-design/icons';
var menuList = [
    {
        key: '/',
        icon: HomeOutlined,
        menuName: 'Home'
    },
    {
        key: '/dashboard',
        icon: RiseOutlined,
        menuName: 'dashboard'
    }
];
function SideBar(props) {
    var history = useHistory();
    var handleMenuClick = function (e) {
        history.push(e.key);
    };
    return (React.createElement("aside", { className: styles.sideBarOuter },
        React.createElement(Menu, { onClick: handleMenuClick, defaultSelectedKeys: ['/'] }, menuList.map(function (item) { return (React.createElement(Menu.Item, { key: item.key, icon: React.createElement(item.icon, null) }, item.menuName)); }))));
}
export default SideBar;
