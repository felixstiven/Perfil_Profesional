import propTypes from 'prop-types';
  
const ExperienceInfo = ({ number, text }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-bold text-6xl text-cyan mb-1">{number}</p>
      <p className="font-bold text-xl text-lightGrey uppercase ">{text}</p>
    </div>
  );
};

ExperienceInfo.propTypes = {
  number: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
};

export default ExperienceInfo;
