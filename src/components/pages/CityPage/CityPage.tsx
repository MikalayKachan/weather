import React from 'react';

import humIcon from 'assets/svg/HumIcon.svg';
import windIcon from 'assets/svg/WindIcon.svg';
import rainIcon from 'assets/svg/RainIcon.svg';

import { Loader } from 'components/shared/Loader';
import { Typography } from 'components/shared/Typography';

import { Layout } from 'components/Layout';
import { CurrentWeatherElement } from 'components/CurrentWeatherElement';

import { ForecastElement } from './components/ForecastElement';

import styles from './CityPage.module.scss';

type ForecastWeatherForRenderItemType = {
  key: number;
  day: string;
  temp: number;
  clouds: string;
};

export type CityPagePropsType = {
  loading: boolean;
  currentTemp: number;
  humidity: number;
  windSpeed: number;
  clouds: number;
  name: string;
  date: string;
  day: string;
  time: string;
  weatherIcon: string;
  forecastWeatherForRender: Array<ForecastWeatherForRenderItemType>;
};

const CityPage = ({
  loading,
  currentTemp,
  humidity,
  windSpeed,
  clouds,
  name,
  date,
  day,
  time,
  weatherIcon,
  forecastWeatherForRender,
}: CityPagePropsType) => (
  <Layout>
    {loading || name === undefined ? (
      <Loader />
    ) : (
      <div className={styles.main}>
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
            <CurrentWeatherElement
              icon={windIcon}
              text={`Wind ${windSpeed} m/s`}
            />
            <CurrentWeatherElement icon={humIcon} text={`Hum ${humidity}  %`} />
            <CurrentWeatherElement
              icon={rainIcon}
              text={`Clouds ${clouds} %`}
            />
          </div>
          <div className={styles.forecastBlock}>
            {forecastWeatherForRender &&
              forecastWeatherForRender.map((day) => (
                <ForecastElement
                  key={day.key}
                  temp={day.temp}
                  icon={day.clouds}
                  day={day.day}
                />
              ))}
          </div>
        </div>
      </div>
    )}
  </Layout>
);

export default CityPage;
