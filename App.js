import React, {useState} from "react";

const App = ()=> {
  const [tempvalue, setTempValue] = useState(0);
  const [tempClass, newTempClass] = useState('cold');

  const increaseTemp = ()=> {
    if(tempvalue === 30) return;
    const newTempValue = tempvalue + 1;
    if(newTempValue > 15) {
      newTempClass('hot')
    }
    setTempValue(newTempValue)
  }

  const decreaseTemp = ()=> {
    if(tempvalue === 0) return;
    const newTempValue = tempvalue - 1;
    if(newTempValue < 15) {
      newTempClass('cold')
    }
    setTempValue(newTempValue)
  }

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${tempClass}`}> {tempvalue}°C </div>
      </div>
      <div className="button-container"> 
        <button onClick={increaseTemp}> + </button>
        <button onClick={decreaseTemp}> - </button>
      </div>
    </div>
  )
}

export default App;