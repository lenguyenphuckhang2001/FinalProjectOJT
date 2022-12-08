import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Carousel.scss';
import PartnerApi from '../../../Api/PartnerAPI';
const Carousel = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [state, setState] = useState([]);
  useEffect(() => {
    PartnerApi.getPartner()
      .then((result) => {
        setState(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onButtonNextCLick = () => {
    navigationNextRef.current.click();
  };
  const onButtonPrevCLick = () => {
    navigationPrevRef.current.click();
  };
  return (
    <>
      <section className='partner'>
        <div className='container'>
          <div className='partner-inner'>
            <div className='partner-top'>
              <h2>Trusted by the Clients & Partners</h2>
              <div className='partner-top-button'>
                <button ref={navigationPrevRef} onClick={onButtonPrevCLick}>
                  Prev
                </button>
                <button ref={navigationNextRef} onClick={onButtonNextCLick}>
                  Next
                </button>
              </div>
            </div>
            <div className='partner-bottom'>
              <Swiper
                speed={2500}
                grabCursor={true}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 3500,
                  stopOnLastSlide: true,
                }}
                navigation={{
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current,
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                modules={[Pagination, Navigation, Autoplay]}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                  },
                  480: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                  },
                  720: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                  },
                  1024: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                  },
                  1400: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                  },
                }}
                className='mySwiper col-sm-12'
              >
                {state.map((item) => {
                  let { logo, link } = item;
                  return (
                    <SwiperSlide>
                      <div className='partner-item'>
                        <a href={link}>
                          {' '}
                          <img src={logo} />
                        </a>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Carousel;
