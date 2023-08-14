// import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/EducationCard.css';

function Education({ isActive, handleEducationChange, school, fieldOfStudy, graduationDate, city, state, country }) {
  // const [educationInputValue, setEducationInputValue] = useState({
  //   school: '',
  //   fieldOfStudy: '',
  //   graduationDate: '',
  //   city: '',
  //   state: '',
  //   country: '',
  // });

  return (
    <div id="education-card" style={{ display: isActive ? 'flex' : 'none' }}>
      <h2>Education</h2>
      <form className="education-form">
        <label htmlFor="school">School: </label>
        <input
          type="text"
          name="school"
          value={school}
          onChange={handleEducationChange}
        />

        <label htmlFor="fieldOfStudy">Field of Study: </label>
        <input
          type="text"
          name="fieldOfStudy"
          value={fieldOfStudy}
          onChange={handleEducationChange}
        />

        <label htmlFor="graduationDate">Graduation Date: </label>
        <input
          type="date"
          name="graduationDate"
          value={graduationDate}
          onChange={handleEducationChange}
        />

        <label htmlFor="city">City: </label>
        <input
          type="text"
          name="city"
          value={city}
          onChange={handleEducationChange}
        />

        <label htmlFor="state">State: </label>
        <input
          type="text"
          name="state"
          value={state}
          onChange={handleEducationChange}
        />

        <label htmlFor="country">Country: </label>
        <input
          type="text"
          name="country"
          value={country}
          onChange={handleEducationChange}
        />
      </form>

      <div className="education-buttons">
        <button type="button">Add</button>
        <button type="submit">Save</button>
      </div>
    </div>
  );
}

Education.propTypes = {
  isActive: PropTypes.bool,
  handleEducationChange: PropTypes.func,
  school: PropTypes.string,
  fieldOfStudy: PropTypes.string,
  graduationDate: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  country: PropTypes.string
};

export default Education;
