import PropTypes from 'prop-types';
import '../styles/ExperienceCard.css';

function Experience({ isActive, handleExperienceChange, company, companyCity, companyState, position,
  startDate, endDate  }) {

  return (
    <div id="experience-card" style={{display: isActive ? 'flex' : 'none'}}>
      <h2>Experience</h2>
      <form className="experience-form">
            <div className="company">
              <label htmlFor="company">Company: </label>
              <input
                type="text"
                name="company"
                value={company}
                onChange={handleExperienceChange}
              />
            </div>
          
          <div className="location">
            <label htmlFor="companyCity">City: </label>
            <input
              type="text"
              name="companyCity"
              value={companyCity}
              onChange={handleExperienceChange}
            />
            <label htmlFor="companyState">State: </label>
            <input
              type="text"
              name="companyState"
              value={companyState}
              onChange={handleExperienceChange}
            />
          </div>


          <div className="position">
            <label htmlFor="position">Position: </label>
            <input
              type="text"
              name="position"
              value={position}
              onChange={handleExperienceChange}
            />
          </div>


          <div className="dates">
            <label htmlFor="startDate">Start Date: </label>
            <input
              type="date"
              name="startDate"
              value={startDate}
              onChange={handleExperienceChange}
            />
            <label htmlFor="endDate">End Date: </label>
            <input
              type="date"
              name="endDate"
              value={endDate}
              onChange={handleExperienceChange}
            />
          </div>

      </form>

      <div className="experience-buttons">
        <button type="button">Add</button>
        <button type="submit">Save</button>
      </div>
    </div>
  )
}

Experience.propTypes = {
  isActive: PropTypes.bool,
  handleExperienceChange: PropTypes.func,
  company: PropTypes.string,
  companyCity: PropTypes.string,
  companyState: PropTypes.string,
  position: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string
}

export default Experience;