import Header from './Header.jsx'
import InputSection from './InputSection.jsx'
import DisplayArea from './DisplayArea.jsx'
import '../styles/App.css'
import Footer from './Footer.jsx'

function App() {

  return (
    <>
      <Header />
      <div className='main-area'>
        <InputSection />
        <DisplayArea />
      </div>
      <Footer />
    </>
  )
}

export default App;
