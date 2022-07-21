import React, { useEffect } from 'react';

import { useQuery } from 'hooks/useQuery';

import { API } from 'api/api';
import CityPage from './CityPage';
import { useFetch } from 'hooks/useFetch';

const CityPageContainer = () => {
  let lat: string | null = '';
  let lon: string | null = '';

  const query = useQuery();
  const reqType = 'forecast';
  const units = 'metric';

  useEffect(() => {
    if (query) {
      lat = query.get('lat');
      lon = query.get('lon');
    }
  });

  const searchValue = { reqType, lat, lon, units };

  const { loading: cityWeatherLoading, data: forecastWeatherData } = useFetch(
    {
      defaultData: null,
      fetcher: API.getWeatherData,
      stopRequest: false,
      immediately: false,
      onSuccess: null,
      onError: null,
    },
    searchValue,
    [reqType, lat, lon, units],
  ) as unknown as { loading: boolean; data: any };

  console.log('cityWeatherLoading', cityWeatherLoading);
  console.log('forecastWeatherData', forecastWeatherData);

  return <CityPage />;
};

export default CityPageContainer;
