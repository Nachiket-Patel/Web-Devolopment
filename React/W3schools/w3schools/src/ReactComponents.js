import React from 'react';


class Car extends React.Component {
  render() {
    return(
    <h2>This Car is class based component.</h2>
    );
  };
};

function Fruits() {
  return(
    <h2>This Fruits is function based component</h2>
  );
}

export default function ReactComponents() {
  return(
    <div>
      <Car />
      <Fruits />
    </div>
  );
}
