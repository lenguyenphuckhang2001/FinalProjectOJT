import React, { useState } from 'react';
import BackToTop from 'react-back-to-top-button';
import './ScrollButton.scss';
const ScrollButton = () => {
  return (
    <BackToTop showAt={100} speed={500} easing='easeInOutSine'>
      <i class='fa-solid fa-angle-up'></i>
    </BackToTop>
  );
};

export default ScrollButton;
