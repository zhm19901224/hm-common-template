import React, { ReactNode } from 'react';
import styles from './index.scss';
import SideBar from '../SideBar/index';
import { Switch } from 'react-router-dom';

export default function Main(props: { children: ReactNode}) {
  return (
    <section className={styles.mainOuter}>
      <section className={styles.flexContainer}>
        <SideBar />
        <section className={styles.mainContainerInner}>
          <Switch>{props.children}</Switch>
        </section>
      </section>
    </section>
  );
}
