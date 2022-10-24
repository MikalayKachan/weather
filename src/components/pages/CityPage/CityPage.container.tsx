import React, { useContext } from 'react';

import { CONSTANTS } from 'constants/common';

import { getWeatherData } from 'helpers/getWeatherData';

import { useQuery } from 'hooks/useQuery';
import { useFetch } from 'hooks/useFetch';

import { API } from 'api/api';

import CityPage from './CityPage';
import { AppContext } from 'helpers/context';

const CityPageContainer = () => {
  const { state, dispatch } = useContext(AppContext);

  const query = useQuery();
  const lat = query.get('lat');
  const lon = query.get('lon');

  const { loading: currentWeatherLoading, data: currentWeatherData } = useFetch(
    {
      defaultData: null,
      fetcher: API.getWeatherData,
      stopRequest: false,
      immediately: false,
      onSuccess: null,
      onError: null,
    },
    { reqType: CONSTANTS.WEATHER_REQUEST, lat, lon, units: CONSTANTS.UNITS },
    [lat, lon],
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
      { reqType: CONSTANTS.FORECAST_REQUEST, lat, lon, units: CONSTANTS.UNITS },
      [lat, lon],
    ) as unknown as { loading: boolean; data: any };

  const loading = currentWeatherLoading || forecastWeatherLoading;

  console.log(currentWeatherData);

  const weatherData =
    !loading &&
    currentWeatherData &&
    forecastWeatherData &&
    getWeatherData(currentWeatherData, forecastWeatherData);

  weatherData &&
    dispatch({ type: 'SET_DAY_THEME_API', payload: weatherData.isDay });
  weatherData &&
    dispatch({ type: 'SET_DAY_THEME', payload: weatherData.isDay });

  return <CityPage loading={loading} {...weatherData} />;
};

export default CityPageContainer;
