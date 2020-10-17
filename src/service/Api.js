import axios from 'axios';

/**
 * get Dayly weather for HearoWeatherComponent
 * @method getDaily
 * @returns 'HearoWeatherComponent' object whit data
 **/
export const dailyWeather = (query) => {
  const res = axios.get(process.env.REACT_APP_API_URL + 'weather', {
    params: {
      q: query,
      units: 'metric',
      APPID: process.env.REACT_APP_API_KEY,
      lang: 'es',
    },
  });
  return res;
};

/**
 * get Seven Day's weather for LastWeatherComponent
 * @method getDailys
 * @returns 'LastWeatherComponent' object whit data
 **/
export const lastWeather = async (lat, lon) => {
  const {data}  = await axios.get(process.env.REACT_APP_API_URL + 'onecall', {
    params: {
      lat: lat,
      lon: lon,
      exclude: 'current,minutely,hourly,alerts',
      units: 'metric',
      APPID: process.env.REACT_APP_API_KEY,
      lang: 'es',
    },
  });
  return data;
};
