import PropTypes from 'prop-types';
import '../styles/DisplayArea.css';

function Preview({
  firstName,
  lastName,
  title,
  email,
  phone,
  experienceList,
  educationList,
}) {
  const name = firstName + ' ' + lastName;

  return (
    <div id='preview'>
      <header className='preview-header'>
        <div className='header-name'>
          <h2>{name}</h2>
          <p>{title}</p>
        </div>
        <ul>
            <li>
              {' '}
              <span className='preview-labels'>Email: </span> {email}{' '}
            </li>
            <li>
              {' '}
              <span className='preview-labels'>Phone: </span> {phone}{' '}
            </li>
          </ul>

      </header>

      <section className='preview-education'>
          <h3>Education</h3>
          <hr />

          <div className='school-info'>
            {educationList &&
              educationList.map((eduItem) => (
                <div className='preview-edu' key={eduItem.id}>
                  <p>{eduItem.graduationDate} </p>
                  <div>
                    <h4>{eduItem.school}</h4>
                    <p>{eduItem.fieldOfStudy}</p>
                    <p>
                      {eduItem.schoolCity}, {eduItem.schoolState}{' '}
                      {eduItem.schoolCountry}
                    </p>
                  </div>
                </div>
              ))}
          </div>
      </section>

      <section className='preview-experience'>
        <h3>Experience</h3>
        <hr />

        <div className='experience-info'>
          {experienceList &&
            experienceList.map((expItem) => (
              <div className='preview-exp' key={expItem.id}>
                <div className='experience-dates'>
                  {expItem.startDate} - {expItem.endDate}
                </div>
                <div className='company'>
                  <div className='company-info'>
                    <h4>{expItem.company}</h4>
                    <p>{expItem.position}</p>
                  </div>
                
                <div className='company-location'>
                  <p> {expItem.companyCity}, {expItem.companyState} </p>
                </div>
                </div>
              </div>
            ))}
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
  educationList: PropTypes.array,
  experienceList: PropTypes.array,
};
export default Preview;
