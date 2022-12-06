import './BannerImage.scss';

const BannerImage = ({ backgroundUrl, captions }) => {
  return (
    <div
      className='banner-imgage'
      style={{
        background: `url(${backgroundUrl})`,
      }}
    >
      <div className='banner-caption'>
        <h1>{captions[0]}</h1>
        <h2>{captions[1]}</h2>
      </div>
    </div>
  );
};

export default BannerImage;
