import { useState } from 'react';


const FavoriteColor = () => {
  const [color, setColor] = useState("Black");

  return(
    <div>
      <h3>My Favorite color is: {color}!</h3>
      <button  style={{margin: "0px 1px 0px 5px"}} onClick={() => setColor("Red")}>Red</button>
      <button style={{margin: "0px 1px 0px 2px"}} onClick={() => setColor("Blue")}>Blue</button>
      <button style={{margin: "0px 1px 0px 2px"}} onClick={() => setColor("Green")}>Green</button>
      <button  style={{margin: "0px 1px 0px 2px"}} onClick={() => setColor("Black")}>Black</button>
    </div>
  );
}

const MultiHooks = () => {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");

  return(
    <>
      <h2>{brand}</h2>
      <p>It is a {color} {model} from {year}.</p>
    </>
  );
}

const ObjectHook = () => {
  const [car, setCar] = useState({
    brand: "BMW",
    model: "M3 GTR",
    year: "2005",
    color: "blue",
  })

  return(
    <>
    <h2>{car.brand}</h2>
    <p>It is a {car.color} {car.model} from {car.year}.</p>
    </>
  );
} 

const ObjectArrayState = () => {
  const [car, setCar] = useState({
    brand: "AUDI",
    model: "A6",
    year: "2012",
    color: "green",
  })

  const changeColor = () => {
    setCar(previousState => {
      return{...previousState, color: "black"}
    });
  }

  return(
    <>
      <h2>{car.brand}</h2>
      <p>It is a {car.color} {car.model} from {car.year}.</p>
      <button style={{marginBottom : "15px"}} onClick={changeColor}>Click here</button>
    </>
  );
}

export default function UseStateHook() {
  return(
    <>
      <h2>Favorite Color</h2>
      <FavoriteColor />
      <br/>
      <h2>Use of Multiple Hooks</h2>
      <MultiHooks />
      <br/>
      <ObjectHook />
      <br/>
      <ObjectArrayState />
    </>
  );
}