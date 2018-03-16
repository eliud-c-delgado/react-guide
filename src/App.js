import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

//Container element. Can change state, contains other stateless components

class App extends Component {
  state = {
    persons: [
      { name: "Arya Stark", age: 16 },
      { name: "Daenerys", age: 28 },
      { name: "Jon Snow", age: 24 }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked');
    //Don't this.state.persons[0].name = "A girl has no name";
    this.setState({persons: [
      { name: newName, age: 16 },
      { name: "the Mother of Dragons", age: 28 },
      { name: "The King in the North", age: 24 }
    ]})
  }

  //Two way binding
  nameChangeHandler = (event) => {
    this.setState( {
      persons: [
        { name: "Arya Stark", age: 16 },
        { name: event.target.value, age: 28 },
        { name: "Jon Snow", age: 24 }
      ]
    })
  }

  //Toggles between showing or not showing Persons
  togglePersonsHandler = () => {
    const doesShow= this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'ghostwhite',
      height: '100vh',
      margin: '0',
      padding: '1em'
    }

    return (
      <div className="App" style={style}>
        <h1>Hi, I'm a Game of Thrones App</h1>
        <h2>made with React</h2>
        <p>Valar Morghulis</p>
        <button //Passes the name as new argument, it doesn't execute the fuction right away
          onClick={ () => this.togglePersonsHandler()}>show / hide names
        </button>
          {/*
          {
          this.state.showPersons ?
          //same as this.state.showPersons === true */}
          <div>
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}
              //Passes the name as new argument too. This is best practice
              click={this.switchNameHandler.bind(this, 'Arya!')}>
              My hobbies: changing faces, plan revange, check my list
            </Person>
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              //Two way binding
              changed={ this.nameChangeHandler}
              />
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age}/>
          </div> 
          {/*else 
          :null
        }*/}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, null, React.createElement('h1', 'null', "I'm a React App!"));
  }
}

export default App;
