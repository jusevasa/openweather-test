import { WEATHER_REQUEST, WEATHER_SUCCESS, WEATHER_FAIL } from '../constants/weatherConstants';
export const weatherReducer = (state = {}, action) => {
  switch (action.type) {
    case WEATHER_REQUEST:
      return { loading: true };
    case WEATHER_SUCCESS:
      return { loading: false, weatherInfo: action.payload };
    case WEATHER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
