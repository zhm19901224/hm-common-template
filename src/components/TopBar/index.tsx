import React, { Component } from 'react';
import styles from './index.scss';
import logoImg from 'assets/images/logo.png';

export default class TopBar extends Component {
  constructor(props) {
    super(props);
    this.logoClickHandle = this.logoClickHandle.bind(this);
  }

  logoClickHandle() {
    location.href = '/';
  }

  render() {
    return (
      <header className={styles.tobBar}>
        <div className={styles.headerInner}>
          <img
            src={logoImg}
            alt="shein logo"
            className={styles.logoStyle}
            onClick={this.logoClickHandle}
          />
        </div>
      </header>
    );
  }
}
