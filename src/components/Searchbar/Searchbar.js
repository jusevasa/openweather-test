import React, { useState } from 'react';
import * as HiIcons from 'react-icons/hi';
import './Searchbar.css';
import { useDispatch } from 'react-redux';
import { daily } from '../../store/actions/weatherActions';
import { addToHistory } from '../../store/actions/lastweatherActions';

const Searchbar = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');

  /**
   * @method handleSearch
   * @description dispatch input search
   **/
  const handleSearch = (e) => {
    if (e.key) {
      if (e.key === 'Enter') {
        dispatch(daily(search));
        dispatch(addToHistory(search));
        setSearch('');
      }
    } else {
      dispatch(daily(search));
      dispatch(addToHistory(search));
      setSearch('');
    }
  };

  return (
    <>
      <p>Busqueda por ciudad:</p>
      <div className='search'>
        <input type='text' placeholder='Ingrese una ciudad' onChange={(e) => setSearch(e.target.value)} onKeyPress={handleSearch} />
        <span onClick={handleSearch}>
          <HiIcons.HiOutlineSearch />
        </span>
      </div>
    </>
  );
};

export default Searchbar;
