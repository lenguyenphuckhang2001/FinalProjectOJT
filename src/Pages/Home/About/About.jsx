import React from 'react';
import AboutApi from '../../../Api/AboutAPI';
import { useEffect } from 'react';
import { useState } from 'react';
import CardHover from '../../../Components/CardHover/CardHover';
import './About.scss';
function About() {
  const [state, setState] = useState([]);
  useEffect(() => {
    AboutApi.getAbout()
      .then((result) => {
        setState(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <section className='about'>
      <div className='about-bg'></div>
      <div className='container-fluid'>
        <div className='about-content'>
          <div className='about-above'>
            <div className='about-text'>
              <h2>WE DEVELOP | WE SUPPORT | WE IMPROVE</h2>
              <h3>Launch your ideas. Execute your plans. Maximize project success.</h3>
            </div>
          </div>
          <div className='about-bottom'>
            <div className='container'>
              <div className='row g-0'>
                {state.map((item) => {
                  return (
                    <CardHover img={item.img} name={item.name} description={item.description} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
