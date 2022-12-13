import React from 'react';
import './Button.scss';

const Button = ({ link, description }) => {
  return (
    <div className='container'>
      <div className='button'>
        <a className='button-portfilio' href={link}>
          <p>{description}</p>
        </a>
      </div>
    </div>
  );
};

export default Button;
