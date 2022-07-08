import React from 'react';

import { Typography } from 'components/shared/Typography';

import styles from './CurrentWeatherElement.module.scss';

type PropsType = {
  icon: string;
  text: string;
};

const CurrentWeatherElement = ({ icon, text }: PropsType) => {
  return (
    <>
      <div className={styles.currentWeatherElement}>
        <img className={styles.elementIcon} src={icon} />
        <Typography className={styles.element} variant="h5">
          {text}
        </Typography>
      </div>
      <Typography
        className={styles.separator}
        variant="h5"
        shadow="withoutShadow"
      >
        |
      </Typography>
    </>
  );
};

export default CurrentWeatherElement;
