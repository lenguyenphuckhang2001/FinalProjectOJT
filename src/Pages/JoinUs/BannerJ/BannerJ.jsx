import React from 'react';
import '../BannerJ/BannerJ.scss';

function BannerJ() {
  return (
    <div className='bannerJ'>
      <div className='img-caption'>
        <img className='JU-img' src='https://stunited.vn/wp-content/uploads/2019/09/join.jpg' />
        <div className='banner-caption'>
          <h1>JOIN ST TEAM NOW</h1>
          <h2>...to get the shit done</h2>
        </div>
        <div className='sub-title'>
          <p>Building a startup is hard, so we build a family to make it more enjoyable.</p>
        </div>
      </div>
    </div>
  );
}

export default BannerJ;
