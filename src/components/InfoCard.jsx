import PropTypes from 'prop-types';
import '../styles/InfoCard.css';

function InfoCard({ isActive, handleChange, firstName, lastName, title, email, phone  }) {

  return (
    <div id="info-card" style={{ display: isActive ? 'flex' : 'none' }}>
      <h2>Information</h2>
      <form className="info-form">
        <label htmlFor="firstName">First Name: </label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleChange}
        />
        <label htmlFor="lastName">Last Name: </label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleChange}
        />
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <label htmlFor="phone">Phone: </label>
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={handleChange}
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

InfoCard.propTypes = {
  isActive: PropTypes.bool,
  handleChange: PropTypes.func,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  title: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string
};

export default InfoCard;
