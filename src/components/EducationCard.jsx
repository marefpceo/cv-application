import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/EducationCard.css';

function Education({ isActive }) {
  const [educationInputValue, setEducationInputValue] = useState({
    school: '',
    fieldOfStudy: '',
    graduationDate: '',
    city: '',
    state: '',
    country: '',
  });

  return(
    <div id='education-card' style={{ display: isActive ? 'flex' : 'none' }}>
      <h2>Education</h2>
      <form className='education-form'>
        <label htmlFor='school'>School: </label>
        <input 
          type='text'
          name='school' 
          value={educationInputValue.school}
          onChange={(e) => 
            setEducationInputValue({ ...educationInputValue, school: e.target.value})}
        />

        <label htmlFor='fieldOfStudy'>Field of Study: </label>
        <input 
          type='text' 
          name='titleOfStudy'
          value={educationInputValue.fieldOfStudy}
          onChange={(e) => 
            setEducationInputValue({ ...educationInputValue, fieldOfStudy: e.target.value})}
        />

        <label htmlFor='graduationDate'>Graduation Date: </label>
        <input 
          type='date' 
          name='graduationDate'
          value={educationInputValue.graduationDate}
          onChange={(e) => 
            setEducationInputValue({ ...educationInputValue, graduationDate: e.target.value})}
        />

        <label htmlFor='city'>City: </label>
        <input 
          type='text'
          name='city'
          value={educationInputValue.city}
          onChange={(e) => 
            setEducationInputValue({ ...educationInputValue, city: e.target.value})}
        />

        <label htmlFor='state'>State: </label>
        <input 
          type='text'
          name='state'
          value={educationInputValue.state}
          onChange={(e) => 
            setEducationInputValue({ ...educationInputValue, state: e.target.value})}
        />

        <label htmlFor='country'>Country: </label>
        <input 
          type='text'
          name='country'
          value={educationInputValue.country}
          onChange={(e) => 
            setEducationInputValue({ ...educationInputValue, country: e.target.value})}
        />
      </form>

      <div className='education-buttons'>
        <button type='button'>Add</button>
        <button type='submit'>Save</button>
      </div>
    </div>
  );
}

Education.propTypes = {
  isActive: PropTypes.bool,
}

 export default Education;