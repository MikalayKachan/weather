import React from 'react';

import { NavLink } from 'react-router-dom';

import Add from 'assets/icons/Add.svg';

import { IconButton } from 'components/shared/IconButton';
import { Typography } from 'components/shared/Typography';

import { CityType } from 'components/SideMenu/components/SearchModal/SearchModal';

import styles from './City.module.scss';

type PropsType = {
  city: CityType;
};

const City = ({ city }: PropsType) => (
  <div className={styles.city}>
    <NavLink to={'/city' + '/lat=' + city.lat + '/lon=' + city.lon}>
      <Typography key={city.id} variant={'h5'} className={styles.text}>
        {city.name + ', ' + city.country}
      </Typography>
    </NavLink>
    <IconButton
      icon={Add}
      buttonStyle={styles.buttonStyle}
      iconStyle={styles.iconStyle}
    />
  </div>
);

export default City;
