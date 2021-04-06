import React from 'react';
import styles from './index.scss';
import { Menu } from 'antd';
import { useHistory } from 'react-router-dom';
import {
  HomeOutlined,
  RiseOutlined,
  OrderedListOutlined,
} from '@ant-design/icons';

const menuList = [
  {
    key: '/',
    icon: HomeOutlined,
    menuName: 'Home',
  },
  {
    key: '/dashboard',
    icon: RiseOutlined,
    menuName: 'dashboard',
  },
];

function SideBar(props) {
  const history = useHistory();
  const handleMenuClick = (e) => {
    // props.history.push(e.key);
    history.push(e.key);
  };

  return (
    <aside className={styles.sideBarOuter}>
      <Menu onClick={handleMenuClick} defaultSelectedKeys={['/']}>
        {menuList.map((item) => (
          <Menu.Item key={item.key} icon={<item.icon />}>
            {item.menuName}
          </Menu.Item>
        ))}
      </Menu>
    </aside>
  );
}

// export default withRouter(SideBar);

export default SideBar;
