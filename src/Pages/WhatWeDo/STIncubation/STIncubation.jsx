import React from 'react';

import { Col, Row } from 'react-bootstrap';
import BannerImage from '../../../components/BannerImage/BannerImage';
import InfoItem from '../../../components/InfoItem/InfoItem';
import './STIncubation.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';

const infoItemData = [
  {
    title: 'Incubator Program',
    paragraph:
      'Targeting early-stage startups in multiple sectors, our goal is to support founders with practical education and mentorship from idea validation, MVP development, and business validation stage.',
    img: 'https://stunited.vn/wp-content/uploads/2019/09/icuba-150x150.png',
  },
  {
    title: 'Coworking Space',
    paragraph:
      'Based on coworking platform with IoT Space, Nomad Space... provides not only space for working but also an opportunity for members to thrive by exploring collaboration, learning, and access to our strategic network.',
    img: 'https://stunited.vn/wp-content/uploads/2019/09/icons-400sq-record-keeping-office-space-150x150.png',
  },
  {
    title: 'Strategic Funding',
    paragraph:
      'ST United is considering an early stage VC fund that invests in technology startups in Vietnam, particularly Danang, at their early and growth stages. We provide funding, and assistance by establishing strategic partnerships to help startups scale their businesses',
    img: 'https://stunited.vn/wp-content/uploads/2019/09/Money-512-150x150.png',
  },
];

const data = [
  {
    img: 'https://stunited.vn/wp-content/uploads/2019/09/iot-e1567668899699.jpg',
  },
  {
    img: 'https://stunited.vn/wp-content/uploads/2019/09/nomadspace.jpg',
  },
  {
    img: 'https://stunited.vn/wp-content/uploads/2019/09/ciaoflora-1.jpg',
  },
  {
    img: 'https://stunited.vn/wp-content/uploads/2019/09/cafedat-1024x1024-1.jpg',
  },
];

function STIncubation(props) {
  return (
    <>
      <BannerImage
        backgroundUrl='https://stunited.vn/wp-content/uploads/2019/09/entrepreneurship-background-8-1.jpg'
        captions={[
          'ST INCUBATION',
          "We're not a mentor, expert or coach whatsoever. We are a founder and fight together",
        ]}
      />
      <div className='incubation-container'>
        <div className='container-wrapper container'>
          <div className='incuba-title'>
            <h1>ST INCUBATION</h1>
          </div>
          <section className='incuba-content'>
            <div className='wpb_wrapper top'>
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
                    <InfoItem imgSrc={item.img} title={item.title} paragraph={item.paragraph} />
                  ))}
                </Row>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className='wpb_wrapper bottom'>
        <div className='bottom-container'>
          <div className='wpb-bottom-title'>
            <h2>Our incubating projects</h2>
            <h3>We are supporting for these cool teams</h3>
          </div>
          <div className='wpb-row'>
            <div className='wpb-col'>
              {/* {data &&
                      data.map((item) => (
                        <div className='col-wrapper'>
                          <img src={item.img} alt='' />
                        </div>
                      ))} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default STIncubation;
