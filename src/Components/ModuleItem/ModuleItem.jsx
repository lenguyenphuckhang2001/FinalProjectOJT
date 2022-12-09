import React from 'react';
import { Col } from 'react-bootstrap';
import './ModuleItem.scss';

const ModuleItem = ({ title, paragraph, icon, link }) => {
  return (
    <>
      <div className='col-12 col-md-6 col-lg-4'>
        <div className='module-item-2'>
          <div className='block-icon-2'>
            <i className={icon} />
          </div>
          <div className='block-content-2'>
            <h3>{title}</h3>
            <p>{paragraph}</p>
            <a href='#'>{link}</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModuleItem;
