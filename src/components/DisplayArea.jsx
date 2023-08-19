import PropTypes from 'prop-types';
import Preview from './Preview';
import '../styles/DisplayArea.css';

function DisplayArea({
  infoInputValue,
  // educationInputValue,
  experienceInputValue,
  educationList
}) {
  return (
    <div className="display-area">
      <Preview
        {...infoInputValue}
        // {...educationInputValue}
        {...experienceInputValue}
        {...educationList}
      />
    </div>
  );
}

DisplayArea.propTypes = {
  infoInputValue: PropTypes.object,
  educationInputValue: PropTypes.object,
  experienceInputValue: PropTypes.object,
  educationList: PropTypes.array
};

export default DisplayArea;
