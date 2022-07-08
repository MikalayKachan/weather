import React from 'react';

import { SideMenu } from 'components/SideMenu';

import styles from './Layout.module.css';

const Layout = () => {
  return (
    <div className={styles.layout}>
      <SideMenu />
    </div>
  );
};

export default Layout;
