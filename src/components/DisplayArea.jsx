import DisplayNav from './DisplayNav';
import Preview from './Preview';
import '../styles/DisplayArea.css'

function DisplayArea() {
  return (
    <div className='display-area'>
      <DisplayNav />
      <Preview />
    </div>
  )
}

export default DisplayArea;