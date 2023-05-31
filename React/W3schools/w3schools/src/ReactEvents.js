import React from 'react';


function Event() {
  const shoot = () => {
    alert("This is ALERT");
  }
  
  return(
      <button onClick={shoot}>Click here</button>
  );
}

function PassEvent() {
  const shoot = (e) => {
    alert(e);
  }
  
  return(
    <button onClick={() => shoot("GOAL!")}>Click me</button>
  );
} 

function EventObject() {
  const shoot = (a, b) => {
    alert(b.type);/*'b' represents the React event that triggered the function, in this case the 'click' event */
  }

  return(
    <button onClick={(event) => shoot("Object", event)}>Click event</button>
  );
}

export default function ReactEvent() {
  return(
    <div>
      <h1>React Events</h1>
      <h2>Pass Event</h2>
      <Event />
      <h2>Pass argument to event handler</h2>
      <PassEvent />
      <h2>Pass object to event handler</h2>
      <EventObject />
    </div>
  );
}
