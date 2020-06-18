import React , {useState} from 'react';
import Parent from './Parent';
import temperatureContext from './TemperatureContext';
import './App.css';

function App() {
  
  let temperatureState = useState(1);
  return (
    
    <temperatureContext.Provider value={temperatureState}>

      <div className="App">
        <header className="App-header">
          {/* <a className="App-link" href="https://www.facebook.com/ahsanjutt438"> Do not Click Here! </a> */}
          <Parent />
        </header>
      </div>
    </temperatureContext.Provider>
  );
}

export default App;
