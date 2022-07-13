import React from 'react';

import User from 'assets/icons/User.png';
import Home from 'assets/icons/Home.svg';
import Search from 'assets/icons/Search.svg';
import Settings from 'assets/icons/Settings.png';

import { IconButton } from 'components/shared/IconButton';
import { Typography } from 'components/shared/Typography';

import styles from './SideMenu.module.scss';
import { TextButton } from 'components/shared/Button';

type PropsType = {
  onSearchClick: () => void;
};

const cities = [
  'Ambriz',
  'Ambriz',
  'Bengo',
  'Bié',
  'Huambo',
  'Huambo carlos del city',
  'Bengo',
  'Bié',
  'Huambo',
  'Huambo carlos del city',
  'Ambriz',
  'Ambriz',
  'Bengo',
  'Bié',
  'Huambo',
  'Huambo carlos del city',
  'Bengo',
  'Bié',
  'Huambo',
  'Huambo carlos del city',
  'Ambriz',
  'Bengo',
  'Bié',
  'Huambo',
  'Huambo carlos del city',
  'Bengo',
  'Bié',
  'Huambo',
  'Huambo carlos del city',
  'Ambriz',
  'Ambriz',
  'Bengo',
  'Bié',
  'Huambo',
  'Huambo carlos del city',
  'Bengo',
  'Bié',
  'Huambo',
  'Huambo carlos del city',
];

const SideMenu = ({ onSearchClick }: PropsType) => {
  return (
    <div className={styles.sideMenu}>
      <div className={styles.iconsLine}>
        <IconButton icon={Home} />
        <IconButton icon={Search} onClick={onSearchClick} />
      </div>
      <div className={styles.cities}>
        {cities.map((city, index) => (
          <TextButton key={index} className={styles.cityContainer}>
            <Typography className={styles.city} variant={'h5'}>
              {city}
            </Typography>
          </TextButton>
        ))}
      </div>
      <div className={styles.iconsLine}>
        <IconButton icon={User} />
        <IconButton icon={Settings} />
      </div>
    </div>
  );
};

export default SideMenu;
