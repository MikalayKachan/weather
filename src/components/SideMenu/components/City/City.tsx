import React from 'react';

import Add from 'assets/icons/Add.svg';
import Done from 'assets/icons/Done.svg';

import { IconButton } from 'components/shared/IconButton';
import { Typography } from 'components/shared/Typography';

import { CityType } from 'components/SideMenu/components/SearchModal/SearchModal.container';

import styles from './City.module.scss';

type PropsType = {
  lat: number;
  name: string;
  country: string;
  savedCitiesList: CityType[];
  onCityClick: (lat: number) => void;
  onAddCityClick: (lat: number) => void;
};

const City = ({
  lat,
  name,
  country,
  savedCitiesList,
  onCityClick,
  onAddCityClick,
}: PropsType) => (
  <div className={styles.city}>
    <Typography
      variant={'h5'}
      className={styles.text}
      onClick={() => onCityClick(lat)}
    >
      {name + ', ' + country}
    </Typography>
    {savedCitiesList.map((city) => city.lat).includes(lat) ? (
      <IconButton
        icon={Done}
        buttonStyle={styles.buttonStyle}
        iconStyle={styles.iconStyle}
      />
    ) : (
      <IconButton
        icon={Add}
        buttonStyle={styles.buttonStyle}
        iconStyle={styles.iconStyle}
        onClick={() => onAddCityClick(lat)}
      />
    )}
  </div>
);

export default City;
