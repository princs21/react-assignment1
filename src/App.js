import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Item from './components/Item';

class App extends Component {
    constructor() {
        super();
        this.state = {
            items: [
                new Item('Coffee1', 123, "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/275px-A_small_cup_of_coffee.JPG").render(),
                new Item('Coffee2', 123, "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/275px-A_small_cup_of_coffee.JPG").render(),
                new Item('Coffee3', 123, "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/275px-A_small_cup_of_coffee.JPG").render(),
                new Item('Coffee4', 123, "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/275px-A_small_cup_of_coffee.JPG").render()
            ]
        }
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          {this.state.items}
      </div>
    );
  }
}

export default App;
