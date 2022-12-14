import React from 'react';
import './STDigital.scss';
import InfoItem from '../../../Components/InfoItem/InfoItem';
import BannerImage from '../../../Components/BannerImage/BannerImage';
import STDigitalApi from '../../../Api/DigitalAPI';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';
import MetaData from '../../../Components/Helmet/MetaData';

const STDigital = () => {
  const [digital, setDigital] = useState([]);

  useEffect(() => {
    const getDigital = async () => {
      const dataDigital = await STDigitalApi.getDigital();
      setDigital(dataDigital);
    };
    getDigital();
  }, []);

  return (
    <div>
      <MetaData title='ST Digital – ST United' />
      <BannerImage
        backgroundUrl='https://stunited.vn/wp-content/uploads/2019/09/sparkgrowth-124408265.jpg'
        captions={['ST DIGITAL', 'Offshore Digital Marketing Services']}
      />

      <div className='container p-0'>
        <div className='responsive'>
          <div className='container p-0'>
            <div className='title-digital'>
              <h2>STDigital </h2>
              <p className='content'>
                <strong className='sub-content'>ST Digital</strong> offers professional offshore
                digital marketing services that can make your business stand out from the digital
                crowd. Our digital marketing services range from search engine optimisation (SEO),
                social media services, email marketing services, content outsourcing, and graphic
                design services, which aids in creating organic engagement and direct traffic
                towards your website and its content. Through partnering with ST, we can help you
                create a good lasting impression online and give you an edge over your top
                competitors!
              </p>
            </div>
          </div>
          <div className='container'>
            <div className='about-digital'>
              <Row>
                <div className='row g-0'>
                  <div className='col-md-4 col-sm-12 '>
                    <InfoItem
                      imgSrc='https://stunited.vn/wp-content/uploads/2019/09/seo-150x150.png'
                      title='SEO'
                      paragraph='With ST Digital, your outsourced staff in the Vietnam will render Search Engine Optimisation services guaranteed to boost your visibility and accessibility online by helping you climb up to the top of Search Engine Results Pages (SERPs). Changing times call for changing your business strategies, and our goal is to help you grow as well as keep up with the times.'
                    />
                  </div>
                  <div className='col-md-4 col-sm-12'>
                    <InfoItem
                      imgSrc='https://stunited.vn/wp-content/uploads/2019/09/marketing-150x150.png'
                      title='Social Media Service'
                      paragraph='Our social media services is a commonly used method for directing traffic onto your website or specific content through increased visibility in different social media sites and engaging with your audience in the same platform. It is commonly synthesised to support SEO efforts and helps your brand to become easily accessible to your audience.'
                    />
                  </div>
                  <div className='col-md-4 col-sm-12'>
                    <InfoItem
                      imgSrc='https://stunited.vn/wp-content/uploads/2019/09/webdesign-icon-150x150.png'
                      title='Social Media Service'
                      paragraph='Sensible and engaging, our design studio is here to help you effectively communicate your brand online. We help you create a meaningful and lasting impression with your customers, leading to new opportunities for your business.'
                    />
                  </div>
                </div>
              </Row>
            </div>
          </div>
          <div className='container'>
            <div className='our-team'>
              <div className='row'>
                <div className='team'>Meet our team</div>
                {digital.map((team) => {
                  return (
                    <div className='col-12 col-md-3 text-center' key={team.id}>
                      <div className='item-img'>
                        <img className='img-fluid' src={team.avatar} />
                      </div>
                      <p className='name_item'>{team.name}</p>
                      <p className='position_item'>{team.jobTitle}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default STDigital;
