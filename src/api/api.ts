import axios from 'axios';

export const API = {
  async getCitiesList(cityName: string) {
    return await axios.get(`http://api.openweathermap.org/geo/1.0/direct`, {
      params: {
        q: cityName,
        limit: 5,
      },
    });
  },
  async getWeatherData(
    reqType: string,
    lat: number,
    lon: number,
    units: string,
  ) {
    return await axios.get(
      `https://api.openweathermap.org/data/2.5/${reqType}`,
      {
        params: {
          lat,
          lon,
          units,
        },
      },
    );
  },
};

axios.interceptors.request.use(function (config) {
  config.params.appid = '4df65d18b99b085efed2c7cca527a890';
  return config;
});
