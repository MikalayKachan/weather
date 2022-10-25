import React, { useEffect, useState, useContext } from 'react';

import { CONSTANTS } from 'constants/common';

import { API } from 'api/api';

import { getWeatherData } from 'helpers/getWeatherData';

import { useFetch } from 'hooks/useFetch';

import HomePage from './HomePage';

import { AppContext } from 'helpers/context';

const HomePageContainer = () => {
  const { state, dispatch } = useContext(AppContext);

  const [locatingStatus, setLocatingStatus] = useState('');
  const [coordinate, setCoordinate] = useState<[number, number]>([0, 0]);

  const successGeolocation = (position: GeolocationPosition) => {
    setLocatingStatus('');
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    setCoordinate([lat, lon]);
  };

  const geolocationError = () => {
    setLocatingStatus('Unable to retrieve your location');
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocatingStatus('Geolocation is not supported by your browser');
    } else {
      navigator.geolocation.getCurrentPosition(
        successGeolocation,
        geolocationError,
      );
    }
  }, []);

  const lat = coordinate[0];
  const lon = coordinate[1];

  const currentSearchValue = {
    reqType: CONSTANTS.WEATHER_REQUEST,
    lat,
    lon,
    units: CONSTANTS.UNITS,
  };

  const { loading: currentWeatherLoading, data: currentWeatherData } = useFetch(
    {
      defaultData: null,
      fetcher: API.getWeatherData,
      stopRequest: coordinate[0] === 0 && coordinate[1] === 0,
      immediately: false,
      onSuccess: null,
      onError: null,
    },
    currentSearchValue,
    [currentSearchValue.reqType, coordinate[0], coordinate[1]],
  ) as unknown as { loading: boolean; data: any };

  const weatherData =
    !currentWeatherLoading &&
    currentWeatherData &&
    getWeatherData(currentWeatherData);

  const isDay = weatherData && weatherData.isDay;

  useEffect(() => {
    if (!currentWeatherLoading && isDay !== null) {
      dispatch({ type: 'SET_DAY_THEME_API', payload: isDay });
      if (state.themeAutoMode) {
        dispatch({ type: 'SET_DAY_THEME', payload: isDay });
      }
    }
  }, [isDay, currentWeatherLoading]);

  return (
    <HomePage
      locatingStatus={locatingStatus}
      currentWeatherLoading={currentWeatherLoading}
      {...weatherData}
    />
  );
};

export default HomePageContainer;
