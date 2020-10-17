import React from 'react';
import './Heroweather.css';

const Heroweather = ({ weatherInfo }) => {
  return (
    <>
      {weatherInfo && (
        <div className='weather'>
          <div className='weather__icon'>
            <img src={`http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`} alt={weatherInfo.weather[0].description} />
          </div>
          <h4>{weatherInfo.name}</h4>
          <div className='weather__items'>
            <strong>{weatherInfo.weather[0].description}</strong>
            <div className='weather__temp'>
              <div className='item__temp weather__temp--blue'>{Math.round(weatherInfo.main.temp_max)}&deg;C</div>
              <div className='item__temp weather__temp--grey'>{Math.round(weatherInfo.main.temp_min)}&deg;C</div>
            </div>

            <div className='weather__info'>
              <p>Humendad: {weatherInfo.main.humidity}%</p>
              <p>Vientos: {weatherInfo.wind.speed} m/s</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Heroweather;
