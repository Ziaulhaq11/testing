import { useState } from 'react';
import './App.css';

//Medium Violet Red
// Midnight Blue

export function replaceCamelWithSpaces (colorName) {
  return colorName.replace(/([A-Z])/g, ' $1').trim()
}

function App() {
  const [buttonColor,setButtonColor] = useState('MediumVioletRed')
  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed'
  const [checkbox,setCheckBox] = useState(false)
   return (
    <div className="App">
      <button style={{color : 'white',backgroundColor : checkbox ? 'gray' : buttonColor }} onClick={() => setButtonColor(newButtonColor)} disabled={checkbox}>Change to {replaceCamelWithSpaces(newButtonColor)}</button>
      <input type="checkbox" id="disable-button-checkbox" checked ={checkbox} onChange={()=>setCheckBox(!checkbox)}/>
      <label htmlFor='disable-button-checkbox'>{checkbox ? "Enable Button" : "Disable Button"}</label>
    </div>
  );
}

export default App;
