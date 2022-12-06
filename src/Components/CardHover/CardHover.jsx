import React from 'react';
import './CardHover.scss';
const CardHover = (props) => {
  return (
    <>
      <div className='card-hover col-12 col-md-4'>
        <div className='card-hover-container'>
          <div className='card-hover-img'>
            <img className='img-fluid' src={props.img} alt='' />
          </div>
          <div className='card-hover-text'>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <a href='#'>See More</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardHover;
