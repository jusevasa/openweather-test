import { WEATHER_REQUEST, WEATHER_SUCCESS, WEATHER_FAIL } from '../constants/weatherConstants';
import axios from 'axios';

export const daily = (city) => async (dispatch) => {
  try {
    dispatch({ type: WEATHER_REQUEST });
    const { data } = await axios.get(process.env.REACT_APP_API_URL + 'weather', {
      params: {
        q: city,
        units: 'metric',
        APPID: process.env.REACT_APP_API_KEY,
        lang: 'es',
      },
    });
    dispatch({ type: WEATHER_SUCCESS, payload: data });
    localStorage.setItem('weatherInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: WEATHER_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
