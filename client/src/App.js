import React from 'react';

import './App.css';
import Players from './Players';
import DarkMode from './DarkMode';


function App() {


  const [darkMode, setDarkMode] = useDarkMode();

  const toggleMode = e => {

    e.preventDefault();

    setDarkMode(darkMode);

  };


return (


  <Players />


  <div className="dark-mode__toggle">
  <button
    onClick={toggleMode}
    className={darkMode ? 'toggle toggled' : 'toggle'} />

    </div>
  );
}

export default App;
