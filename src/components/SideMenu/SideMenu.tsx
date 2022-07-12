import React from 'react';

import User from 'assets/icons/User.png';
import Home from 'assets/icons/Home.svg';
import Search from 'assets/icons/Search.svg';
import Settings from 'assets/icons/Settings.png';

import { IconButton } from 'components/shared/IconButton';
import { Typography } from 'components/shared/Typography';

import styles from './SideMenu.module.css';

type PropsType = {
  onSearchClick: () => void;
};

const SideMenu = ({ onSearchClick }: PropsType) => {
  return (
    <div className={styles.sideMenu}>
      <div className={styles.iconsLine}>
        <IconButton icon={Home} />
        <IconButton icon={Search} onClick={onSearchClick} />
      </div>
      <div className={styles.cities}>
        <Typography className={styles.city} variant={'h5'}>
          Brest
        </Typography>
        <Typography className={styles.city} variant={'h5'}>
          Paris
        </Typography>
        <Typography className={styles.city} variant={'h5'}>
          Sofia
        </Typography>
        <Typography className={styles.city} variant={'h5'}>
          Ankara
        </Typography>
        <Typography className={styles.city} variant={'h5'}>
          Moscow
        </Typography>
        <Typography className={styles.city} variant={'h5'}>
          Saint-Petersburg
        </Typography>
        <Typography className={styles.city} variant={'h5'}>
          Ottawa
        </Typography>
        <Typography className={styles.city} variant={'h5'}>
          Adelaida
        </Typography>
        <Typography className={styles.city} variant={'h5'}>
          Ottawa
        </Typography>
        <Typography className={styles.city} variant={'h5'}>
          Adelaida
        </Typography>
        <Typography className={styles.city} variant={'h5'}>
          Adelaida
        </Typography>
        <Typography className={styles.city} variant={'h5'}>
          Ottawa
        </Typography>
        <Typography className={styles.city} variant={'h5'}>
          Adelaida
        </Typography>
        <Typography className={styles.city} variant={'h5'}>
          Adelaida
        </Typography>
        <Typography className={styles.city} variant={'h5'}>
          Adelaida
        </Typography>
        <Typography className={styles.city} variant={'h5'}>
          Ottawa
        </Typography>
        <Typography className={styles.city} variant={'h5'}>
          Adelaida
        </Typography>
        <Typography className={styles.city} variant={'h5'}>
          Adelaida
        </Typography>
        <Typography className={styles.city} variant={'h5'}>
          Adelaida
        </Typography>
        <Typography className={styles.city} variant={'h5'}>
          Ottawa
        </Typography>
        <Typography className={styles.city} variant={'h5'}>
          Adelaida
        </Typography>
      </div>
      <div className={styles.iconsLine}>
        <IconButton icon={User} />
        <IconButton icon={Settings} />
      </div>
    </div>
  );
};

export default SideMenu;
