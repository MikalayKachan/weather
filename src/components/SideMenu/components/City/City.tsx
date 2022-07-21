import React from 'react';

import Add from 'assets/icons/Add.svg';

import { IconButton } from 'components/shared/IconButton';
import { Typography } from 'components/shared/Typography';

import styles from './City.module.scss';

type PropsType = {
  lat: number;
  name: string;
  country: string;
  onCityClick: (lat: number) => void;
};

const City = ({ lat, name, country, onCityClick }: PropsType) => (
  <div className={styles.city}>
    <Typography
      variant={'h5'}
      className={styles.text}
      onClick={() => onCityClick(lat)}
    >
      {name + ', ' + country}
    </Typography>
    <IconButton
      icon={Add}
      buttonStyle={styles.buttonStyle}
      iconStyle={styles.iconStyle}
    />
  </div>
);

export default City;
