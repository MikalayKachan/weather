import React from 'react';

import { SideMenu } from 'components/SideMenu';

import styles from './Layout.module.css';

type PropsType = {
  children: React.ReactNode;
  day?: boolean;
};

const Layout = ({ children, day }: PropsType) => (
  <div className={day ? styles.layoutDay : styles.layoutNight}>
    <SideMenu />
    <div className={styles.inner}>{children}</div>
  </div>
);

export default Layout;
