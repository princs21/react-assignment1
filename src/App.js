import React, {Component} from 'react';
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
          <h2>Coffee Billboard</h2>
        </div>
        <ItemBillboard items={items} />
      </div>
    );
  }
}

export default App;
