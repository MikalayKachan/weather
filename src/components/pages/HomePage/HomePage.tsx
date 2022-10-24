import React from 'react';

import humIcon from 'assets/svg/HumIcon.svg';
import rainIcon from 'assets/svg/RainIcon.svg';
import windIcon from 'assets/svg/WindIcon.svg';

import { Loader } from 'components/shared/Loader';
import { Typography } from 'components/shared/Typography';

import { Layout } from 'components/Layout';
import { CurrentWeatherElement } from 'components/CurrentWeatherElement';

import styles from './HomePage.module.css';

type HomePagePropsType = {
  locatingStatus: string;
  currentWeatherLoading: boolean;
  currentTemp: number | undefined;
  humidity: number | undefined;
  windSpeed: number | undefined;
  clouds: number | undefined;
  name: string | undefined;
  date: string | undefined;
  day: string | undefined;
  time: string | undefined;
  weatherIcon: string;
};

const HomePage = ({
  locatingStatus,
  currentWeatherLoading,
  currentTemp,
  humidity,
  windSpeed,
  clouds,
  name,
  date,
  day,
  time,
  weatherIcon,
}: HomePagePropsType) => {
  const currentWeather = [
    { id: '1', icon: windIcon, text: `Wind ${windSpeed} m/s` },
    { id: '2', icon: humIcon, text: `Hum ${humidity}  %` },
    { id: '3', icon: rainIcon, text: `Clouds ${clouds} %` },
  ];

  return (
    <Layout>
      <div className={styles.main}>
        {currentWeatherLoading ? (
          <Loader className={styles.loader} />
        ) : (
          <>
            <Typography className={styles.locatingStatus} variant="h2">
              {locatingStatus}
            </Typography>
            <div className={styles.data}>
              <div className={styles.weatherIconBlock}>
                <img className={styles.currentWeatherIcon} src={weatherIcon} />
              </div>
              <div className={styles.currentCityWeatherBlock}>
                <div className={styles.currentTemperatureBlock}>
                  <Typography
                    className={styles.currentTemperatureValue}
                    variant="h1"
                  >
                    {currentTemp}
                  </Typography>
                  <Typography
                    className={styles.currentTemperatureUnit}
                    variant="h3"
                  >
                    °C
                  </Typography>
                </div>
                <Typography className={styles.currentCityName} variant="h2">
                  {name}
                </Typography>
              </div>
              <Typography className={styles.date} variant="h2">
                {date}
              </Typography>
              <Typography className={styles.dayAndTime}>
                {day} | {time}
              </Typography>
              <div className={styles.currentWeatherBlock}>
                {currentWeather.map((element) => {
                  return (
                    <CurrentWeatherElement
                      key={element.id}
                      icon={element.icon}
                      text={element.text}
                    />
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default HomePage;
