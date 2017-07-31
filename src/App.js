import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import ItemBillboard from "./components/ItemBillboard";

const ITEMS = [
  {
    name: 'Coffee1',
    price: 123,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/275px-A_small_cup_of_coffee.JPG"
  },
  {
    name: 'Coffee2',
    price: 123,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/275px-A_small_cup_of_coffee.JPG"
  },
  {
    name: 'Coffee3',
    price: 123,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/275px-A_small_cup_of_coffee.JPG"
  },
  {
    name: 'Coffee4',
    price: 123,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/275px-A_small_cup_of_coffee.JPG"
  },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>
        <ItemBillboard items={ITEMS} />
      </div>
    );
  }
}

export default App;
