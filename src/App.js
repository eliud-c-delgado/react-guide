import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

//Container element. Can change state, contains other stateless components

class App extends Component {
  state = {
    persons: [
      { id: 101, name: "Arya Stark", age: 16 },
      { id: 102, name: "Daenerys", age: 28 },
      { id: 103, name: "Jon Snow", age: 24 }
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    //Access all persons in the state
    //const persons = this.state.persons.slice();  Creates a new array with the info from the state array, thus avoiding impurity
    const persons = [...this.state.persons]; //Same as previous but using ES6
    //Removes one elemenent from the array
    persons.splice(personIndex, 1);
    //Sets state to the new updated reference array
    this.setState({persons: persons});
  }

  //Two way binding
  nameChangeHandler = (event, id) => {
    
    //Pointing handler to element ID
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
   
    //Using spread operator to set the list to a new object, thus preventing state change
    const person = {
      ...this.state.persons[personIndex]
    };
   
    //Assigning the state to a copy of the original state array
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState( {persons: persons} );
  }

  //Toggles between showing or not showing Persons
  togglePersonsHandler = () => {
    const doesShow= this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'rgb(67, 36, 67)'
    }

    //Refactoring conditional into plain JS (JSX onlo for what will be conditionally rendered)
    
    let persons = null;

    if (this.state.showPersons) {
      //Refactoring hardocoded data into a map function to create each person card
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
                    click={() => this.deletePersonHandler(index)}
                    name={person.name}
                    age={person.age} 
                    key={person.id}
                    changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}
       </div> 
      );

      style.backgroundColor = 'rgb(150, 21, 42)';
    }

    return (
      <div className="App">
        <h1>Hi, I'm a Game of Thrones web-app</h1>
        <h2>Valar Morghulis</h2>
        <p>Click on your favorite character</p>
        {/*Passes the name as new argument, 
        it doesn't execute the fuction right away*/}
        <button style={style} onClick={ () => this.togglePersonsHandler()}>show / hide</button>
         {persons}
        <h3>made by Eliud C. Delgado with &hearts; & React</h3>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, null, React.createElement('h1', 'null', "I'm a React App!"));
  }
}

export default App;
