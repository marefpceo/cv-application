import { useState } from 'react';
import PropTypes from 'prop-types';
import InfoCard from './InfoCard.jsx';
import Education from './EducationCard.jsx';
import Experience from './ExperienceCard.jsx';
import infoIconLight from '../assets/info-icon-light.png';
import schoolIconLight from '../assets/school-icon-light.png';
import workIconLight from '../assets/work-history-icon-light.png';
import '../styles/InputSection.css';

function InputSection({
  handleInfoChange,
  handleEducationChange,
  handleExperienceChange,
  educationAddHandle,
  clearButtonHandle,
  educationList,
  experienceAddHandle,
  experienceList,
  deleteEntry,
  educationInputValue,
  experienceInputValue
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section className="input-section">
      <nav id="input-nav">
        <InputNavButtons
          icon={infoIconLight}
          alt={'General information tab'}
          isActive={activeIndex === 0}
          onShow={() => setActiveIndex(0)}
        />
        <InputNavButtons
          icon={schoolIconLight}
          alt={'School history tab'}
          isActive={activeIndex === 1}
          onShow={() => setActiveIndex(1)}
        />
        <InputNavButtons
          icon={workIconLight}
          alt={'Work experience tab'}
          isActive={activeIndex === 2}
          onShow={() => setActiveIndex(2)}
        />
      </nav>

      <div className="cards">
        <InfoCard
          isActive={activeIndex === 0}
          handleInfoChange={handleInfoChange}
          clearButtonHandle={clearButtonHandle}
        />
        <Education
          isActive={activeIndex === 1}
          handleEducationChange={handleEducationChange}
          educationAddHandle={educationAddHandle}
          educationList={educationList}
          deleteEntry={deleteEntry}
          educationInputValue={educationInputValue}
        />
        <Experience
          isActive={activeIndex === 2}
          handleExperienceChange={handleExperienceChange}
          experienceAddHandle={experienceAddHandle}
          experienceList={experienceList}
          deleteEntry={deleteEntry}
          experienceInputValue={experienceInputValue}
        />
      </div>
    </section>
  );
}

function InputNavButtons({ icon, alt, isActive, onShow }) {
  return (
    <img
      src={icon}
      alt={alt}
      onClick={onShow}
      className={`input-icons ${isActive ? 'current' : ''}`}
    />
  );
}

InputNavButtons.propTypes = {
  icon: PropTypes.string,
  alt: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onShow: PropTypes.func,
};

InputSection.propTypes = {
  handleInfoChange: PropTypes.func,
  handleEducationChange: PropTypes.func,
  handleExperienceChange: PropTypes.func,
  deleteEntry: PropTypes.func,
  educationAddHandle: PropTypes.func,
  experienceAddHandle: PropTypes.func,
  clearButtonHandle: PropTypes.func,
  educationList: PropTypes.array,
  experienceList: PropTypes.array,
  educationInputValue: PropTypes.object,
  experienceInputValue: PropTypes.object
};

export default InputSection;
