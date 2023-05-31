//! React Props are read-only! You will get an error if you try to change their value.

//? props stands for properties.

//* Props are arguments passed into React components.
//* Props are passed to components via HTML attributes.

//*React Props
//React Props are like function arguments in JavaScript and attributes in HTML.
//To send props into a component, use the same syntax as HTML attributes.

//pass props
const myElement = <Car brand="Ford" />;

//The component receives the argument as a props object:
function Car(props) {
    return <h2>I am a { props.brand }!</h2>;
}


//* Pass Data
//Props are also how you pass data from one component to another, as parameters.
//Example: Send the "brand" property from the Garage component to the Car component
function Car(props) {
    return <h2>I am a { props.brand }!</h2>;
}

function Garage() {
    return (
        <>
        <h1>Who lives in my garage?</h1>
        <Car brand="Ford" />
        </>
    );
}

//?If you have a variable to send, and not a string as in the example above, you just put the variable name inside curly brackets
//Example
function Car(props) {
    return <h2>I am a { props.brand }!</h2>;
}
  
function Garage() {
    const carName = "Ford";
    return (
        <>
        <h1>Who lives in my garage?</h1>
        <Car brand={ carName } />
        </>
    );
}

//?Or if it was an object:
//Example
function Car(props) {
    return <h2>I am a { props.brand.model }!</h2>;
}
  
function Garage() {
    const carInfo = { name: "Ford", model: "Mustang" };
    return (
        <>
        <h1>Who lives in my garage?</h1>
        <Car brand={ carInfo } />
        </>
    );
}
