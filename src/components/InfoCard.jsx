import PropTypes from 'prop-types';
import '../styles/InfoCard.css';

function InfoCard({
  isActive,
  handleInfoChange,
  clearButtonHandle,
  firstName,
  lastName,
  title,
  email,
  phone,
}) {
  const formInputs = document.querySelectorAll('#info-form input');

  function saveButtonHandle(e) {
    e.preventDefault();
    formInputs.forEach((input) => (input.disabled = 'true'));
    document.getElementById('info-clear-btn').disabled = 'true';
    document.getElementById('info-save-btn').disabled = 'true';
  }

  function editButtonHandle() {
    formInputs.forEach((input) => (input.disabled = ''));
    document.getElementById('info-clear-btn').disabled = '';
    document.getElementById('info-save-btn').disabled = '';
  }

  return (
    <div id='info-card' style={{ display: isActive ? 'flex' : 'none' }}>
      <h2>Information</h2>
      <form id='info-form' className='info-form'>
        <label htmlFor='firstName'>First Name: </label>
        <input
          type='text'
          name='firstName'
          value={firstName}
          onChange={handleInfoChange}
        />
        <label htmlFor='lastName'>Last Name: </label>
        <input
          type='text'
          name='lastName'
          value={lastName}
          onChange={handleInfoChange}
        />
        <label htmlFor='title'>Title: </label>
        <input
          type='text'
          name='title'
          value={title}
          onChange={handleInfoChange}
        />
        <label htmlFor='email'>Email: </label>
        <input
          type='email'
          name='email'
          value={email}
          onChange={handleInfoChange}
        />
        <label htmlFor='phone'>Phone: </label>
        <input
          type='tel'
          name='phone'
          value={phone}
          onChange={handleInfoChange}
        />
      </form>
      <div className='info-buttons'>
        <button type='button' onClick={editButtonHandle} id='info-edit-btn'>
          Edit
        </button>
        <button type='submit' onClick={saveButtonHandle} id='info-save-btn'>
          Save
        </button>
        <button type='reset' onClick={clearButtonHandle} id='info-clear-btn'>
          Clear
        </button>
      </div>
    </div>
  );
}

InfoCard.propTypes = {
  isActive: PropTypes.bool,
  handleInfoChange: PropTypes.func,
  clearButtonHandle: PropTypes.func,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  title: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
};

export default InfoCard;
