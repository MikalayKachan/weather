import DayCloudsLow from 'assets/svg/DayCloudsLow.svg';
import DayCloudsMiddle from 'assets/svg/DayCloudsMiddle.svg';
import DayCloudsHigh from 'assets/svg/DayCloudsHigh.svg';

const getDateValues = (timezone: number) => {
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

const getCloudsIcon = (clouds) => {
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
    clouds: getCloudsIcon(w.clouds.all),
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

  const weatherIcon = getCloudsIcon(clouds);

  const forecastWeatherForRender =
    forecastWeatherData && getForecastData(forecastWeatherData);

  return {
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
