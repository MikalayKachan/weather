import React from 'react';

import st from 'components/Layout/Layout.module.css';
import SideMenu from 'components/SideMenu/SideMenu';

const Layout = () => {
  return (
    <div className={st.layout}>
      <SideMenu />
    </div>
  );
};

export default Layout;
