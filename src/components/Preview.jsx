import PropTypes from 'prop-types';
import '../styles/DisplayArea.css';

function Preview({ firstName, lastName, title, email, phone, school, fieldOfStudy, graduationDate, 
  city, state, country }) {

  return (
    <div id="preview">
      <div className='preview-header'>
        <h2>{firstName} {lastName}</h2>
        <p>{title} <br/> {email} <br/>{phone}</p>
      </div>
      <div className='preview-body'>
        <h3>Education</h3>
        <p>{school} <br/> {fieldOfStudy} <br/> {graduationDate} <br/> {city} <br/> {state} <br/> {country} </p>
      </div>
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
  city: PropTypes.string,
  state: PropTypes.string,
  country: PropTypes.string
}
export default Preview;
