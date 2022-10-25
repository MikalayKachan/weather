import React, { useContext } from 'react';

import { SideMenu } from 'components/SideMenu';

import styles from './Layout.module.css';
import { AppContext } from 'helpers/context';

type PropsType = {
  children: React.ReactNode;
};

const Layout = ({ children }: PropsType) => {
  const { state } = useContext(AppContext);

  return (
    <div className={state.isDayTheme ? styles.layoutDay : styles.layoutNight}>
      <SideMenu />
      <div className={styles.inner}>{children}</div>
    </div>
  );
};

export default Layout;
