import React from 'react';


class Car extends React.Component {
  render() {
    return(
    <h2>This Car is class based component.</h2>
    );
  };
};


export default function ReactComponents() {
  return(
    <div>
      <Car />
    </div>
  );
}
