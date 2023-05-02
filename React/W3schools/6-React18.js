//? By default when React App will be created src/index.js file will like this

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

//* But this will show error in console

//! Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot


//? To remove this error and use React 18 we need to make changes in index.js file.

//* method1:
//* remove ReactDOM and add createRoot and change react-dom to react-dom/client.
import { createRoot } from 'react-dom/client'; 

const root = createRoot(document.getElementById('root'));
root.render(
  <App />,
);


//* method2:
//* remove ReactDOM and add createRoot and change react-dom to react-dom/client.
import ReactDOM from 'react-dom/client';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
//* or const root = ReactDOM.createRoot(document.getElementById('root')); will work too
root.render(
  <App />,
);
