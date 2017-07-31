import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import ItemBillboard from "./components/ItemBillboard";

try{
  var items = JSON.parse(sessionStorage.getItem('itemList')) || [];
} catch (exc) {
  items = [];
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>
        <ItemBillboard items={items} />
      </div>
    );
  }
}

export default App;
