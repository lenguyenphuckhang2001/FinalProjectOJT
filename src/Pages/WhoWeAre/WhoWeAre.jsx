import React from 'react';
import BannerImage from '../../Components/BannerImage/BannerImage';
import MetaData from '../../Components/Helmet/MetaData';

import CompanyDescription from './CompanyDescription/CompanyDescription';
import CompanyTeam from './CompanyTeam/CompanyTeam';

function WhoWeAre(props) {
  return (
    <div>
      <MetaData
        title='WHO WE ARE – ST United'
        description='Established on the early of 2016 and known as STD Software serves diverse global clients (Japanese, Australian, US) by offering mainstream services: IT outsourcing, software & website development, mobile applications.'
      />
      <BannerImage
        backgroundUrl='https://stunited.vn/wp-content/uploads/2019/08/1566375726229.jpeg'
        captions={[
          'United to grow up together',
          '"No one can do everything, but everyone can do something"',
        ]}
      />
      <CompanyDescription />
      <CompanyTeam />
    </div>
  );
}

export default WhoWeAre;
