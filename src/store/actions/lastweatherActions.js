import { ADD_WEATHER } from '../constants/lastweatherConstans';
import { dailyWeather } from '../../service/Api';

export const addToHistory = (city) => async (dispatch, getState) => {
  try {
    const { data } = await dailyWeather(city);
    dispatch({
      type: ADD_WEATHER,
      payload: {
        name: data.name,
        icon: data.weather[0].icon,
        temp: data.main.temp_max,
      },
    });

    localStorage.setItem('historyItems', JSON.stringify(getState().weatherHistory.historyItems));
  } catch (error) {
    throw new error();
  }
};
