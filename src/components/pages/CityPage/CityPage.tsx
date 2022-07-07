import React from 'react';

import { Typography } from 'components/shared/Typography';
import { ForecastElement } from 'components/pages/CityPage/ForecastElement';
import { CurrentWeatherElement } from 'components/pages/CityPage/CurrentWeatherElement';

import windIcon from 'assets/svg/WindIcon.svg';
import humIcon from 'assets/svg/HumIcon.svg';
import rainIcon from 'assets/svg/RainIcon.svg';
import forecastWeatherIcon from 'assets/svg/WeatherIcon-2-39.svg';
import currentWeatherIcon from 'assets/svg/WeatherIcon-2-40.svg';

import styles from './CityPage.module.scss';

const CityPage = () => {
  const currentWeather = [
    { icon: windIcon, text: 'Wind 10 km/h' },
    { icon: humIcon, text: 'Hum 54 %' },
    { icon: rainIcon, text: 'Rain 0.2 %' },
  ];

  const forecastWeather = [
    { temp: '24°C', icon: forecastWeatherIcon, day: 'Thu' },
    { temp: '25°C', icon: forecastWeatherIcon, day: 'Fri' },
    { temp: '25°C', icon: forecastWeatherIcon, day: 'Sat' },
    { temp: '27°C', icon: forecastWeatherIcon, day: 'Sun' },
    { temp: '25°C', icon: forecastWeatherIcon, day: 'Mon' },
  ];

  return (
    <div className={styles.main}>
      <div className={styles.data}>
        <div className={styles.weatherIconBlock}>
          <img className={styles.currentWeatherIcon} src={currentWeatherIcon} />
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
        <Typography className={styles.dayAndTime}>Wednesday | 15:00</Typography>
        <div className={styles.currentWeatherBlock}>
          {currentWeather.map((el, i) => {
            return (
              <React.Fragment key={i}>
                <CurrentWeatherElement icon={el.icon} text={el.text} />
                {i < currentWeather.length - 1 && (
                  <Typography
                    className={styles.separator}
                    variant="h5"
                    shadow="withoutShadow"
                  >
                    |
                  </Typography>
                )}
              </React.Fragment>
            );
          })}
        </div>
        <div className={styles.forecastBlock}>
          {forecastWeather.map((el, i) => {
            return (
              <ForecastElement
                key={i}
                temp={el.temp}
                icon={el.icon}
                day={el.day}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CityPage;
