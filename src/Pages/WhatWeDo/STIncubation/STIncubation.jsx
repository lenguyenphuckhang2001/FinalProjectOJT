import React, { useEffect, useState } from 'react';

import { Col, Row } from 'react-bootstrap';
import IncubationApi from '../../../Api/IncubationAPI';
import BannerImage from '../../../Components/BannerImage/BannerImage';
import CardSwiper from '../../../Components/CardSwiper/CardSwiper';
import MetaData from '../../../Components/Helmet/MetaData';
import InfoItem from '../../../Components/InfoItem/InfoItem';
import './STIncubation.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';

const infoItemData = [
  {
    id: '1',
    title: 'Incubator Program',
    paragraph:
      'Targeting early-stage startups in multiple sectors, our goal is to support founders with practical education and mentorship from idea validation, MVP development, and business validation stage.',
    img: 'https://stunited.vn/wp-content/uploads/2019/09/icuba-150x150.png',
  },
  {
    id: '2',
    title: 'Coworking Space',
    paragraph:
      'Based on coworking platform with IoT Space, Nomad Space... provides not only space for working but also an opportunity for members to thrive by exploring collaboration, learning, and access to our strategic network.',
    img: 'https://stunited.vn/wp-content/uploads/2019/09/icons-400sq-record-keeping-office-space-150x150.png',
  },
  {
    id: '3',
    title: 'Strategic Funding',
    paragraph:
      'ST United is considering an early stage VC fund that invests in technology startups in Vietnam, particularly Danang, at their early and growth stages. We provide funding, and assistance by establishing strategic partnerships to help startups scale their businesses',
    img: 'https://stunited.vn/wp-content/uploads/2019/09/Money-512-150x150.png',
  },
];

function STIncubation(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await IncubationApi.getIncubation();
      setData(response);
    })();
  }, []);

  return (
    <>
      <MetaData
        title='ST INCUBATION – ST United'
        description="We're not a mentor, expert or coach whatsoever. We are a founder and fight together"
      />
      <BannerImage
        backgroundUrl='https://stunited.vn/wp-content/uploads/2019/09/entrepreneurship-background-8-1.jpg'
        captions={[
          'ST INCUBATION',
          "We're not a mentor, expert or coach whatsoever. We are a founder and fight together",
        ]}
      />
      <div className='incubation-container'>
        <div className='container-wrapper container py-sm-0 px-sm-3 p-md-0'>
          <div className='incuba-title'>
            <h1>ST INCUBATION</h1>
          </div>
          <section className='incuba-content'>
            <div className='wpb_wrapper_text top'>
              <article>
                <p>
                  After long time working in software development outsourcing industry, founders of{' '}
                  <strong>ST United</strong> still keep intense aspiration how to apply the high
                  technologies to solve the society problem in Vietnam.
                </p>
                <p>
                  Beginning as a provider of co-working spaces with <strong>IoT Space</strong> and
                  Nomad Space in Danang, <strong>ST United</strong> would like to support the
                  startup and ICT community. Moreover, <strong>ST United</strong> provides incubator
                  programs for budding entrepreneurs. The program focuses on providing resources and
                  support for startups in terms of business modeling, market penetration and even
                  product development.
                </p>
              </article>
              <div className='service-blocks'>
                <Row xs={1} md={3} lg={3}>
                  {infoItemData.map((item) => (
                    <InfoItem
                      key={item.id}
                      imgSrc={item.img}
                      title={item.title}
                      paragraph={item.paragraph}
                    />
                  ))}
                </Row>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className='wpb_wrapper_bottom'>
        <div className='bottom container py-sm-5 p-md-0'>
          <div className='wpb-bottom-title'>
            <h2>Our incubating projects</h2>
            <h3>We are supporting for these cool teams</h3>
          </div>
          <div className='row g-0 p-0'>
            {data.map(({ name, tag, description, id, img }) => (
              <CardSwiper key={id} name={name} img={img} tech={tag} description={description} />
            ))}
          </div>
        </div>
      </div>
      <div className='pad'></div>
    </>
  );
}

export default STIncubation;
