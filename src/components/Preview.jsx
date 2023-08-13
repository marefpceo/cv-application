import PropTypes from 'prop-types';
import '../styles/DisplayArea.css';

function Preview({ firstName, lastName, title, email, phone }) {

  return (
    <div id="preview">
      <div className='preview-header'>
      <h2>{firstName} {lastName}</h2>
      <p>{title} <br/> {email} <br/>{phone}</p>
      </div>
    </div>);
}

Preview.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  title: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string
}
export default Preview;
