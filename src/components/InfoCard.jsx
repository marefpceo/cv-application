import { useState } from 'react'
import '../styles/InfoCard.css'

function InfoSection({isActive}) {
  const [inputValue, setInputValue] = useState({firstName: '', lastName: '', title: '', email: '', phone: ''});


  return (
    <div id="info-card" style={{display: isActive ? 'flex' : 'none'}}>
      <h2>Information</h2>
      <form>
        <label htmlFor='firstName'>First Name: </label>
          <input
            type="text"
            name="firstName"
            value={inputValue.firstName}
            onChange={e => setInputValue({ ...inputValue, firstName: e.target.value})}
          />
        <label htmlFor='lastName'>Last Name: </label>
          <input
            type="text"
            name="lastName"
            value={inputValue.lastName}
            onChange={e => setInputValue({ ...inputValue, lastName: e.target.value})}
          />
        <label htmlFor='title'>Title: </label>
          <input
            type="text"
            name="title"
            value={inputValue.title}
            onChange={e => setInputValue({ ...inputValue, title: e.target.value})}
          />
        <label htmlFor='email'>Email: </label>
          <input
            type='email'
            name='email'
            value={inputValue.email}
            onChange={e => setInputValue({ ...inputValue, email: e.target.value})}
          />
        <label htmlFor='phone'>Phone: </label>
          <input
            type='tel'
            name='phone'
            value={inputValue.phone}
            onChange={e => setInputValue({ ...inputValue, phone: e.target.value})}
          />
      </form>

      <div className="buttons">
          <button type='button'>Edit</button>
          <button type='submit'>Save</button>
          <button type="reset">Reset</button>
      </div>
    </div>
  )
}

export default InfoSection;