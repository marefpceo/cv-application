import { useState } from 'react';
import PropType from 'prop-types';
import '../styles/ExperienceCard.css';

function Experience({ isActive }) {
  const [experienceInputValue, setExperienceInputValue] = useState({
    company: '',
    city: '',
    state: '',
    position: '',
    startDate: '',
    endDate: '',
  });

  return (
    <div id='experience-card' style={{display: isActive ? 'flex' : 'none'}}>
      <h2>Experience</h2>
      <form className='experience-form'>
            <div className='company'>
              <label htmlFor='company'>Company: </label>
              <input
                type='text'
                name='company'
                value={experienceInputValue.company}
                onChange={(e) => setExperienceInputValue({ ...experienceInputValue, company: e.target.value})}
              />
            </div>
          

          <div className='location'>
            <label htmlFor='city'>City: </label>
            <input
              type='text'
              name='city'
              value={experienceInputValue.city}
              onChange={(e) => setExperienceInputValue({ ...experienceInputValue, city: e.target.value})}
            />
            <label htmlFor='state'>State: </label>
            <input
              type='text'
              name='state'
              value={experienceInputValue.state}
              onChange={(e) => setExperienceInputValue({ ...experienceInputValue, state: e.target.value})}
            />
          </div>


          <div className='position'>
            <label htmlFor='position'>Position: </label>
            <input
              type='text'
              name='position'
              value={experienceInputValue.position}
              onChange={(e) => setExperienceInputValue({ ...experienceInputValue, position: e.target.value})}
            />
          </div>


          <div className='dates'>
            <label htmlFor='startDate'>Start Date: </label>
            <input
              type='date'
              name='startDate'
              value={experienceInputValue.startDate}
              onChange={(e) => setExperienceInputValue({ ...experienceInputValue, startDate: e.target.value})}
            />
            <label htmlFor='endDate'>End Date: </label>
            <input
              type='date'
              name='endDate'
              value={experienceInputValue.endDate}
              onChange={(e) => setExperienceInputValue({ ...experienceInputValue, endDate: e.target.value})}
            />
          </div>

      </form>

      <div className='experience-buttons'>
        <button type='button'>Add</button>
        <button type='submit'>Save</button>
      </div>
    </div>
  )

}

Experience.propTypes = {
  isActive: PropType.bool,
}

export default Experience;