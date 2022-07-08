import React from 'react';

import { Typography } from 'components/shared/Typography';

import styles from './ForecastElement.module.scss';

type PropsType = {
  temp: string;
  icon: string;
  day: string;
};

const ForecastElement = ({ temp, icon, day }: PropsType) => {
  return (
    <div className={styles.forecastElement}>
      <Typography>{temp}</Typography>
      <img className={styles.forecastWeatherIcon} src={icon} />
      <Typography>{day}</Typography>
    </div>
  );
};

export default ForecastElement;
