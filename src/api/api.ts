import axios from 'axios';

export const citiesAPI = {
  async getCitiesList(cityName: string) {
    let response = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct`,
      {
        params: {
          q: cityName,
          limit: 5,
        },
      },
    );
    return response.data;
  },
};

export const currentWeatherAPI = {
  async getCurrentWeather(lat: number, lon: number) {
    let response = await axios.get(
      'https://api.openweathermap.org/data/2.5/weather',
      {
        params: {
          lat,
          lon,
          units: 'metric',
        },
      },
    );
    return response.data;
  },
};

export const forecastDataAPI = {
  async getForecastData(lat: number, lon: number) {
    let response = await axios.get(
      'https://api.openweathermap.org/data/2.5/forecast',
      {
        params: {
          lat,
          lon,
          units: 'metric',
        },
      },
    );
    return response.data;
  },
};

axios.interceptors.request.use(function (config) {
  config.params.appid = '4df65d18b99b085efed2c7cca527a890';
  return config;
});
