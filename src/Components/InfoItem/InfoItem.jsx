import React from 'react';
import { Col } from 'react-bootstrap';
import './InfoItem.scss';

const InfoItem = ({ imgSrc, title, paragraph, icon }) => {
  return (
    <>
      <Col>
        <div className='module-item'>
          <div className='block-icon'>
            {icon ? <i className={icon ? `${icon} icon` : ''} /> : <img src={imgSrc} alt='' />}
          </div>
          <div className='block-content'>
            <h3 className={icon ? 'text-icon-h3' : ''}>{title}</h3>
            <p className={icon ? 'text-icon-p' : ''}>{paragraph}</p>
            {icon && <a href='#'>See More</a>}
          </div>
        </div>
      </Col>
    </>
  );
};

export default InfoItem;
