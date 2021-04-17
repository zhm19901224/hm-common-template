import React from 'react';
import styles from './index.scss';
import SideBar from '../SideBar/index';
import { Switch } from 'react-router-dom';
export default function Main(props) {
    return (React.createElement("section", { className: styles.mainOuter },
        React.createElement("section", { className: styles.flexContainer },
            React.createElement(SideBar, null),
            React.createElement("section", { className: styles.mainContainerInner },
                React.createElement(Switch, null, props.children)))));
}
