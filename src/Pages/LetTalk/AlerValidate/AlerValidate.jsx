import './AlerValidate.scss';

const AlerValidate = ({ content, validate }) => {
  return (
    <>
      <div className={validate ? 'aler-vali-succes' : 'aler-vali-failed'}>{content}</div>
    </>
  );
};

export default AlerValidate;
