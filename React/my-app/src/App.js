import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


export default function App(){
  
  const [mode, setMode] = useState('light'); //whether dark mode is enable or not

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
    }
    else{
      setMode('light');
    }
  }

  return (
    <div>
      <Navbar title="TextHelper" about="About" contact="Contact Us" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter text below for change: "/>
      </div>
    </div>
  );  
}
