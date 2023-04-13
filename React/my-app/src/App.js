import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


export default function App(){
  
  return (
    <div>
      <Navbar title="TextHelper" about="About" contact="Contact Us" />
      <div className="container my-3">
        <TextForm heading="Enter text below for change: "/>
      </div>
    </div>
  );  
}
