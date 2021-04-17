import React, { useState, useEffect } from 'react';
import styles from './index.scss';
import logoImg from 'assets/images/logo.png';
import { getCurrentLocalByHash } from '../../utils/local';
import { Select } from 'antd';
var Option = Select.Option;
export default function TopBar() {
    var logoClickHandle = function () {
        location.href = '/';
    };
    var _a = useState('en_US'), localValue = _a[0], setLocalValue = _a[1];
    var handleLocalSelectChange = function (value) {
        setLocalValue(value);
    };
    var initLocal = function () {
        var localRes = getCurrentLocalByHash();
        var local = localRes ? localRes : 'en_US';
        setLocalValue(local);
    };
    useEffect(function () {
        initLocal();
    }, []);
    return (React.createElement("header", { className: styles.tobBar },
        React.createElement("div", { className: styles.headerInner },
            React.createElement("img", { src: logoImg, alt: "shein logo", className: styles.logoStyle, onClick: logoClickHandle }),
            React.createElement(Select, { className: styles.localSelectStyle, value: localValue, onChange: handleLocalSelectChange },
                React.createElement(Option, { value: "en_US" }, "ENGLISH"),
                React.createElement(Option, { value: "zh_CN" }, "\u7B80\u4F53\u4E2D\u6587"),
                React.createElement(Option, { value: "zh_TW" }, "\u7E41\u4F53\u4E2D\u6587")))));
}
