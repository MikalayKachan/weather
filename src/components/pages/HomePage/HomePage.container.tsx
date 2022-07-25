import React, { useEffect, useState } from 'react';

import { API } from 'api/api';

import { useFetch } from 'hooks/useFetch';

import HomePage from './HomePage';

const HomePageContainer = () => {
  const [locatingStatus, setLocatingStatus] = useState('');
  const [coordinate, setCoordinate] = useState<[number, number]>([0, 0]);

  const lat = coordinate[0];
  const lon = coordinate[1];
  const units = 'metric';

  const currentSearchValue = { reqType: 'weather', lat, lon, units };

  function success(position: GeolocationPosition) {
    setLocatingStatus('');
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    setCoordinate([lat, lon]);
  }

  function error() {
    setLocatingStatus('Unable to retrieve your location');
  }

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocatingStatus('Geolocation is not supported by your browser');
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
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
    [currentSearchValue.reqType, coordinate[0], coordinate[1], units],
  ) as unknown as { loading: boolean; data: any };

  let currentTemp;
  let humidity;
  let windSpeed;
  let clouds;
  let name;
  let date;
  let day;
  let time;

  let currentDate;

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
  }

  return (
    <HomePage
      locatingStatus={locatingStatus}
      currentWeatherLoading={currentWeatherLoading}
      currentTemp={currentTemp}
      humidity={humidity}
      windSpeed={windSpeed}
      clouds={clouds}
      name={name}
      date={date}
      day={day}
      time={time}
    />
  );
};

export default HomePageContainer;
