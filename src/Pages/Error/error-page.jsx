import { useRouteError } from 'react-router-dom';
import Footer from '../LayOut/Footer/Footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './error-page.scss';
import HeaderError from './../../Components/HeaderError/HeaderError';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id='error-page'>
      <Helmet>
        <title>Pages not Found - ST United</title>
      </Helmet>
      <section>
        <div className='header-section'>
          <HeaderError />
        </div>
      </section>
      <section>
        <div className='error-page-content'>
          <h1>Oh oh! Page not found.</h1>
          <p>
            We're sorry, but the page you are looking for doesn't exist.<br></br> You can search
            your topic using the box below or return to the homepage.
          </p>
          <span>
            <Link to='/'>Back to Homepage</Link>
          </span>
        </div>
      </section>
      <Footer />
    </div>
  );
}
