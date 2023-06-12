import React, { useState, createContext, useContext } from 'react';


const ProblemUseState = () => {

  function Component1() {
    const [user, setUser] = useState("Jesse Pickman");

    return(
      <>
        <h2>{`Hello ${user}!`}</h2>
        <Component2 user={user} />
      </>
    );
  }
  
  function Component2({ user }) {
    return(
      <>
        <h2>Component 2</h2>
        <Component3 user={user} />
      </>
    );
  }

  function Component3({ user }) {
    return(
      <>
        <h2>Component 3</h2>
        <Component4 user={user} />
      </>
    );
  }

  function Component4({ user }) {
    return(
      <>
        <h2>Component 4</h2>
        <Component5 user={user} />
      </>
    );
  }

  function Component5 ({ user }) {
    return(
      <>
        <h2>Component 5</h2>
        <h3>{`Hello ${user} again!`}</h3>
      </>
    );
  }

  return(
    <>
      <Component1 />
    </>
  );
}


function SolutionUseState() {

  const UserContext = createContext();

  function Component1() {
    const [user, setUser] = useState("Walter White");

    return(
      <UserContext.Provider value={user}>
        <h2>{`Hello ${user}!`}</h2>
        <Component2 />
      </UserContext.Provider>
    );
  }

  function Component2() {
    return(
      <>
        <h2>Component 2</h2>
        <Component3 />
      </>
    );
  }

  function Component3() {
    return(
      <>
        <h2>Component 3</h2>
        <Component4 />
      </>
    );
  }

  function Component4() {
    return(
      <>
        <h2>Component 4</h2>
        <Component5 />
      </>
    );
  }

  function Component5() {
    const user = useContext(UserContext);

    return(
      <>
        <h2>Component 5</h2>
        <h3>{`Hello ${user} again!`}</h3>
      </>
    );
  }

  return(
    <>
      <Component1 />
    </>
  );
}


export default function UseContexthook() {
  return(
    <>
      <h1>Problem with using only useState hook</h1>
      <p>we have many nested components. The component at the top and bottom of the stack need access to the state.</p>
      <p>To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling".</p>
      <ProblemUseState />
      <br/>
      <h1>Solution with using useContext hook</h1>
      <SolutionUseState />
    </>
  );
}
