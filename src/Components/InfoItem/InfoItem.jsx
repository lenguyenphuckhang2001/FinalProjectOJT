import React from 'react';
import { Col } from 'react-bootstrap';
import './InfoItem.scss';

const InfoItem = ({ imgSrc, title, paragraph }) => {
  return (
    <>
      <Col>
        <div className='module-item'>
          <div className='block-icon'>
            <img src={imgSrc} alt='' />
          </div>
          <div className='block-content'>
            <h3>{title}</h3>
            <p>{paragraph}</p>
          </div>
        </div>
      </Col>
    </>
  );
};

export default InfoItem;
