import React, { useEffect, useState } from 'react';
import './ScrollButton.scss';
const ScrollButton = () => {
  const [showBtn, setTopbtn] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setTopbtn(true);
      } else {
        setTopbtn(false);
      }
    });
  }, []);

  return (
    <div>
      {showBtn ? (
        <div className='scrollToTopOn' onClick={scrollToTop}>
          <i className='fa-sharp fa-solid fa-angle-up'></i>
        </div>
      ) : (
        <div className='scrollToTopOff' onClick={scrollToTop}>
          <i className='fa-sharp fa-solid fa-angle-up'></i>
        </div>
      )}
    </div>
  );
};
export default ScrollButton;
