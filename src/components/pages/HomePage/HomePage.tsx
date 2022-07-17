import React from 'react';

import { Layout } from 'components/Layout';
import { Typography } from 'components/shared/Typography';
import { TextButton } from 'components/shared/Button';

import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <Layout>
      <div className={styles.main}>
        <div>
          <Typography variant="h2">Current City Name</Typography>
        </div>
        <div className={styles.currentTemperatureBlock}>
          <Typography className={styles.currentTemperatureValue} variant="h1">
            27
          </Typography>
          <Typography className={styles.currentTemperatureUnit} variant="h3">
            °C
          </Typography>
        </div>
        <div>
          <Typography className={styles.date} variant="h2">
            6 july 2022
          </Typography>
          <Typography className={styles.dayAndTime}>
            Wednesday | 15:00
          </Typography>
        </div>
        <TextButton>
          <Typography variant={'h5'}>details...</Typography>
        </TextButton>
      </div>
    </Layout>
  );
};

export default HomePage;
