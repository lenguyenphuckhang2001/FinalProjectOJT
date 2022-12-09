import React from 'react';
import BannerImage from '../../Components/BannerImage/BannerImage';
import ButtonTeam from '../../Components/ButtonTeam/ButtonTeam';
import CompanyDescription from './CompanyDescription/CompanyDescription';
import CompanyTeam from './CompanyTeam/CompanyTeam';

function WhoWeAre(props) {
  return (
    <div>
      <BannerImage
        backgroundUrl='https://stunited.vn/wp-content/uploads/2019/08/1566375726229.jpeg'
        captions={[
          'United to grow up together',
          '"No one can do everything, but everyone can do something"',
        ]}
      />
      <CompanyDescription />
      <CompanyTeam />
      <ButtonTeam />
    </div>
  );
}

export default WhoWeAre;
