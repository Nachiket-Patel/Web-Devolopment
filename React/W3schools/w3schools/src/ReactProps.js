import React from 'react';


function Car(props){
  return(
    <div>
      <h2>I have car a brand:{ props.brand }.</h2>
      <p>here brand is pass as prop.</p>
    </div>
  );
}

function CarName(props){
  return(
    <React.Fragment>
      <h1>Car mode is : {props.model}</h1>
      <p>Send model as variable than passing as string.</p>
    </React.Fragment>
  );
}

function CarInfo(props){
  return(
    <h1>Type of car is {props.carType.type}</h1>
  );
}

function Garage(){
  const carModel = "Fortuner";
  const carInfo = {brand:"Toyota", model:"Fortuner", type:"SUV"};
  return(
    <>
      <h1>Who live in my garage?</h1>
      <Car brand="Toyota" />
      <p>Send the "brand" property from the Garage component to the Car component.</p>
      <CarName model={carModel} />
      <p>here pass model as variable.</p>
      <CarInfo carType={carInfo} />
      <p>here we pass car type as object.</p>
    </>
  );
}


export default function ReactProps(props) {
  return(
    <>
      <h1>I have {props.color} car</h1>
      <p>value of color of car is passed as prop.</p>
      <Garage />
    </>
  );
}
