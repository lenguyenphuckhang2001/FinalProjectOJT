import React, { useRef, useState } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import BannerImage from '../../Components/BannerImage/BannerImage';
import { IoIosArrowForward } from 'react-icons/io';
import './LetTalk.scss';
import { Link } from 'react-router-dom';
import LetTalkValidate from './LetTalkValidate/LetTalkValidate';

function LetTalk(props) {
  const name = useRef(null);
  const email = useRef(null);
  const phone = useRef(null);
  const subject = useRef(null);
  const message = useRef(null);

  const [validate, setValidate] = useState(false);

  const handleSummit = (e) => {
    e.preventDefault();
    setValidate(!validate);
    console.log(!!name.current.value.trimStart());
  };
  return (
    <>
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
                          {validate ? <LetTalkValidate /> : ''}
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                          <Form.Label className='form-label'>Your Email</Form.Label>
                          <Form.Control type='email' ref={email} />
                          {validate ? <LetTalkValidate /> : ''}
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formBasicPhone'>
                          <Form.Label className='form-label'>Your Phone</Form.Label>
                          <Form.Control type='phone' ref={phone} />
                          {validate ? <LetTalkValidate /> : ''}
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formBasicSubject'>
                          <Form.Label className='form-label'>Subject</Form.Label>
                          <Form.Control type='text' ref={subject} />
                          {validate ? <LetTalkValidate /> : ''}
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
                          {validate ? <LetTalkValidate /> : ''}
                        </Form.Group>
                        <Button className='button-summit' variant='primary' type='submit'>
                          Send
                        </Button>
                        {validate ? (
                          <div className='aler-vali'>
                            One or more fields have an error. Please check and try again.
                          </div>
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
