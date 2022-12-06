import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className='container'>
        <nav className='heer-content'>
          <div className='header-logo'>
            <a href='/'>
              <img src='https://stunited.vn/wp-content/uploads/2019/09/stunited-e15650013362301.png' />
            </a>
          </div>
          <div className='header-nav'>
            <ul id='mainNav'>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/st-software/'>What We Do</Link>
              </li>
              <li>
                <Link to='/who-we-are/'>Who We Are</Link>
              </li>
              <li>
                <Link to='/portfolio/'>Portfolio</Link>
              </li>
              <li>Join Us</li>
              <li>Let's Talk</li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
