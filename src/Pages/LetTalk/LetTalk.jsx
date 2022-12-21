import React, { useRef, useState } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import BannerImage from '../../Components/BannerImage/BannerImage';
import { IoIosArrowForward } from 'react-icons/io';
import './LetTalk.scss';
import { Link } from 'react-router-dom';
import LetTalkValidate from './LetTalkValidate/LetTalkValidate';
import MetaData from '../../Components/Helmet/MetaData';
import Loading from './Loading/Loading';
import { trimVal } from '../../util/ultilities';
import AlerValidate from './AlerValidate/AlerValidate';
import SendMailAPI from '../../Api/SendMailAPI';

function LetTalk() {
  const name = useRef(null);
  const email = useRef(null);
  const phone = useRef(null);
  const subject = useRef(null);
  const message = useRef(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [result, setResult] = useState([]);
  const [emailAndPhoneValidate, setEmailAndPhoneValidate] = useState([]);

  const handleSummit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await SendMailAPI.sendMail(
        name.current.value,
        email.current.value,
        phone.current.value,
        subject.current.value,
        message.current.value,
      );
      if (response.success) {
        setLoading(false);
        const data = trimVal(name, email, phone, subject, message);
        setResult(data);
        setSuccess(true);
        setEmailAndPhoneValidate([]);
      }
    } catch (error) {
      if (!error.success) {
        setLoading(false);
        const data = trimVal(name, email, phone, subject, message);
        setResult(data);
        setSuccess(false);
        setEmailAndPhoneValidate(error.emailAndPhoneValidate);
      }
    }
  };

  return (
    <>
      <MetaData
        title='Let’s talk – ST United'
        description='ST United is always glad to hear your comments regarding our services. Please say your think about us'
      />
      <BannerImage
        backgroundUrl='https://stunited.vn/wp-content/uploads/2019/09/contact-us-background.png'
        captions={["Let's talk", 'Stay in touch with us']}
      />
      <div className='let-talk-container'>
        <div className='container p-md-0'>
          <div className='let-talk-wrapper'>
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
                            <Form.Control type='text' ref={name} placeholder='Ex: Nguyen Van A' />
                            {result.length > 0 && (result[0] ? '' : <LetTalkValidate />)}
                          </Form.Group>
                          <Form.Group className='mb-3' controlId='formBasicEmail'>
                            <Form.Label className='form-label'>Your Email</Form.Label>
                            <Form.Control
                              type='email'
                              ref={email}
                              placeholder='Ex: NguyenVanA@gmail.com'
                            />
                            {result.length > 0 && (result[1] ? '' : <LetTalkValidate />)}
                            {emailAndPhoneValidate.includes('email') ? (
                              <LetTalkValidate message='Please enter a valid email' />
                            ) : (
                              ''
                            )}
                          </Form.Group>
                          <Form.Group className='mb-3' controlId='formBasicPhone'>
                            <Form.Label className='form-label'>Your Phone</Form.Label>
                            <Form.Control type='text' ref={phone} placeholder='Ex: 0511853213' />
                            {result.length > 0 && (result[2] ? '' : <LetTalkValidate />)}
                            {emailAndPhoneValidate.includes('phone') ? (
                              <LetTalkValidate message='Please enter number' />
                            ) : (
                              ''
                            )}
                          </Form.Group>
                          <Form.Group className='mb-3' controlId='formBasicSubject'>
                            <Form.Label className='form-label'>Subject</Form.Label>
                            <Form.Control
                              type='text'
                              ref={subject}
                              placeholder='Leave a subject here'
                            />
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
                          {result.includes('') || emailAndPhoneValidate.length > 0 ? (
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
      </div>
    </>
  );
}

export default LetTalk;
