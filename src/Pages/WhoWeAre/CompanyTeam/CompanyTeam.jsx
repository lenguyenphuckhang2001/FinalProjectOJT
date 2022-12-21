import React from 'react';
import { useEffect, useState } from 'react';
import teamApi from '../../../Api/TeamAPI';
import CardTeam from '../../../Components/CardTeam/CardTeam';
import './CompanyTeam.scss';
import Button from '../../../Components/Button/Button';

const CompanyTeam = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const getTeam = async () => {
      const teams = await teamApi.getTeam();
      setTeam(teams);
    };
    getTeam();
  }, []);

  return (
    <div className='listTeam'>
      <div className='t-title'>
        <h1>Meet Our Team</h1>
      </div>
      <div className='table-member'>
        <div className='container'>
          <div className='row g-0'>
            {team.map(({ avatar, name, jobTitle, id }) => (
              <CardTeam img={avatar} name={name} description={jobTitle} key={id} />
            ))}
          </div>
        </div>
      </div>
      <div className='T-body'>
        <div className='row md-12'></div>
      </div>
      <Button link={'http://dev.stunited.vn/careers/'} description={'Wanna join us?'} />
    </div>
  );
};

export default CompanyTeam;
