import React from 'react';

import './Person.css';
//This is a presentational component
const person = (props) => {
  //Math.floor(Math.random() * 38)  returns a random number up to 38

  return (
    <div className="Person">
      <h3 onClick={props.click}>I'm {props.name} and I am {props.age} years old</h3>
      <p>{props.children}</p>
      <input type="text" 
      //Two way binding
      onChange={props.changed} value={props.name}/>
    </div>
  )
};

export default person;