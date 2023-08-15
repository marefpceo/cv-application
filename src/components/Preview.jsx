import PropTypes from 'prop-types';
import profileImage from '../assets/blank-profile-circle.png';
import '../styles/DisplayArea.css';

function Preview({ firstName, lastName, title, email, phone, school, fieldOfStudy, graduationDate, 
  schoolCity, schoolState, schoolCountry, company, companyCity, companyState, position, startDate, 
  endDate }) {

  const name = firstName + ' ' + lastName;

  return (
    <div id="preview">
      <header className='preview-header'>
        <div className='header-name'>
          <h2>{name}</h2>
          <p>{title}</p>
        </div>
      </header>

      <aside id='preview-aside'>
        
        <div className='preview-contact'>
          <div id='profile-image'>
            <img src={profileImage} alt='Blank profile'/>
          </div>
          <h3>Contact</h3>
          <hr/>
          <ul>
            <li> <span className='preview-labels'>Email: </span> {email} </li>
            <li> <span className='preview-labels'>Phone: </span> {phone} </li>
          </ul>
        </div>

        <h3>Education</h3>
        <hr/>
        
        <p>{school} <br/> {fieldOfStudy} <br/> {graduationDate} <br/> {schoolCity} <br/> {schoolState} <br/> {schoolCountry} </p>
      </aside>

      <section className='preview-body'>
      <h3>Experience</h3>
        <div className='experience-div'>
          <div className='dates'>
            {startDate}-{endDate}
          </div>
          <div className='company'>
            <h4>{company}</h4>
            <p>{position}</p>
          </div>

          <div className='company-location'>
            {companyCity}
            {companyState}
          </div>
          
        </div>
      </section>

    </div>);
}

Preview.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  title: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  school: PropTypes.string,
  fieldOfStudy: PropTypes.string,
  graduationDate: PropTypes.string,
  schoolCity: PropTypes.string,
  schoolState: PropTypes.string,
  schoolCountry: PropTypes.string,
  company: PropTypes.string,
  companyCity: PropTypes.string,
  companyState: PropTypes.string,
  position: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string
}
export default Preview;
