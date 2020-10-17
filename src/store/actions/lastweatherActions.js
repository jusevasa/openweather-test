import axios from 'axios';
import { ADD_WEATHER_REQUEST } from '../constants/lastweatherConstans';

export const addToHistory = (city) => async (dispatch, getState) => {
  const { data } = await axios.get(process.env.REACT_APP_API_URL + 'weather', {
    params: {
      q: city,
      units: 'metric',
      APPID: process.env.REACT_APP_API_KEY,
      lang: 'es',
    },
  });

  dispatch({
    type: ADD_WEATHER_REQUEST,
    payload: {
      name: data.name,
      icon: data.weather[0].icon,
      temp: data.main.temp_max,
    },
  });

  localStorage.setItem('historyItems', JSON.stringify(getState().weatherHistory.historyItems));
};
