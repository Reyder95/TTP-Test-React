import React from 'react'
import Person from './components/Person';
import './App.css';

class App extends React.Component {

  state = {
    personObjects: [
      {
        name: "Jeff",
        age: 17,
        phone: "112-223-3322"
      },
      {
        name: "Bob",
        age: 22,
        phone: "112-223-3333"
      },
      {
        name: "Tom",
        age: 22,
        phone: "112-223-3333"
      }
    ]
  }

  render() {
    return (
      <div className="App">
        
      {this.state.personObjects.map(item => (
        <Person 
        name={item.name}
        age={item.age}
        phone={item.phone}
        />
      ))}

      </div>
    );
  }
}

export default App;
