import React from 'react';

import { SideMenuContainer } from 'components/SideMenu';

import styles from './Layout.module.css';

type PropsType = {
  children: React.ReactNode;
};

const Layout = ({ children }: PropsType) => {
  return (
    <div className={styles.layout}>
      <SideMenuContainer />
      <div className={styles.inner}>{children}</div>
    </div>
  );
};

export default Layout;
