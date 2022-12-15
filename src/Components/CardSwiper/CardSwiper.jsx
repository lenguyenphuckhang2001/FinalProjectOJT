import React from 'react';
import './CardSwiper.scss';
const CardSwiper = (props) => {
  return (
    <div className='col-12 col-md-3'>
      <div className='card-swiper-inner'>
        <div className='card-swiper-wrapper'>
          <div className='card-swiper'>
            <img src={props.img} alt='This is Card Swiper' />
            <div className='card-swiper-overlay-1'>
              <div className='card-swiper-text'>
                <p>{props.name}</p>
                <span>{typeof props.tech === 'string' ? props.tech : props.tech.join(' ')}</span>
                <div className='card-swiper-icon'>
                  <a href='https://www.facebook.com/stunited.vn/'>
                    <i className='fa-brands fa-square-facebook'></i>
                  </a>
                  <a href='#'>
                    <i className='fa-brands fa-linkedin'></i>
                  </a>
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
                    <a href='#'>
                      {typeof props.tech === 'string' ? props.tech : props.tech.join(' ')}
                    </a>
                  </p>
                  <p className='swiper-overlay-2-description'>{props.description}</p>
                  <div className='card-swiper-icon'>
                    <a href='https://www.facebook.com/stunited.vn/'>
                      <i className='fa-brands fa-square-facebook'></i>
                    </a>
                    <a href='#'>
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
