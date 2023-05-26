import React from 'react';


class Car extends React.Component {
  render() {
    return(
    <h2 className='class'>This Car is class based component.</h2>
    );
  };
};

function Fruits() {
  return(
    <h2 className='function'>This Fruits is function based component</h2>
  );
}

function InComponent() {
  return(
    <>
      <h2 className='component'>This is In Component</h2>
      <h3>We can use component inside another component</h3>
      <p>This is component in component.</p>
    </>
  );
}

function OutComponent() {
  return(
    <React.Fragment>
      <h2 className='component'>This is outside component</h2>
      <p>we can call in component here.</p>
      <InComponent />
    </React.Fragment>
  )
}

export default function ReactComponents() {
  return(
    <div>
      <Car />
      <Fruits />
      <OutComponent />
    </div>
  );
}
