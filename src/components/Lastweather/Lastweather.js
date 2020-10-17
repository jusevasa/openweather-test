import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import 'moment/locale/es';
import { lastWeather } from '../../service/Api';
import './Lastweather.css';

const Lastweather = ({ lat, lon }) => {
  const [dailys, setDailys] = useState();

  useEffect(() => {
    const sevenDays = async () => {
      const data = await lastWeather(lat, lon);

      setDailys(data.daily.splice(0, 7));
    };
    sevenDays();
  }, [lat, lon]);

  return (
    <>
      {dailys && (
        <div className='container-last'>
          <div className='container-last__items'>
            {dailys.map((element) => {
              return (
                <div className='container-last-items__card' key={element.dt}>
                  <strong>
                    <Moment format='dddd D MMM' unix>
                      {element.dt}
                    </Moment>
                  </strong>
                  <img src={`http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`} alt={element.weather[0].description} />
                  <strong>{Math.round(element.temp.max)}&deg;C</strong>
                  <small>{element.weather[0].description}</small>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

Lastweather.defaultProps = {
  lat: '',
  lon: '',
};

export default Lastweather;
