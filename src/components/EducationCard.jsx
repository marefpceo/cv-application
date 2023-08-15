import PropTypes from 'prop-types';
import '../styles/EducationCard.css';

function Education({
  isActive,
  handleEducationChange,
  school,
  fieldOfStudy,
  graduationDate,
  schoolCity,
  schoolState,
  schoolCountry,
}) {
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

        <label htmlFor="schoolCity">City: </label>
        <input
          type="text"
          name="schoolCity"
          value={schoolCity}
          onChange={handleEducationChange}
        />

        <label htmlFor="schoolState">State: </label>
        <input
          type="text"
          name="schoolState"
          value={schoolState}
          onChange={handleEducationChange}
        />

        <label htmlFor="schoolCountry">Country: </label>
        <input
          type="text"
          name="schoolCountry"
          value={schoolCountry}
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
  schoolCity: PropTypes.string,
  schoolState: PropTypes.string,
  schoolCountry: PropTypes.string,
};

export default Education;
