import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Header.scss';
import { Collapse } from 'react-bootstrap';

function Header() {
  const [display, setDisplay] = useState(false);
  const [expand, setExpand] = useState(false);
  const [openSubmenuMobi, setMobi] = useState(false);

  const handleOnClick = () => {
    setTimeout(() => {
      setDisplay(!display);
    }, 50);
  };
  const changeIcon = () => {
    setTimeout(() => {
      setExpand(!expand);
    }, 100);
  };

  return (
    <header>
      <div className='container'>
        <nav className='header-content'>
          <div className='header-logo'>
            <Link to='/'>
              <img
                className='img-fluid'
                src='https://stunited.vn/wp-content/uploads/2019/09/stunited-e15650013362301.png'
                alt='this is image for header'
              />
            </Link>
          </div>
          <div className='header-nav'>
            <ul id='mainNav'>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/st-software/'>What We Do</Link>
                <ul className='sub-menu'>
                  <li>
                    <Link to='/st-software/'>ST SOFTWARE</Link>
                  </li>
                  <li>
                    <Link to='/st-digital/'>ST DIGITAL</Link>
                  </li>
                  <li>
                    <Link to='/st-incubation/'>ST INCUBATION</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to='/who-we-are/'>Who We Are</Link>
              </li>
              <li>
                <Link to='/portfolio/'>Portfolio</Link>
              </li>
              <li>
                <Link to='/join-us'>Join Us</Link>
              </li>
              <li>
                <Link to='/lets-talk/'>Let's Talk</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className='container-fluid'>
        <nav className='header-mobi-content'>
          <div className='header-mobi-nav'>
            <div className='mobi-nav-button'>
              <i
                onClick={() => {
                  handleOnClick();
                }}
                className='fa-solid fa-bars'
              ></i>
            </div>

            {display && (
              <div className='mobi-nav-content'>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li
                  onClick={() => {
                    changeIcon();
                  }}
                  style={{ position: 'relative', overflow: 'hidden' }}
                >
                  <Link
                    className={!expand ? '' : 'background-blue text-white '}
                    onClick={() => {
                      setMobi(!openSubmenuMobi);
                    }}
                  >
                    What We Do
                  </Link>
                  <Collapse
                    in={openSubmenuMobi}
                    className={!openSubmenuMobi ? '' : 'background-light-blue '}
                  >
                    <div>
                      <li>
                        <Link className='text-white' to='/st-software/'>
                          ST SOFTWARE
                        </Link>
                      </li>
                      <li>
                        <Link className='text-white' to='/st-digital/'>
                          ST DIGITAL
                        </Link>
                      </li>
                      <li>
                        <Link className='text-white' to='/st-incubation/'>
                          ST INCUBATION
                        </Link>
                      </li>
                    </div>
                  </Collapse>
                  <span
                    onClick={() => {
                      setMobi(!openSubmenuMobi);
                    }}
                    className={!expand ? 'expand-btn' : 'expand-btn-open'}
                  ></span>
                </li>
                <li>
                  <Link to='/who-we-are/'>Who We Are</Link>
                </li>
                <li>
                  <Link to='/portfolio/'>Portfolio</Link>
                </li>
                <li>
                  <Link to='/join-us'>Join Us</Link>
                </li>
                <li>
                  <Link to='/lets-talk/'>Let's Talk</Link>
                </li>
              </div>
            )}
          </div>

          <div className='header-mobi-logo'>
            <Link to='/'>
              <img
                className='img-fluid'
                src='https://stunited.vn/wp-content/uploads/2019/09/stunited-e15650013362301.png'
                alt='for mobile devices'
              />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
