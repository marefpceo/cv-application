import { useState } from 'react';
import Header from './Header.jsx';
import InputSection from './InputSection.jsx';
import DisplayArea from './DisplayArea.jsx';
import '../styles/App.css';
import Footer from './Footer.jsx';
import uniqid from 'uniqid';

function App() {

  const [educationList, setEducationList] = useState([]);
  const [experienceList, setExperienceList] = useState([]);
  const initialValue = uniqid();

  const [infoInputValue, setInfoInputValue] = useState({
    firstName: '',
    lastName: '',
    title: '',
    email: '',
    phone: '',
  });

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

    setEducationList([
      ...educationList,
      { ...educationInputValue }
    ]);
    document.getElementById('education-form').reset();
  }

  function experienceAddHandle() {
    setExperienceInputValue({
      id: uniqid('')
    });

    setExperienceList([
      ...experienceList,
      { ...experienceInputValue }
    ]);
    document.getElementById('experience-form').reset();
  }

  function deleteEntry(fieldType, entryId) {
    if (fieldType === 'edu') {
      setEducationList(
        educationList.filter(entry => entry.id !== entryId)
      );
    } else if (fieldType === 'exp') {
      setExperienceList(
        experienceList.filter(entry => entry.id !== entryId)
      );
    }
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
          experienceAddHandle={experienceAddHandle}
          educationList={educationList}
          experienceList={experienceList}
          deleteEntry={deleteEntry}
        />
        <DisplayArea
          infoInputValue={infoInputValue}
          educationList={educationList}
          experienceList={experienceList}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
