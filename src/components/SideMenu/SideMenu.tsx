import React from 'react';

import User from 'assets/icons/User.png';
import Home from 'assets/icons/Home.svg';
import Search from 'assets/icons/Search.svg';
import Settings from 'assets/icons/Settings.png';

import { IconButton } from 'components/shared/IconButton';

import styles from './SideMenu.module.css';

const SideMenu = () => {
  return (
    <div className={styles.sideMenu}>
      <div className={styles.iconsLine}>
        <IconButton icon={Home} />
        <IconButton icon={Search} />
      </div>

      <div className={styles.cities}>
        <div className={styles.city}>City 1</div>
        <div className={styles.city}>City 2</div>
        <div className={styles.city}>City 3</div>
        <div className={styles.city}>City 4</div>
        <div className={styles.city}>City 5</div>
        <div className={styles.city}>City 5</div>
        <div className={styles.city}>City 5</div>
        <div className={styles.city}>City 5</div>
        <div className={styles.city}>City 5</div>
        <div className={styles.city}>City 5</div>
        <div className={styles.city}>City 5</div>
        <div className={styles.city}>City 5</div>
        <div className={styles.city}>City 5</div>
        <div className={styles.city}>City 5</div>
        <div className={styles.city}>City 5</div>
        <div className={styles.city}>City 5</div>
        <div className={styles.city}>City 5</div>
        <div className={styles.city}>City 5</div>
        <div className={styles.city}>City 5</div>
        <div className={styles.city}>City 5</div>
        <div className={styles.city}>City 5</div>
        <div className={styles.city}>City 5</div>
        <div className={styles.city}>City 5</div>
        <div className={styles.city}>City 5</div>
        <div className={styles.city}>City 5</div>
        <div className={styles.city}>City 5</div>
      </div>

      <div className={styles.iconsLine}>
        <IconButton icon={User} />
        <IconButton icon={Settings} />
      </div>
    </div>
  );
};

export default SideMenu;
