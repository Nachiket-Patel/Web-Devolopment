import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar title="TextHelper" about="About" contact="Contact Us" />
      </div>
    );
  }
}

export default App;
