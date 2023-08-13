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

  function handleInfoCardChange(e) {
    const value = e.target.value;
    setInfoInputValue({
      ...infoInputValue,
      [e.target.name]: value});
  }

  return (
    <>
      <Header />
      <div className="main-area">
        <InputSection  
          handleChange={handleInfoCardChange} 
          {...infoInputValue}
        />
        <DisplayArea {...infoInputValue} />
      </div>
      <Footer />
    </>
  );
}

export default App;
