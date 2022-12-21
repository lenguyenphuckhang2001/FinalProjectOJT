import React, { useEffect, useState } from 'react';
import CourseApi from '../../Api/CourseAPI';
import BannerImage from '../../Components/BannerImage/BannerImage';
import CardJoin from '../../Components/CardJoin/CardJoin';
import MetaData from '../../Components/Helmet/MetaData';
import '../JoinUs/JoinUs.scss';

function JoinUs(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await CourseApi.getProject();
      setData(response);
    })();
  }, []);

  return (
    <>
      <MetaData
        title='Join us – ST United'
        description='Building a startup is hard, so we build a family to make it more enjoyable.'
      />
      <div className='join-us'>
        <BannerImage
          backgroundUrl='https://stunited.vn/wp-content/uploads/2019/09/join.jpg'
          captions={['JOIN ST TEAM NOW', '...to get the shit done']}
        />
        <div className='test'>
          <div className='sub-title'>
            <p>Building a startup is hard, so we build a family to make it more enjoyable.</p>
          </div>
          <div className='text'>
            <div className='row g-0'>
              {data.map((item) => (
                <CardJoin
                  key={item.id}
                  img={item.img}
                  description={item.description}
                  name={item.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JoinUs;
