import Banner from './Banner/Banner';
import HomeStories from './HomeStories/HomeStories';
import About from './About/About';
import Carousel from './Carousel/Carousel';
import MetaData from '../../Components/Helmet/MetaData';

import './Home.scss';
import { Helmet } from 'react-helmet-async';

function Home() {
  return (
    <>
      <MetaData
        title='ST United – United to grow up'
        description='Welcome to ST United, we collaborate to kick-start your software project'
      />
      <Banner />
      <HomeStories />
      <About />
      <Carousel />
    </>
  );
}

export default Home;
