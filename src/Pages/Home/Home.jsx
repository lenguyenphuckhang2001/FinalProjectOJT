import Banner from './Banner/Banner';
import HomeStories from './HomeStories/HomeStories';
import About from './About/About';
import Carousel from './Carousel/Carousel';
import MetaData from '../../Components/Helmet/MetaData';

import './Home.scss';

function Home() {
  return (
    <>
      <MetaData title='ST United – United to grow up' />
      <Banner />
      <HomeStories />
      <About />
      <Carousel />
    </>
  );
}

export default Home;
