import React from 'react';


const Fruit = (props) => {
  return(
		<li>{props.fruit}</li>
	);
}

function FruitsName() {
  const fruits = ['banana', 'mango', 'apple', 'kiwi'];
  return(
		<>
			<h2>Fruits List:</h2>
			<ul>{fruits.map((name) => <Fruit fruit={name} />)}</ul>
		</>
  );
}

const Vegetable = (props) => {
	return(
		<li>{props.name}</li>
	);
}

function VegetableName() {
	const vegetables = [
		{id: 1, name: 'Potato'},
		{id: 2, name: 'Tomato'},
		{id: 3, name: 'Onion'},
		{id: 4, name: 'Carrot'},
	]
	return(
		<>
			<h2>Vegetable List:</h2>
			<ol>{vegetables.map((vegetables) => <Vegetable name={vegetables.name} key={vegetables.id} />)}</ol>
		</>
	);
}

export default function ReactLists() {
	return(
		<>
			<h1>React Lists</h1>
			<p>This list don't have ids so it will show unique id warning in console.</p>
			<FruitsName />
			<br/>
			<p>This list have ids so it won't show warning in console.</p>
			<VegetableName />
		</>
	);
}
