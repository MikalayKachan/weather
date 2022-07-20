import axios from 'axios';

export const API = {
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
  async getWeatherData(
    reqType: string,
    lat: string | null,
    lon: string | null,
    units: string,
  ) {
    let response = await axios.get(
      `https://api.openweathermap.org/data/2.5/${reqType}`,
      {
        params: {
          lat,
          lon,
          units,
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
