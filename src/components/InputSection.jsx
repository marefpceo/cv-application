import { useState } from 'react'
import InfoSection from './InfoCard.jsx'
import infoIconLight from '../assets/info-icon-light.png'
import schoolIconLight from '../assets/school-icon-light.png'
import workIconLight from '../assets/work-history-icon-light.png'
import '../styles/InputSection.css'

function InputSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className='input-section'>
      <nav id="input-nav">
        <InputNavButtons 
          icon={infoIconLight} 
          isActive={activeIndex === 0}
          onShow={() => setActiveIndex(0)}
        />
        <InputNavButtons 
          icon={schoolIconLight} 
          isActive={activeIndex === 1}
          onShow={() => setActiveIndex(1)}
        />
        <InputNavButtons 
          icon={workIconLight} 
          isActive={activeIndex === 2}
          onShow={() => setActiveIndex(2)}
        />
      </nav>

      <div className="cards">
        <InfoSection 
          isActive={activeIndex === 0}
        />
      </div>
    </section>
  )
}

function InputNavButtons({ icon, isActive, onShow }) {

  return (
    <img src={icon} 
      alt="General information input" 
      onClick={onShow}
      className={`input-icons ${isActive ? 'current' : ''}`}
    />
  )
}

export default InputSection;