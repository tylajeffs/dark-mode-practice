import React, { useState, useEffect } from 'react'
import './App.css';

function App() {

  //set up light mode and dark mode state
  const [mode, setMode] = useState('light');

  //give the mode options to toggle
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
    } else {
      setMode('light')
    }
  };

  //actually use the toggle
  useEffect(() => {
    document.body.className = mode;
  }, [mode]);

  return (
    <div className={'App ${mode}'}>
      <button onClick={toggleMode}>Change mode</button>
      <h1>Hello World</h1>
    </div>


  );
}

export default App;
