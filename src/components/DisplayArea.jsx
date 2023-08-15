import PropTypes from 'prop-types';
import Preview from './Preview';
import '../styles/DisplayArea.css';

function DisplayArea({ infoInputValue, educationInputValue, experienceInputValue} ){
  return (
    <div className="display-area">
      <Preview 
        {...infoInputValue} 
        {...educationInputValue}
        {...experienceInputValue} 
      />
    </div>
  );
}

DisplayArea.propTypes = {
  infoInputValue: PropTypes.object,
  educationInputValue: PropTypes.object,
  experienceInputValue: PropTypes.object
}

export default DisplayArea;
