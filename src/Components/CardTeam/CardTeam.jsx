import React from 'react';
import './CardTeam.scss';
const CardTeam = (props) => {
  return (
    <>
      <div className='card-team col-12 col-md-6 col-lg-3'>
        <div className='card-team-container'>
          <div className='card-team-img'>
            <img className='img-fluid' src={props.img} alt='Card Team' />
          </div>
          <div className='card-team-text'>
            <h3>{props.name}</h3>
            <p className='nameItem'>{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardTeam;
