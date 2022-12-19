import './LetTalkValidate.scss';

const LetTalkValidate = ({ message }) => {
  console.log('🚀 ~ file: LetTalkValidate.jsx:4 ~ LetTalkValidate ~ message', message);

  return <p className='validate'>{message ? message : 'The field is required'}</p>;
};

export default LetTalkValidate;
