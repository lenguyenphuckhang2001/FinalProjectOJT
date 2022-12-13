import React from 'react';
import BannerImage from '../../Components/BannerImage/BannerImage';
import MetaData from '../../Components/Helmet/MetaData';

import CompanyDescription from './CompanyDescription/CompanyDescription';
import CompanyTeam from './CompanyTeam/CompanyTeam';

function WhoWeAre(props) {
  return (
    <div>
      <MetaData title='WHO WE ARE – ST United' />
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
