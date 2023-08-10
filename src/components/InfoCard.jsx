import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/InfoCard.css';

function InfoSection({ isActive }) {
  const [infoInputValue, setInfoInputValue] = useState({
    firstName: '',
    lastName: '',
    title: '',
    email: '',
    phone: '',
  });

  return (
    <div id="info-card" style={{ display: isActive ? 'flex' : 'none' }}>
      <h2>Information</h2>
      <form className='info-form'>
        <label htmlFor="firstName">First Name: </label>
        <input
          type="text"
          name="firstName"
          value={infoInputValue.firstName}
          onChange={(e) =>
            setInfoInputValue({ ...infoInputValue, firstName: e.target.value })
          }
        />
        <label htmlFor="lastName">Last Name: </label>
        <input
          type="text"
          name="lastName"
          value={infoInputValue.lastName}
          onChange={(e) =>
            setInfoInputValue({ ...infoInputValue, lastName: e.target.value })
          }
        />
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          value={infoInputValue.title}
          onChange={(e) =>
            setInfoInputValue({ ...infoInputValue, title: e.target.value })
          }
        />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          value={infoInputValue.email}
          onChange={(e) =>
            setInfoInputValue({ ...infoInputValue, email: e.target.value })
          }
        />
        <label htmlFor="phone">Phone: </label>
        <input
          type="tel"
          name="phone"
          value={infoInputValue.phone}
          onChange={(e) =>
            setInfoInputValue({ ...infoInputValue, phone: e.target.value })
          }
        />
      </form>

      <div className="info-buttons">
        <button type="button">Edit</button>
        <button type="submit">Save</button>
        <button type="reset">Clear</button>
      </div>
    </div>
  );
}

InfoSection.propTypes = {
  isActive: PropTypes.bool,
};

export default InfoSection;
