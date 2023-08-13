import DisplayNav from './DisplayNav';
import Preview from './Preview';
import '../styles/DisplayArea.css';

function DisplayArea({ ...infoInputValue }) {
  return (
    <div className="display-area">
      <DisplayNav />
      <Preview {...infoInputValue}/>
    </div>
  );
}

export default DisplayArea;
