import React, { useEffect, useState } from 'react';
import BannerImage from '../../Components/BannerImage/BannerImage';
import './Portfolio.scss';
import CardSwiper from '../../Components/CardSwiper/CardSwiper';
import '../../Components/CardSwiper/CardSwiper.scss';
import ProjectApi from '../../Api/ProjectAPI';
import Button from '../../Components/Button/Button';

function Portfolio(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await ProjectApi.getProject();
      const filterArr = [...result.slice(4, 7), ...result.slice(3, 4)];
      const filterArr2 = [...result.slice(0, 3), ...result.slice(7, 8)];
      const filterArr3 = result.slice(8);
      const finalArr = [...filterArr, ...filterArr2, ...filterArr3];
      setData(finalArr);
    })();
  }, []);
  return (
    <div>
      <div className='portfolio-container'>
        <BannerImage
          backgroundUrl='https://stunited.vn/wp-content/uploads/2019/09/web.png'
          captions={[
            'PORTFOLIO',
            'From ideas turned into carefully crafted pixels and problems crafted into solutions.',
          ]}
        />

        <div className='container'>
          <div>
            <div className='title'>
              <div className='title-content'>
                <h2 className='typical'>Typical successful stories</h2>
              </div>
              <div className='content-portfolio'>
                <p className='main-content'>
                  Meeting deadlines and ensuring high standards are our style of life. 82% of our
                  customers have chosen our team for their 2nd project.
                </p>
              </div>
            </div>
          </div>
          <div className='portfolio-item'>
            <div className='card-swp p-0'>
              <div className='row g-0 p-0'>
                {data.map((item) => (
                  <CardSwiper
                    name={item.name}
                    description={item.description}
                    tech={item.tech}
                    img={item.img}
                    key={item.id}
                  />
                ))}
              </div>
            </div>
          </div>

          <Button />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
