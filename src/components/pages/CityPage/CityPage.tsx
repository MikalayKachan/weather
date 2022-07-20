import React from 'react';

import { Typography } from 'components/shared/Typography';
import ForecastElement from './components/ForecastElement/ForecastElement';
import CurrentWeatherElement from './components/CurrentWeatherElement/CurrentWeatherElement';

import windIcon from 'assets/svg/WindIcon.svg';
import humIcon from 'assets/svg/HumIcon.svg';
import rainIcon from 'assets/svg/RainIcon.svg';
import forecastWeatherIcon from 'assets/svg/WeatherIcon-2-39.svg';
import currentWeatherIcon from 'assets/svg/WeatherIcon-2-40.svg';

import styles from './CityPage.module.scss';
import { Layout } from 'components/Layout';

const CityPage = () => {
  const currentWeather = [
    { id: '1', icon: windIcon, text: 'Wind 10 km/h' },
    { id: '2', icon: humIcon, text: 'Hum 54 %' },
    { id: '3', icon: rainIcon, text: 'Rain 0.2 %' },
  ];

  const forecastWeather = [
    { id: '1', temp: '24°C', icon: forecastWeatherIcon, day: 'Thu' },
    { id: '2', temp: '25°C', icon: forecastWeatherIcon, day: 'Fri' },
    { id: '3', temp: '25°C', icon: forecastWeatherIcon, day: 'Sat' },
    { id: '4', temp: '27°C', icon: forecastWeatherIcon, day: 'Sun' },
    { id: '5', temp: '25°C', icon: forecastWeatherIcon, day: 'Mon' },
  ];

  return (
    <Layout>
      <div className={styles.main}>
        <div className={styles.data}>
          <div className={styles.weatherIconBlock}>
            <img
              className={styles.currentWeatherIcon}
              src={currentWeatherIcon}
            />
          </div>
          <div className={styles.currentTemperatureBlock}>
            <Typography className={styles.currentTemperatureValue} variant="h1">
              27
            </Typography>
            <Typography className={styles.currentTemperatureUnit} variant="h3">
              °C
            </Typography>
          </div>
          <Typography className={styles.date} variant="h2">
            6 july 2022
          </Typography>
          <Typography className={styles.dayAndTime}>
            Wednesday | 15:00
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
          <div className={styles.forecastBlock}>
            {forecastWeather.map((day) => {
              return (
                <ForecastElement
                  key={day.id}
                  temp={day.temp}
                  icon={day.icon}
                  day={day.day}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CityPage;
