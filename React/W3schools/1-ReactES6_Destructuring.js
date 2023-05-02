//* We may have an array or object that we are working with, but we only need some of the items contained in these.
//* Destructuring makes it easy to extract only what is needed.


//* Destructing Arrays
const vehicles1 = ['mustang', 'f-150', 'expedition'];
// old way
const car1 = vehicles1[0];
const truck1 = vehicles1[1];
const suv1 = vehicles1[2];

//Here is the new way of assigning array items to a variable:
const vehicles = ['mustang', 'f-150', 'expedition'];
const [car, truck, suv] = vehicles;
console.log(car);
console.log(truck);
console.log(suv);

//! When destructuring arrays, the order that variables are declared is important.

/*
If we only want the car and suv we can simply leave out the truck but keep the comma:
const vehicles = ['mustang', 'f-150', 'expedition'];
const [car,, suv] = vehicles;
*/


//* Destructuring comes in handy when a function returns an array:
function calculate(a,b){
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;

    return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(10,5);
console.log("Addition: " + add);
console.log("Subtract: " + subtract);
console.log("Multiply: " + multiply);
console.log("Divide: " + divide);



//* Destructuring Objects
//Here is the old way of using an object inside a function:
const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red'
  }
myVehicle(vehicleOne);
// old way
function myVehicle(vehicle) {
const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
}

//Here is the new way of using an object inside a function:
const vehicleOne1 = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2023,
    color: 'red',
}

myVehicle1(vehicleOne1);

function myVehicle1(type, color, brand, model){
    const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
}
//document.write(massage);

//! Notice that the object properties do not have to be declared in a specific order.

// We can even destructure deeply nested objects by referencing the nested object then using a colon and curly braces to again destructure the items needed from the nested object:
const vehicleOne2 = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red',
    registration: {
      city: 'Houston',
      state: 'Texas',
      country: 'USA'
    }
}

myVehicle2(vehicleOne2)

function myVehicle2({ model, registration: { state } }) {
    const message = 'My ' + model + ' is registered in ' + state + '.';
}
//document.write(message);
