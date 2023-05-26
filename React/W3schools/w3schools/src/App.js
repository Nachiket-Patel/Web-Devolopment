import React from 'react';
import './App.css';


class Car extends React.Component {
  render() {
    return(
      <h2>This Car class based components</h2>
    );
  };
};

export default function Fruits() {
  return(
    <h2>This Fruits</h2>
  );
}


export default function App() {
    
  return (
    <div>
      <h1>Nachiket Patel</h1>
      <p>This is tutorials from W3schools</p>
      <Car />
    </div>
  );
  
}
