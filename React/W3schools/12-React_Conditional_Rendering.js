//In React, you can conditionally render components. There are several ways to do this.


//* if Statement
//We can use the if JavaScript operator to decide which component to render.
//Example:
function MissedGoal() {
    return <h2>MISSED!</h2>;
}
function MadeGoal() {
    return <h2>Goal!</h2>;
}

function Goal(props) {
    const isGoal = props.isGoal;
    if (isGoal) {
        return <MadeGoal/>;
    }
    return <MissedGoal/>;
}


//* Logical && Operator
//Another way to conditionally render a React component is by using the && operator.
//Example:
function Garage(props) {
    const cars = props.cars;
    return (
        <>
            <h1>Garage</h1>
            {cars.length > 0 && <h2>You have {cars.length} cars in your garage.</h2>}
        </>
    );
}

//* If cars.length > 0 is equates to true, the expression after && will render.
//Try emptying the cars array:
const cars = [];


//* Ternary Operator
//Another way to conditionally render elements is by using a ternary operator.

//*syntax: condition ? true : false

//Example:
function Goal(props) {
    const isGoal = props.isGoal;
    return (
        <>
            { isGoal ? <MadeGoal/> : <MissedGoal/> }
        </>
    );
}
