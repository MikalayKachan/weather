import React from 'react';

import IconButton from 'components/shared/IconButton/IconButton';

import Search from 'assets/icons/Search.svg';
import Home from 'assets/icons/Home.svg';
import Settings from 'assets/icons/Settings.png';
import User from 'assets/icons/User.png';

import st from 'components/SideMenu/SideMenu.module.css';

const SideMenu = () => {
  return (
    <div className={st.sideMenu}>
      <IconButton>
        <img
          style={{ height: '30', width: '30px', marginTop: '20px' }}
          src={Home}
        />
      </IconButton>
      <IconButton>
        <img
          style={{ height: '26px', width: '26px', marginTop: '20px' }}
          src={Search}
        />
      </IconButton>
      <div style={{ marginTop: '20px', color: 'white' }}>
        <div className={st.city}>City 1</div>
        <div className={st.city}>City 2</div>
        <div className={st.city}>City 3</div>
        <div className={st.city}>City 4</div>
        <div className={st.city}>City 5</div>
      </div>
      <IconButton>
        <img
          style={{ height: '26px', width: '26px', marginTop: '20px' }}
          src={Settings}
        />
      </IconButton>
      <IconButton>
        <img
          style={{
            height: '26px',
            width: '26px',
            position: 'absolute',
            bottom: '15px',
          }}
          src={User}
        />
      </IconButton>
    </div>
  );
};

export default SideMenu;
