import React, { useEffect, useState } from 'react';

import { CONSTANTS } from 'constants/common';

import { API } from 'api/api';

import { getWeatherData } from 'helpers/getWeatherData';

import { useFetch } from 'hooks/useFetch';

import HomePage from './HomePage';

const HomePageContainer = () => {
  const [locatingStatus, setLocatingStatus] = useState('');
  const [coordinate, setCoordinate] = useState<[number, number]>([0, 0]);

  const lat = coordinate[0];
  const lon = coordinate[1];

  const currentSearchValue = {
    reqType: CONSTANTS.WEATHER_REQUEST,
    lat,
    lon,
    units: CONSTANTS.UNITS,
  };

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
    [currentSearchValue.reqType, coordinate[0], coordinate[1]],
  ) as unknown as { loading: boolean; data: any };

  const weatherData =
    !currentWeatherLoading &&
    currentWeatherData &&
    getWeatherData(currentWeatherData);

  return <HomePage locatingStatus={locatingStatus} {...weatherData} />;
};

export default HomePageContainer;
