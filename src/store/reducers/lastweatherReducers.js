import { ADD_WEATHER } from '../constants/lastweatherConstans';
export const lastweatherReducer = (state = { historyItems: [] }, action) => {
  switch (action.type) {
    case ADD_WEATHER:
      const item = action.payload;

      const existItem = state.historyItems.find((x) => x.name === item.name);

      if (existItem) {
        return {
          ...state,
          cartItems: state.historyItems.map((x) => (x.name === existItem.name ? item : x)),
        };
      } else {
        return {
          ...state,
          historyItems: [...state.historyItems, item],
        };
      }
    default:
      return state;
  }
};
