import React from 'react';

import { Typography } from 'components/shared/Typography';

import styles from './ForecastElement.module.scss';

type PropsType = {
  temp: number;
  icon: string;
  day: string;
};

const ForecastElement = ({ temp, icon, day }: PropsType) => {
  return (
    <div className={styles.forecastElement}>
      <Typography>{temp}°C</Typography>
      <img className={styles.forecastWeatherIcon} src={icon} />
      <Typography>{day.slice(0, 3)}</Typography>
    </div>
  );
};

export default ForecastElement;
