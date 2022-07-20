import React, { useEffect } from 'react';

import { useQuery } from 'hooks/useQuery';

import { API } from 'api/api';
import CityPage from './CityPage';

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
      API.getWeatherData(reqType, lat, lon, units).then((response) => {
        console.log(response);
      });
    }

    console.log(lat);
    console.log(lon);
  });

  return <CityPage />;
};

export default CityPageContainer;
