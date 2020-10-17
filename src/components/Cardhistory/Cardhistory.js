import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { daily } from '../../store/actions/weatherActions';
import './Cardhistory.css';

const Cardhistory = ({ name, icon, temp }) => {
  const dispatch = useDispatch();

  const handlerOnClickMore = () => {
    dispatch(daily(name));
  };

  return (
    <div className='card-history'>
      <div className='container-card'>
        <strong>{name}</strong>
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={name} />
        <div className='card__temp'>{Math.round(temp)}&deg;C</div>
      </div>
      <Link to='/' onClick={handlerOnClickMore}>
        Ver más
      </Link>
    </div>
  );
};

export default Cardhistory;
