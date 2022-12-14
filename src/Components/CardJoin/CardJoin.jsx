import React from 'react';
import './CardJoin.scss';
const CardJoin = (props) => {
  return (
    <>
      <div className='card-join col-12 col-lg-3 col-md-6 '>
        <div className='card-join-container'>
          <div className='card-join-img'>
            <img className='img-fluid' src={props.img} alt='This is Card Join' />
          </div>
          <div className='card-join-text'>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <a href='#'>Interesting?</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardJoin;
