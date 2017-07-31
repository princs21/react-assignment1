import React, {Component} from 'react';
import '../App.css';

import Item from "./Item";
import AddItem from "./AddItem";

class ItemBillboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items
    };

    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.updateStorage = this.updateStorage.bind(this);
  }

  handleAddItem (item) {
    this.setState((prevState, props) => ({
      items: prevState.items.concat(item)
    }), this.updateStorage);
  }

  handleRemoveItem (name) {
    this.setState((prevState, props) => ({
      items: prevState.items.filter((item) => { return item.name !== name})
    }), this.updateStorage);
  }

  updateStorage () {
    sessionStorage.setItem('itemList', JSON.stringify(this.state.items));
  }

  render() {
    const itemNames = [];
    const items = this.state.items.map((item) => {
      itemNames.push(item.name);
      return (
        <Item
          key={item.name}
          name={item.name}
          price={item.price}
          logo={item.logo}
          onRemoveItem={this.handleRemoveItem}
        />
      )
    });

    return (
      <div className="Item-billboard">
        <AddItem items={itemNames} onAddItem={this.handleAddItem} />
        <div className="Item-list">
          {items}
        </div>
      </div>
    );
  }
}

export default ItemBillboard;