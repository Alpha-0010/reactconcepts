import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const user={
  firstName: 'John',
  lastName: 'Doe'
};
const element= (
  <div>
    <h1>
      Hello, {user.firstName} {user.lastName}
    </h1>
    <h2>
      Welcome to React!
    </h2>
  </div>
);




ReactDOM.render(
  <React.StrictMode>
    <App authorized={true} login={"Alpha-0010"} />
  </React.StrictMode>,
  // React.createElement("h1",{style: {color: "blue"}},"Heyy Everyone!!"),// The first argument is the tag
  // // the second is the property of the tag and thrid argument is the message.

  /*
  
  JSX Stands for javascript as xml. JSX allows us to write tags directly into javascript.

  */ 
  // element,
  document.getElementById('root')
);
