import PropTypes from 'prop-types';
import Preview from './Preview';
import '../styles/DisplayArea.css';

function DisplayArea({ infoInputValue, experienceList, educationList }) {
  return (
    <div className='display-area'>
      <Preview
        {...infoInputValue}
        experienceList={experienceList}
        educationList={educationList}
      />
    </div>
  );
}

DisplayArea.propTypes = {
  infoInputValue: PropTypes.object,
  experienceList: PropTypes.array,
  educationList: PropTypes.array,
};

export default DisplayArea;
