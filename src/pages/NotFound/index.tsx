import React from 'react';

import { useHistory } from 'react-router-dom';

import styles from './index.scss';

class NotFound extends React.Component {
  constructor(props: any) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.goIndex = this.goIndex.bind(this);
  }

  goBack() {
    window.history.go(-1);
  }

  goIndex() {
    useHistory().push('/home');
  }

  render() {
    return (
      <div className={styles.notFound}>
        <h1 className={styles.notFoundTitle}>404</h1>
        <p className={styles.notFoundText}>
          不要悲伤，不要绝望，灰暗的日子依然会来临！
        </p>
        <p className={styles.notFoundText}>现在</p>

        <span onClick={this.goBack} className={styles.linkStyle}>
          返回上一页
        </span>
        <span>或者</span>
        <span onClick={this.goIndex} className={styles.linkStyle}>
          跳转首页
        </span>
      </div>
    );
  }
}

export default NotFound;
