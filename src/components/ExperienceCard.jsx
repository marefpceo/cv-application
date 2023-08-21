import PropTypes from 'prop-types';
import '../styles/ExperienceCard.css';
import deleteIcon from '../assets/delete.png';
import editIcon from '../assets/pencil.png';

function Experience({
  isActive,
  handleExperienceChange,
  experienceList,
  experienceAddHandle,
  experienceInputValue,
  deleteEntry
}) {
  return (
    <div id="experience-card" style={{ display: isActive ? 'flex' : 'none' }}>
      <h2>Experience</h2>
      <form className="experience-form" id='experience-form'>
        <div className="company">
          <label htmlFor="company">Company: </label>
          <input
            type="text"
            name="company"
            value={experienceInputValue.company}
            onChange={handleExperienceChange}
          />
        </div>

        <div className="location">
          <label htmlFor="companyCity">City: </label>
          <input
            type="text"
            name="companyCity"
            value={experienceInputValue.companyCity}
            onChange={handleExperienceChange}
          />
          <label htmlFor="companyState">State: </label>
          <input
            type="text"
            name="companyState"
            value={experienceInputValue.companyState}
            onChange={handleExperienceChange}
          />
        </div>

        <div className="position">
          <label htmlFor="position">Position: </label>
          <input
            type="text"
            name="position"
            value={experienceInputValue.position}
            onChange={handleExperienceChange}
          />
        </div>

        <div className="dates">
          <label htmlFor="startDate">Start Date: </label>
          <input
            type="date"
            name="startDate"
            value={experienceInputValue.startDate}
            onChange={handleExperienceChange}
          />
          <label htmlFor="endDate">End Date: </label>
          <input
            type="date"
            name="endDate"
            value={experienceInputValue.endDate}
            onChange={handleExperienceChange}
          />
        </div>
      </form>

      <div className="experience-buttons">
        <button type="button" id='experience-add' onClick={experienceAddHandle}>Add</button>
        <button type="submit">Save</button>
      </div>

      <div className='experience-list'>
        {experienceList.map((item) => (
          <div className='list-item' key={item.id}>
            <div className='list-title'>
              <div>{item.company}</div>
              <div>{item.startDate}</div>
            </div>
            <div className='edit' id={item.id}>
              <img src={editIcon} alt='Edit entry' className='list-icons'/>
              <img src={deleteIcon} alt='Delete entry' className='list-icons' onClick={(e) => deleteEntry('exp',(e.target.parentNode.id))}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Experience.propTypes = {
  isActive: PropTypes.bool,
  handleExperienceChange: PropTypes.func,
  experienceAddHandle: PropTypes.func,
  deleteEntry: PropTypes.func,
  company: PropTypes.string,
  companyCity: PropTypes.string,
  companyState: PropTypes.string,
  position: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  experienceList: PropTypes.array,
  experienceInputValue: PropTypes.object
};

export default Experience;
