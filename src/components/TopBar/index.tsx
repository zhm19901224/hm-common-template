import React, { Component, useState, useEffect } from 'react';
import styles from './index.scss';
import logoImg from 'assets/images/logo.png';
import { getCurrentLocalByHash } from '../../utils/local';

import { Select } from 'antd';
const { Option } = Select;

export default function TopBar() {
  const logoClickHandle = () => {
    location.href = '/';
  };

  const [localValue, setLocalValue] = useState('en_US');

  const handleLocalSelectChange = (value: string): void => {
    setLocalValue(value);
  };

  const initLocal = () => {
    const localRes = getCurrentLocalByHash();
    const local = localRes ? localRes : 'en_US';
    setLocalValue(local);
  };

  useEffect(() => {
    initLocal();
  }, []);

  return (
    <header className={styles.tobBar}>
      <div className={styles.headerInner}>
        <img
          src={logoImg}
          alt="shein logo"
          className={styles.logoStyle}
          onClick={logoClickHandle}
        />
        <Select
          className={styles.localSelectStyle}
          value={localValue}
          onChange={handleLocalSelectChange}
        >
          <Option value="en_US">ENGLISH</Option>
          <Option value="zh_CN">简体中文</Option>
          <Option value="zh_TW">繁体中文</Option>
        </Select>
      </div>
    </header>
  );
}
