import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { weatherReducer } from './reducers/weatherReducers';
import { lastweatherReducer } from './reducers/lastweatherReducers';

const reducer = combineReducers({
  weather: weatherReducer,
  weatherHistory: lastweatherReducer,
});

const weatherFromStorage = localStorage.getItem('weatherInfo') ? JSON.parse(localStorage.getItem('weatherInfo')) : null;
const weatherHistoryFromStorage = localStorage.getItem('historyItems') ? JSON.parse(localStorage.getItem('historyItems')) : [];

const initialState = {
  weather: { weatherInfo: weatherFromStorage },
  weatherHistory: { historyItems: weatherHistoryFromStorage },
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
