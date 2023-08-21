import PropTypes from 'prop-types';
import '../styles/EducationCard.css';
import deleteIcon from '../assets/delete.png';
import editIcon from '../assets/pencil.png';

function Education({
  isActive,
  handleEducationChange,
  educationAddHandle,
  // school,
  // fieldOfStudy,
  // graduationDate,
  // schoolCity,
  // schoolState,
  // schoolCountry,
  educationList,
  deleteEntry,
  educationInputValue
}) {
  return (
    <div id="education-card" style={{ display: isActive ? 'flex' : 'none' }}>
      <h2>Education</h2>
      <form id='education-form' className="education-form">
        <label htmlFor="school">School: </label>
        <input
          type="text"
          name="school"
          value={educationInputValue.school}
          onChange={handleEducationChange}
        />

        <label htmlFor="fieldOfStudy">Field of Study: </label>
        <input
          type="text"
          name="fieldOfStudy"
          value={educationInputValue.fieldOfStudy}
          onChange={handleEducationChange}
        />

        <label htmlFor="graduationDate">Graduation Date: </label>
        <input
          type="date"
          name="graduationDate"
          value={educationInputValue.graduationDate}
          onChange={handleEducationChange}
        />

        <label htmlFor="schoolCity">City: </label>
        <input
          type="text"
          name="schoolCity"
          value={educationInputValue.schoolCity}
          onChange={handleEducationChange}
        />

        <label htmlFor="schoolState">State: </label>
        <input
          type="text"
          name="schoolState"
          value={educationInputValue.schoolState}
          onChange={handleEducationChange}
        />

        <label htmlFor="schoolCountry">Country: </label>
        <input
          type="text"
          name="schoolCountry"
          value={educationInputValue.schoolCountry}
          onChange={handleEducationChange}
        />
      </form>

      <div className="education-buttons">
        <button type="button" id='education-add' onClick={educationAddHandle}>Add</button>
        <button type="submit">Save</button>
      </div>

      <div className='school-list'>
        {educationList.map((item) => (
          <div className='list-item' key={item.id}>
            <div className='list-title'>
              <div>{item.school}</div>
              <div>{item.graduationDate}</div>
            </div>
            <div className='edit' id={item.id}>
              <img src={editIcon} alt='Edit entry' className='list-icons'/>
              <img src={deleteIcon} alt='Delete entry' className='list-icons' onClick={(e) => deleteEntry('edu',(e.target.parentNode.id))}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Education.propTypes = {
  isActive: PropTypes.bool,
  handleEducationChange: PropTypes.func,
  educationAddHandle: PropTypes.func,
  deleteEntry: PropTypes.func,
  school: PropTypes.string,
  fieldOfStudy: PropTypes.string,
  graduationDate: PropTypes.string,
  schoolCity: PropTypes.string,
  schoolState: PropTypes.string,
  schoolCountry: PropTypes.string,
  educationList: PropTypes.array,
  educationInputValue: PropTypes.object
};

export default Education;
