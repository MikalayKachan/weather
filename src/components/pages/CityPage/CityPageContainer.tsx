import React from 'react';

import { useQuery } from 'hooks/useQuery';
import { useFetch } from 'hooks/useFetch';

import { API } from 'api/api';
import CityPage from './CityPage';

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
  console.log('currentWeatherData', currentWeatherData);

  console.log('forecastWeatherLoading', forecastWeatherLoading);
  console.log('forecastWeatherData', forecastWeatherData);

  let currentTemp;
  let humidity;
  let windSpeed;
  let clouds;

  if (currentWeatherData) {
    currentTemp = Math.round(currentWeatherData.main.temp);
    humidity = currentWeatherData.main.humidity;
    windSpeed = currentWeatherData.wind.speed;
    clouds = currentWeatherData.clouds.all;
  }

  console.log('currentTemp', currentTemp);

  return (
    <CityPage
      currentTemp={currentTemp}
      humidity={humidity}
      windSpeed={windSpeed}
      clouds={clouds}
    />
  );
};

export default CityPageContainer;
