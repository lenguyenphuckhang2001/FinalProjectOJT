import React from 'react';
import './Button.scss';

const Button = () => {
  return (
    <div>
      <div className='container'>
        <div className='button'>
          <button className='button-portfilio'>
            <a href='https://storage.googleapis.com/stunited/STU%20SUCCESS%20STORIES.pdf'>
              Download full stories
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Button;
