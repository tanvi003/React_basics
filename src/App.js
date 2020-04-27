import React, { Component } from "react";

import "./App.css";
import Person from "./Person/Person";
class App extends Component {
  state = {
    persons: [
      {
        name: "tanvi",
        age: 28,
      },
      { name: "Aishaa", age: 20 },
    ],
  };
  switchNameHandler = () => {
    console.log("WAS CLICKED");
  };

  render() {
    return (
      <div className="App">
        <h1> HELLO!!!</h1>
        <button onClick={this.switchNameHandler}>Submit</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].name}
        />
      </div>
      //nOT HTML BUT JS COMPILED IN THE FOLLOWING WAY
      // React.createElement('div',null,React.createElement('h1',{className: 'App'},'HII BABY'))
    );
  }
}

export default App;
