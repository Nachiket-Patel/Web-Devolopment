//object, properties and method

/* object is car
color, weight and height are properties, give more info about object.
and brake, start and stop are method, methods are action perform on object.
*/

//All cars(object) have the same properties, but the property values differ from car to car.
//All cars have the same methods, but the methods are performed at different times.

const car = {
    type: "BMW",
    model: "xseries",
    color: "Black",
    weight: "1.5T",
    height: "6ft"
};
//accecing object properties
console.log(car.model);
console.log(car["type"]);

//change object properties
car.model = "ford";
console.log(car.model);

//Use of this keyword

/*In JavaScript, the this keyword refers to an object.

The this keyword refers to different objects depending on how it is used:
In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.
*/

