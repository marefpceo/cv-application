import DisplayNav from './DisplayNav';
import Preview from './Preview';
import '../styles/DisplayArea.css';

function DisplayArea({ ...infoInputValue }, {...educationInputValue}) {
  return (
    <div className="display-area">
      <DisplayNav />
      <Preview 
        {...infoInputValue} 
        {...educationInputValue}   
      />
    </div>
  );
}

export default DisplayArea;
