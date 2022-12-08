import Banner from './Banner/Banner';
import HomeStories from './HomeStories/HomeStories';
import About from './About/About';
import Carousel from './Carousel/Carousel';
import './Home.scss';

function Home() {
  return (
    <>
      <Banner />
      <HomeStories />
      <About />
      <Carousel />
    </>
  );
}

export default Home;
