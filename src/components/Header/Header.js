import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <header>
      <div className='navbar'>
        <Container className='navbar__brand' fluid>
          <Link to='#' className='navbar__bars'>
            <IoIcons.IoIosMenu onClick={showSidebar} />
          </Link>
          <Link to='/'>
            <h2>weather App</h2>
          </Link>
        </Container>
      </div>
      {sidebar && <div className='navbar__mask'></div>}
      <nav className={sidebar ? 'navbar__menu active' : 'navbar__menu'}>
        <ul className='navbar__items'>
          <li className='navbar__text' onClick={showSidebar}>
            <Link to='/'>
              <IoIcons.IoIosHome />
              <span>Home</span>
            </Link>
          </li>
          <li className='navbar__text' onClick={showSidebar}>
            <Link to='/history'>
              <AiIcons.AiOutlineHistory />
              <span>History</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
