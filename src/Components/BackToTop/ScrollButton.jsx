import React, { useState } from 'react';
import BackToTop from 'react-back-to-top-button';
const ScrollButton = () => {
  const [background, setBg] = useState('#00aeef');

  const btnStyle = {
    margin: '0',
    right: '30px',
    bottom: '30px',
    fontSize: '18px',
    background: background,
    border: 'none',
    width: '40px',
    height: '40px',
    lineHeight: '40px',
    borderRadius: '4px',
    zIndex: '999',
    transition: '0.2s',
    color: 'white',
  };
  return (
    <BackToTop style={btnStyle} showAt={100} speed={500} easing='easeInOutSine'>
      <i
        onMouseOver={() => {
          setBg('#23baf0');
        }}
        onMouseOut={() => {
          setBg('#00aeef');
        }}
        class='fa-solid fa-angle-up'
      ></i>
    </BackToTop>
  );
};

export default ScrollButton;
