import { useState } from 'react';
import Header from './Header.jsx';
import InputSection from './InputSection.jsx';
import DisplayArea from './DisplayArea.jsx';
import '../styles/App.css';
import Footer from './Footer.jsx';
import uniqid from 'uniqid';

function App() {
  const infoInitialState = {
    firstName: '',
    lastName: '',
    title: '',
    email: '',
    phone: '',
  };

  const educationInitialState = {
    id: uniqid(),
    school: '',
    fieldOfStudy: '',
    graduationDate: '',
    schoolCity: '',
    schoolState: '',
    schoolCountry: '',
  };

  const experienceInitialState = {
    id: uniqid(),
    company: '',
    companyCity: '',
    companyState: '',
    position: '',
    startDate: '',
    endDate: '',
  };

  const [infoInputValue, setInfoInputValue] = useState(infoInitialState);
  const [educationInputValue, setEducationInputValue] = useState(
    educationInitialState,
  );
  const [experienceInputValue, setExperienceInputValue] = useState(
    experienceInitialState,
  );
  const [educationList, setEducationList] = useState([]);
  const [experienceList, setExperienceList] = useState([]);

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
    if (educationInputValue.id === '') {
      setEducationInputValue({
        id: uniqid(''),
      });
    }

    setEducationList([...educationList, { ...educationInputValue }]);

    setEducationInputValue(educationInitialState);
  }

  function experienceAddHandle() {
    if (experienceInputValue.id === '') {
      setExperienceInputValue({
        id: uniqid(''),
      });
    }

    setExperienceList([...experienceList, { ...experienceInputValue }]);

    setExperienceInputValue(experienceInitialState);
  }

  function deleteEntry(fieldType, entryId) {
    if (fieldType === 'edu') {
      setEducationList(educationList.filter((entry) => entry.id !== entryId));
    } else if (fieldType === 'exp') {
      setExperienceList(experienceList.filter((entry) => entry.id !== entryId));
    }
  }

  function editEntry(fieldType, entryId) {
    if (fieldType === 'edu') {
      setEducationInputValue(
        ...educationList.filter((entry) => entry.id === entryId),
      );
    } else if (fieldType === 'exp') {
      setExperienceInputValue(
        ...experienceList.filter((entry) => entry.id === entryId),
      );
    }
  }

  function saveEntry(fieldType, entryId) {
    if (fieldType === 'edu') {
      setEducationList([
        ...educationList.map((entry) => {
          if (entry.id === entryId) {
            return { ...entry, ...educationInputValue };
          }
          return entry;
        }),
      ]);
      setEducationInputValue(educationInitialState);
    }

    if (fieldType === 'exp') {
      setExperienceList([
        ...experienceList.map((entry) => {
          if (entry.id === entryId) {
            return { ...entry, ...experienceInputValue };
          }
          return entry;
        }),
      ]);
      setExperienceInputValue(experienceInitialState);
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
          educationInputValue={educationInputValue}
          experienceInputValue={experienceInputValue}
          deleteEntry={deleteEntry}
          editEntry={editEntry}
          saveEntry={saveEntry}
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
