import { useRouteError } from 'react-router-dom';
import Header from '../LayOut/Header/Header';
import Footer from '../LayOut/Footer/Footer';
import { Link } from 'react-router-dom';
import './error-page.scss';
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id='error-page'>
      <Header />
      <div className='error-page-content'>
        <h1>Oh oh! Page not found.</h1>
        <p>
          We're sorry, but the page you are looking for doesn't exist. You can search your topic
          using the box below or return to the homepage.
        </p>
        <span>
          <Link to='/'>Back to Homepage</Link>
        </span>
      </div>
      <Footer />
    </div>
  );
}
