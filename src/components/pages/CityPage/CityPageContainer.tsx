import React from 'react';

import { useQuery } from 'hooks/useQuery';
import { useFetch } from 'hooks/useFetch';

import { API } from 'api/api';
import CityPage from './CityPage';

import DayCloudsLow from 'assets/svg/DayCloudsLow.svg';
import DayCloudsMiddle from 'assets/svg/DayCloudsMiddle.svg';
import DayCloudsHigh from 'assets/svg/DayCloudsHigh.svg';
//import NightCloudsLow from 'assets/svg/NightCloudsLow.svg';
//import NightCloudsMiddle from 'assets/svg/NightCloudsMiddle.svg';
//import NightCloudsHigh from 'assets/svg/NightCloudsHigh.svg';

type ForecastWeatherForRenderItemType = {
  key: number;
  day: string;
  temp: number;
  clouds: string;
};

const CityPageContainer = () => {
  const query = useQuery();
  const lat = query.get('lat');
  const lon = query.get('lon');

  const units = 'metric';

  const currentSearchValue = { reqType: 'weather', lat, lon, units };
  const forecastSearchValue = { reqType: 'forecast', lat, lon, units };

  const { loading: currentWeatherLoading, data: currentWeatherData } = useFetch(
    {
      defaultData: null,
      fetcher: API.getWeatherData,
      stopRequest: false,
      immediately: false,
      onSuccess: null,
      onError: null,
    },
    currentSearchValue,
    [currentSearchValue.reqType, lat, lon, units],
  ) as unknown as { loading: boolean; data: any };

  const { loading: forecastWeatherLoading, data: forecastWeatherData } =
    useFetch(
      {
        defaultData: null,
        fetcher: API.getWeatherData,
        stopRequest: false,
        immediately: false,
        onSuccess: null,
        onError: null,
      },
      forecastSearchValue,
      [forecastSearchValue.reqType, lat, lon, units],
    ) as unknown as { loading: boolean; data: any };

  console.log('currentWeatherLoading', currentWeatherLoading);
  console.log('forecastWeatherLoading', forecastWeatherLoading);

  let currentTemp;
  let humidity;
  let windSpeed;
  let clouds;
  let name;
  let date;
  let day;
  let time;
  let weatherIcon;

  let currentDate;

  let forecastWeatherForRender = [] as Array<ForecastWeatherForRenderItemType>;

  const dateWithUTC = (timezone: number) => {
    let dateUTC = new Date().toString();
    let dateInMiliSeconds = Date.parse(dateUTC);
    return dateInMiliSeconds + timezone * 1000;
  };

  if (currentWeatherData) {
    currentDate = dateWithUTC(currentWeatherData.timezone);

    currentTemp = Math.round(currentWeatherData.main.temp);
    humidity = currentWeatherData.main.humidity;
    windSpeed = currentWeatherData.wind.speed;
    clouds = currentWeatherData.clouds.all;
    name = currentWeatherData.name;

    date = new Date(currentDate).toLocaleString('en-GB', {
      timeZone: 'UTC',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    day = new Date(currentDate).toLocaleString('en-GB', {
      timeZone: 'UTC',
      weekday: 'long',
    });
    time = new Date(currentDate).toLocaleString('en-GB', {
      timeZone: 'UTC',
      timeStyle: 'short',
    });

    const cloudsIcon = (clouds: number) => {
      if (clouds < 33) {
        return DayCloudsLow;
      }
      if (clouds >= 33 && clouds < 66) {
        return DayCloudsMiddle;
      }
      if (clouds > 66) {
        return DayCloudsHigh;
      }
      return 'error';
    };

    weatherIcon = cloudsIcon(clouds);

    const forecastWeatherArr = [];
    if (forecastWeatherData) {
      for (let i = 0; i < forecastWeatherData.list.length; i++) {
        if (forecastWeatherData.list[i].dt_txt.includes('12:00:00')) {
          forecastWeatherArr.push(forecastWeatherData.list[i]);
        }
      }
    }

    forecastWeatherForRender = forecastWeatherArr.map((w) => ({
      key: w.dt,
      day: new Date(w.dt_txt).toLocaleString('en-GB', {
        timeZone: 'UTC',
        weekday: 'long',
      }),
      temp: Math.round(Number(w.main.temp)),
      clouds: cloudsIcon(w.clouds.all),
    }));
  }

  return (
    <CityPage
      currentTemp={currentTemp}
      humidity={humidity}
      windSpeed={windSpeed}
      clouds={clouds}
      name={name}
      date={date}
      day={day}
      time={time}
      weatherIcon={weatherIcon}
      forecastWeatherForRender={forecastWeatherForRender}
    />
  );
};

export default CityPageContainer;
