import React, { useRef, useState } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import BannerImage from '../../Components/BannerImage/BannerImage';
import { IoIosArrowForward } from 'react-icons/io';
import './LetTalk.scss';
import { Link } from 'react-router-dom';
import LetTalkValidate from './LetTalkValidate/LetTalkValidate';
import MetaData from '../../Components/Helmet/MetaData';
import Loading from './Loading/Loading';
import { trimVal } from './util/trimValue';
import axios from 'axios';
import AlerValidate from './AlerValidate/AlerValidate';

function LetTalk() {
  const name = useRef(null);
  const email = useRef(null);
  const phone = useRef(null);
  const subject = useRef(null);
  const message = useRef(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [result, setResult] = useState([]);

  const handleSummit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const data = trimVal(name, email, phone, subject, message);
      if (!data.includes('')) {
        (async () => {
          await axios.post('https://contact-devplus.herokuapp.com/api/v1/contact', {
            name: name.current.value,
            email: email.current.value,
            phone: phone.current.value,
            subject: subject.current.value,
            message: message.current.value,
          });
        })();
      }
      setResult(data);
      setSuccess(true);
    }, 2000);
  };

  return (
    <>
      <MetaData title='Let’s talk – ST United' />
      <BannerImage
        backgroundUrl='https://stunited.vn/wp-content/uploads/2019/09/contact-us-background.png'
        captions={["Let's talk", 'Stay in touch with us']}
      />
      <div className='let-talk-container'>
        <div className='container p-md-0'>
          <div className='title-wrapper'>
            <ol className='list-item'>
              <li>
                <Link className='link-talk' to='/'>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <IoIosArrowForward className='icon-pad' />
              </li>
              <li className='li-text'>Let's Talk</li>
            </ol>
            <div className='title-wraper'>
              <h1>Let’s talk</h1>
            </div>
          </div>
          <div className='page-main'>
            <div className='white-block'>
              <div className='wraper-content'>
                <Row sm={1} md={2}>
                  <Col md={8}>
                    <div className='top-content'>
                      <p>
                        <strong>ST United</strong> is always glad to hear your comments regarding
                        our services. Whether you have any questions, or wish to get a quote for
                        your project, or require further information about what we can offer you,
                        please do not hesitate to contact us
                      </p>
                    </div>
                    <div className='form-content'>
                      <Form onSubmit={handleSummit}>
                        <Form.Group className='mb-3' controlId='formBasicName'>
                          <Form.Label className='form-label'>Your Name</Form.Label>
                          <Form.Control type='text' ref={name} />
                          {result.length > 0 && (result[0] ? '' : <LetTalkValidate />)}
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                          <Form.Label className='form-label'>Your Email</Form.Label>
                          <Form.Control type='email' ref={email} />
                          {result.length > 0 && (result[1] ? '' : <LetTalkValidate />)}
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formBasicPhone'>
                          <Form.Label className='form-label'>Your Phone</Form.Label>
                          <Form.Control type='number' ref={phone} />
                          {result.length > 0 && (result[2] ? '' : <LetTalkValidate />)}
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formBasicSubject'>
                          <Form.Label className='form-label'>Subject</Form.Label>
                          <Form.Control type='text' ref={subject} />
                          {result.length > 0 && (result[3] ? '' : <LetTalkValidate />)}
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formBasicTextArea'>
                          <Form.Label className='form-label'>Your Message</Form.Label>
                          <Form.Control
                            as='textarea'
                            placeholder='Leave a message here'
                            style={{ height: '100px' }}
                            className='form-textarea'
                            ref={message}
                          />
                          {result.length > 0 && (result[4] ? '' : <LetTalkValidate />)}
                        </Form.Group>
                        <Button className='button-summit' variant='primary' type='submit'>
                          Send
                        </Button>
                        {loading && <Loading />}
                        {result.includes('') ? (
                          <AlerValidate
                            content='One or more fields have an error. Please check and try again.'
                            validate={false}
                          />
                        ) : success ? (
                          <AlerValidate content='Success' validate={true} />
                        ) : (
                          ''
                        )}
                      </Form>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className='info'>
                      <h4>Office</h4>
                      <p>Address: Nomad Space, No.14 An Thuong 18, Danang, Vietnam</p>
                      <p>Hotline: (+84) 777 463 183</p>
                      <p>Email: hello(at)stunited.vn</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LetTalk;
