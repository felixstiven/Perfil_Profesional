import propTypes from 'prop-types';

const SingleInfo = ({ text, Image }) => {
  return (
    <div className="flex gap-4 items-center justify-start">
      <Image className="text-3xl" />
      <p>{text}</p>
    </div>
  );
};

SingleInfo.propTypes = {
  text: propTypes.string.isRequired,
  Image: propTypes.elementType.isRequired,
};

export default SingleInfo;
