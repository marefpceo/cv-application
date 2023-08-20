import PropTypes from 'prop-types';
import Preview from './Preview';
import '../styles/DisplayArea.css';

function DisplayArea({
  infoInputValue,
  experienceInputValue,
  educationList
}) {
  return (
    <div className="display-area">
      <Preview
        {...infoInputValue}
        {...experienceInputValue}
        educationList={educationList}
      />
    </div>
  );
}

DisplayArea.propTypes = {
  infoInputValue: PropTypes.object,
  experienceInputValue: PropTypes.object,
  educationList: PropTypes.array
};

export default DisplayArea;
