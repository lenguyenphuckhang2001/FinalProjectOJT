import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
function Footer(props) {
  return (
    <footer>
      <div className='footer-top'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 col-lg-4 col-sm-12 col-xs-12'>
              <div className='footer-widget widget-menu'>
                <div className='widget-top'>
                  <h3>MENU</h3>
                </div>
                <div className='widget-menu-body'>
                  <ul>
                    <li>
                      <Link to='/'>Home</Link>
                    </li>
                    <li>
                      <Link to='/st-software/'>What We Do</Link>
                      <ul className='sub-menu'>
                        <li>
                          <Link to='/st-software/'>ST SOFTWARE</Link>
                        </li>
                        <li>
                          <Link to='/st-digital/'>ST DIGITAL</Link>
                        </li>
                        <li>
                          <Link to='/st-incubation/'>ST INCUBATION</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to='/who-we-are/'>Who We Are</Link>
                    </li>
                    <li>
                      <Link to='/portfolio/'>Portfolio</Link>
                    </li>
                    <li>
                      <Link to='/join-us'>Join Us</Link>
                    </li>
                    <li>
                      <Link to='/lets-talk/'>Let's Talk</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-md-12 col-lg-4 col-sm-12 col-xs-12'>
              <div className='footer-widget widget-contact'>
                <div className='widget-top'>
                  <h3>CONTACT US</h3>
                </div>
                <div className='widget-bottom'>
                  <ul>
                    <li>Nomad Space</li>
                    <li>
                      <i className='fa-solid fa-location-arrow'></i>
                      14 An Thuong 18, Danang
                    </li>
                    <li>
                      <i className='fa-solid fa-phone'></i>
                      Call us +84 905 610 229
                    </li>
                    <li>
                      <i className='fa-regular fa-envelope'></i>
                      <a href='mailto:info@stdsoftware.com'>info@stdsoftware.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-md-12 col-lg-4 col-sm-12 col-xs-12'>
              <div className='footer-widget widget-facebook'>
                <div style={{ width: '100%' }}>
                  <iframe
                    name='f283d493ad3953c'
                    width='1000px'
                    height='1000px'
                    data-testid='fb:page Facebook Social Plugin'
                    title='fb:page Facebook Social Plugin'
                    frameBorder='0'
                    allowtransparency='true'
                    allowFullScreen={true}
                    scrolling='no'
                    allow='encrypted-media'
                    src='https://www.facebook.com/v2.5/plugins/page.php?adapt_container_width=true&amp;app_id=217780371604666&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df1b621d18374fe4%26domain%3Dstunited.vn%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fstunited.vn%252Ff2e368410068fc8%26relation%3Dparent.parent&amp;container_width=303&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fstunited.vn&amp;locale=en_US&amp;sdk=joey&amp;show_facepile=true&amp;show_posts=false&amp;small_header=false&amp;width='
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-3'>
              <div className='footer-col'>
                <p>Copyright © 2019 by ST United.</p>
              </div>
            </div>
            <div className='col-12-xs col-md-6'></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
