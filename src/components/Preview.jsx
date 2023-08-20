import PropTypes from 'prop-types';
import profileImage from '../assets/blank-profile-circle.png';
import '../styles/DisplayArea.css';

function Preview({
  firstName,
  lastName,
  title,
  email,
  phone,
  company,
  companyCity,
  companyState,
  position,
  startDate,
  endDate,
  educationList
}) {
  const name = firstName + ' ' + lastName;

  return (
    <div id="preview">
      <header className="preview-header">
        <div className="header-name">
          <h2>{name}</h2>
          <p>{title}</p>
        </div>
      </header>

      <aside id="preview-aside">
        <div className="preview-contact">
          <div id="profile-image">
            <img src={profileImage} alt="Blank profile" />
          </div>
          <h3>Contact</h3>
          <hr />
          <ul>
            <li>
              {' '}
              <span className="preview-labels">Email: </span> {email}{' '}
            </li>
            <li>
              {' '}
              <span className="preview-labels">Phone: </span> {phone}{' '}
            </li>
          </ul>
        </div>

        <div className="preview-education">
          <h3>Education</h3>
          <hr />

          <div className="school-info">
            {educationList && educationList.map((eduItem) => (
              <div className='preview-edu' key={eduItem.id}>
              <p>{eduItem.graduationDate} </p>
                <div>
                  <p>{eduItem.school}</p>
                  <p>{eduItem.fieldOfStudy}</p>
                  <p>
                    {eduItem.schoolCity}, {eduItem.schoolState} {eduItem.schoolCountry}
                  </p>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </aside>

      <section className="preview-body">
        <h3>Experience</h3>
        <hr />
        <div className="experience-div">
          <div className="experience-dates">
            {startDate}-{endDate}
          </div>
          <div className="company-info">
            <div className="company">
              <h4>{company}</h4>
              <p>{position}</p>
            </div>
            <div className="company-location">
              <p>{companyCity}</p>
              <p>{companyState}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

Preview.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  title: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  company: PropTypes.string,
  companyCity: PropTypes.string,
  companyState: PropTypes.string,
  position: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  educationList: PropTypes.array
};
export default Preview;
