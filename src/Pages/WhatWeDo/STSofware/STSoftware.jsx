import React, { useEffect, useState } from 'react';

import { Col, Row } from 'react-bootstrap';
import BannerImage from '../../../Components/BannerImage/BannerImage';
import CardSwiper from '../../../Components/CardSwiper/CardSwiper';
import ProjectApi from './../../../Api/ProjectAPI';
import ModuleItem from '../../../Components/ModuleItem/ModuleItem';
import './STSoftware.scss';
import MetaData from '../../../Components/Helmet/MetaData';

const dataItem = [
  {
    id: '1',
    icon: 'fa-solid fa-flag',
    title: 'Web App Development',
    paragraph:
      'We create beautifully designed web apps precisely tailored to your situationWe deliver web systems of any size and complexity — from budding startup products to hi-end enterprise solutions.',
    link: 'See more',
  },
  {
    id: '2',
    icon: 'fa-solid fa-flag',
    title: 'Mobile App Development',
    paragraph:
      'ST provides custom mobile application development across different platforms such as iOS and Android for consumer-facing and enterprise environment.',
    link: 'See more',
  },
  {
    id: '3',
    icon: 'fa-solid fa-flag',
    title: 'Custom Software Development',
    paragraph:
      'ST provides high quality, cost-effective and reliable software development services match your specific needs, budget and timeframe. We love to competes with other firms on the grounds of quality, creativity, n’ dedication.',
    link: 'See more',
  },
  {
    id: '4',
    icon: 'fa-solid fa-users',
    title: 'Dedicated Team',
    paragraph:
      'Dedicated Team model of cooperation provides high-quality software development services for our clients. Our Dedicated Teams offer clients a simple, affordable answer to build-up of any software development project. Team sizes are adjusted to accommodate changing requirements and other needs.',
    link: 'See more',
  },
  {
    id: '5',
    icon: 'fa-solid fa-flag',
    title: 'Technology Consulting',
    paragraph:
      'Whether you are optimizing costs, rolling out new IT initiatives, or identifying new growth opportunities, ST offers technology and software consulting services to help you respond to change and transform your business.',
    link: 'See more',
  },
  {
    id: '6',
    icon: 'fa-solid fa-flag',
    title: 'AI/Machine Learning',
    paragraph:
      'Using the power of machine learning tools and technologies, our AI experts and development team offer comprehensive and cutting-edge solutions to your current or potential business needs.',
    link: 'Read more',
  },
];

function STSoftware() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await ProjectApi.getProject();
      const filterData = response.filter((item) => Number(item.id) < 5);
      setData(filterData);
    })();
  }, []);

  return (
    <div>
      <MetaData
        title='ST SOFTWARE – ST United'
        description='We offer a wealth of services to address your technology needs'
      />
      <BannerImage
        backgroundUrl='https://stunited.vn/wp-content/uploads/2019/09/team-.jpg'
        captions={[
          'ST SOFTWARE',
          'WE OFFER A WEALTH OF SERVICES TO ADDRESS YOUR TECHNOLOGY NEEDS.',
        ]}
      />
      <div className='stsoftware-con'>
        <div className='content-block'>
          <div className='container'>
            <div className='row'>
              {dataItem.map((dataItem) => (
                <ModuleItem
                  key={dataItem.id}
                  title={dataItem.title}
                  paragraph={dataItem.paragraph}
                  icon={dataItem.icon}
                  link={dataItem.link}
                />
              ))}
            </div>
          </div>
        </div>
        <section>
          <div className='container'>
            <div className='container-content'>
              <div className='content-stories'>
                <h2>Typical successful stories</h2>
                <h3>
                  Meeting deadlines and ensuring high standards are our style of life. 82% of our
                  customers have chosen our team for their 2nd project.
                </h3>
              </div>
              <div className='row g-0'>
                {data.map(({ name, tech, img, description, id }) => (
                  <>
                    <CardSwiper
                      name={name}
                      img={img}
                      description={description}
                      tech={tech}
                      key={id}
                    />
                  </>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className='empty-space'></div>
    </div>
  );
}

export default STSoftware;
