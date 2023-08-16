import { useState } from 'react';
import Header from './Header.jsx';
import InputSection from './InputSection.jsx';
import DisplayArea from './DisplayArea.jsx';
import '../styles/App.css';
import Footer from './Footer.jsx';
import uniqid from 'uniqid';

function App() {
  const [infoInputValue, setInfoInputValue] = useState({
    firstName: '',
    lastName: '',
    title: '',
    email: '',
    phone: '',
  });

  const initialValue = uniqid();

  const [educationInputValue, setEducationInputValue] = useState({
    id: initialValue,
    school: '',
    fieldOfStudy: '',
    graduationDate: '',
    schoolCity: '',
    schoolState: '',
    schoolCountry: '',
  });

  const [experienceInputValue, setExperienceInputValue] = useState({
    id: initialValue,
    company: '',
    companyCity: '',
    companyState: '',
    position: '',
    startDate: '',
    endDate: '',
  });

  const [educationList] = useState([]);

  function handleInfoCardChange(e) {
    const value = e.target.value;
    setInfoInputValue({
      ...infoInputValue,
      [e.target.name]: value,
    });
  }

  function handleEducationCardChange(e) {
    const value = e.target.value;
    setEducationInputValue({
      ...educationInputValue,
      [e.target.name]: value,
    });
  }

  function handleExperienceCardChange(e) {
    const value = e.target.value;
    setExperienceInputValue({
      ...experienceInputValue,
      [e.target.name]: value,
    });
  }

  function clearButtonHandle() {
    document.getElementById('info-form').reset();
    setInfoInputValue({
      firstName: '',
      lastName: '',
      title: '',
      email: '',
      phone: '',
    });
  }

  function educationAddHandle() {
    setEducationInputValue({
      id: uniqid(''),
    });
    educationList.push(educationInputValue);
    console.log(educationList);
  }

  return (
    <>
      <Header />
      <div className="main-area">
        <InputSection
          handleInfoChange={handleInfoCardChange}
          handleEducationChange={handleEducationCardChange}
          handleExperienceChange={handleExperienceCardChange}
          clearButtonHandle={clearButtonHandle}
          educationAddHandle={educationAddHandle}
        />
        <DisplayArea
          infoInputValue={infoInputValue}
          educationInputValue={educationInputValue}
          experienceInputValue={experienceInputValue}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
