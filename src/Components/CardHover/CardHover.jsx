import React from 'react';
import './CardHover.scss';
const CardHover = (props) => {
  const checkName = () => {
    if (props.name === 'Web App Development') {
      return <a href='#'>See More</a>;
    } else {
      return <a href='#'>Read More</a>;
    }
  };
  return (
    <>
      <div className='card-hover col-12 col-md-4'>
        <div className='card-hover-container'>
          <div className='card-hover-img'>
            <img className='img-fluid' src={props.img} alt='This is Card Hover' />
          </div>
          <div className='card-hover-text'>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            {checkName()}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardHover;
