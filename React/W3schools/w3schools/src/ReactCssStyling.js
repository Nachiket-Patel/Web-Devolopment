import React from 'react';
import style from './App.css';


const InlineStyling = () => {
  return(<p style={{color: 'red'}}>This is inline style.</p>)
}

const CamelCase = () => {
  return(<p style={{backgroundColor: 'greenyellow'}}>This is backgroundColor, not background-color.</p>)
}

const CSSObject = () => {
  const style = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-serif"
  };

  return(
    <>
      <h2>CSS object</h2>
      <p style={style}>we can pass object as styles</p>
    </>
  );
}

function CSSModules() {
  return(<p className='component'>This is css module</p>)
}

export default function ReactCssStyling() {
  return(
    <>
      <h2>Inline Styling</h2>
      <InlineStyling />
      <br/>
      <h2>CamelCase</h2>
      <CamelCase />
      <br/>
      <CSSObject />
      <br/>
      <h2>CSS Module</h2>
      <CSSModules />
    </>
  );
}