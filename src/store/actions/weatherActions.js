import { WEATHER_REQUEST, WEATHER_SUCCESS, WEATHER_FAIL } from '../constants/weatherConstants';
import { dailyWeather } from '../../service/Api';

export const daily = (city) => async (dispatch) => {
  try {
    dispatch({ type: WEATHER_REQUEST });

    const { data } = await dailyWeather(city);

    dispatch({ type: WEATHER_SUCCESS, payload: data });

    localStorage.setItem('weatherInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: WEATHER_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
