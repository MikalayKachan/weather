import DayCloudsLow from 'assets/svg/DayCloudsLow.svg';
import DayCloudsMiddle from 'assets/svg/DayCloudsMiddle.svg';
import DayCloudsHigh from 'assets/svg/DayCloudsHigh.svg';

import NightCloudsLow from 'assets/svg/NightCloudsLow.svg';
import NightCloudsMiddle from 'assets/svg/NightCloudsMiddle.svg';
import NightCloudsHigh from 'assets/svg/NightCloudsHigh.svg';

const getDateValues = (timezone) => {
  let dateUTC = new Date().toString();

  let dateInMiliSeconds = Date.parse(dateUTC);

  const currentDate = dateInMiliSeconds + timezone * 1000;

  const date = new Date(currentDate).toLocaleString('en-GB', {
    timeZone: 'UTC',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const day = new Date(currentDate).toLocaleString('en-GB', {
    timeZone: 'UTC',
    weekday: 'long',
  });

  const time = new Date(currentDate).toLocaleString('en-GB', {
    timeZone: 'UTC',
    timeStyle: 'short',
  });

  return { date, day, time };
};

const getCloudsIcon = (clouds, isDay) => {
  if (isDay) {
    switch (true) {
      case clouds < 33: {
        return DayCloudsLow;
      }
      case clouds >= 33 && clouds < 66: {
        return DayCloudsMiddle;
      }
      case clouds >= 66: {
        return DayCloudsHigh;
      }
      default:
        return 'error';
    }
  } else {
    switch (true) {
      case clouds < 33: {
        return NightCloudsLow;
      }
      case clouds >= 33 && clouds < 66: {
        return NightCloudsMiddle;
      }
      case clouds >= 66: {
        return NightCloudsHigh;
      }
      default:
        return 'error';
    }
  }
};

const getForecastData = (forecastWeatherData) => {
  const forecastWeatherArr = forecastWeatherData.list.filter((item) =>
    item.dt_txt.includes('12:00:00'),
  );

  const forecastWeatherForRender = forecastWeatherArr.map((w) => ({
    key: w.dt,
    day: new Date(w.dt_txt).toLocaleString('en-GB', {
      timeZone: 'UTC',
      weekday: 'long',
    }),
    temp: Math.round(Number(w.main.temp)),
    clouds: getCloudsIcon(w.clouds.all, true),
  }));

  return forecastWeatherForRender;
};

export const getWeatherData = (currentWeatherData, forecastWeatherData) => {
  const { date, day, time } = getDateValues(currentWeatherData.timezone);

  const currentTemp = Math.round(currentWeatherData.main.temp);
  const humidity = currentWeatherData.main.humidity;
  const windSpeed = currentWeatherData.wind.speed;
  const clouds = currentWeatherData.clouds.all;
  const name = currentWeatherData.name;
  let isDay;

  const forecastWeatherForRender =
    forecastWeatherData && getForecastData(forecastWeatherData);

  const sunrise = currentWeatherData.sys.sunrise;
  const sunset = currentWeatherData.sys.sunset;
  const now = currentWeatherData.dt;

  if (now >= sunrise && now < sunset) {
    isDay = true;
  } else {
    isDay = false;
  }

  const weatherIcon = getCloudsIcon(clouds, isDay);

  return {
    isDay,
    currentTemp,
    humidity,
    windSpeed,
    clouds,
    name,
    date,
    day,
    time,
    weatherIcon,
    forecastWeatherForRender,
  };
};
