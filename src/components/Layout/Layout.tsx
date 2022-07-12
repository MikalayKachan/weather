import React from 'react';

import { SideMenu } from 'components/SideMenu';

import styles from './Layout.module.css';

type PropsType = {
  children: React.ReactNode;
};

const Layout = ({ children }: PropsType) => {
  return (
    <div className={styles.layout}>
      <SideMenu />
      <div className={styles.inner}>{children}</div>
    </div>
  );
};

export default Layout;
