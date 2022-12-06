import React from 'react';
import './CardSwiper.scss';
const CardSwiper = (props) => {
  return (
    <div className='col-12 col-md-3'>
      <div className='card-swiper-inner'>
        <div className='card-swiper-wrapper'>
          <div className='card-swiper'>
            <img src={props.img} alt='' />
            <div className='card-swiper-overlay-1'>
              <div className='card-swiper-text'>
                <p>{props.name}</p>
                <span>{props.tech.join(' ')}</span>
                <div className='card-swiper-icon'>
                  <i className='fa-brands fa-square-facebook'></i>
                  <i className='fa-brands fa-linkedin'></i>
                </div>
              </div>
            </div>
            <div className='card-swiper-overlay-2'>
              <div className='swiper-overlay-2-inner'>
                <div className='card-swiper-text'>
                  <h4>
                    <a href='#'>{props.name}</a>
                  </h4>
                  <p>
                    <a href='#'>{props.tech.join(' ')}</a>
                  </p>
                  <p className='swiper-overlay-2-description'>{props.description}</p>
                  <div className='card-swiper-icon'>
                    <a href=''>
                      <i className='fa-brands fa-square-facebook'></i>
                    </a>
                    <a href=''>
                      <i className='fa-brands fa-linkedin'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSwiper;
