import { useState } from 'react';
import Header from './Header.jsx';
import InputSection from './InputSection.jsx';
import DisplayArea from './DisplayArea.jsx';
import '../styles/App.css';
import Footer from './Footer.jsx';

function App() {
  const [infoInputValue, setInfoInputValue] = useState({
    firstName: '',
    lastName: '',
    title: '',
    email: '',
    phone: '',
  });

  const [educationInputValue, setEducationInputValue] = useState({
    school: '',
    fieldOfStudy: '',
    graduationDate: '',
    city: '',
    state: '',
    country: '',
  });

  function handleInfoCardChange(e) {
    const value = e.target.value;
    setInfoInputValue({
      ...infoInputValue,
      [e.target.name]: value});
  }

  function handleEducationCardChange(e) {
    const value = e.target.value;
    setEducationInputValue({
      ...educationInputValue,
      [e.target.name]: value});
  }

  return (
    <>
      <Header />
      <div className="main-area">
        <InputSection  
          handleInfoChange={handleInfoCardChange} 
          handleEducationChange={handleEducationCardChange}
          {...infoInputValue}
          {...educationInputValue}
        />
        <DisplayArea {...infoInputValue} {...educationInputValue} />
      </div>
      <Footer />
    </>
  );
}

export default App;
