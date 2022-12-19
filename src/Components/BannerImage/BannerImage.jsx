import { useEffect } from 'react';
import './BannerImage.scss';

const BannerImage = ({ backgroundUrl, captions }) => {
  useEffect(() => {
    const handleScroll = () => {
      let bannerImage = document.querySelector('.banner-imgage');
      let Y = window.scrollY;
      if (window.innerWidth <= 990 && Y >= 60) {
        bannerImage.style.transform = 'translate3d(0, ' + (Y - 60) / 3.5 + 'px, 0)';
      } else {
        bannerImage.style.transform = 'translate3d(0, 0, 0)';
      }
      if (window.innerWidth >= 1000 && Y >= 10) {
        bannerImage.style.transform = 'translate3d(0, ' + Y / 3.5 + 'px, 0)';
      } else {
        bannerImage.style.transform = 'translate3d(0, 0, 0)';
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className='banner-imgage'
      style={{
        background: `url(${backgroundUrl})`,
      }}
    >
      <div className='banner-caption'>
        <h1 className='heading1-cap'>{captions[0]}</h1>
        <h2 className='heading2-cap'>{captions[1]}</h2>
      </div>
    </div>
  );
};

export default BannerImage;
