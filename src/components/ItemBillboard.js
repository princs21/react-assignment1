import React, {Component} from 'react';
import Item from "./Item";

class ItemBillboard extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      items: props.items
    };

    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
  }

  handleAddItem (item) {
    //TODO add item to storage

    this.setState((prevState, props) => ({
      items: prevState.items.concat(item)
    }));
  }

  handleRemoveItem (name) {
    //TODO remove item from storage

    console.log('removing ' + JSON.stringify(name));

    this.setState((prevState, props) => ({
      items: prevState.items.filter((item) => { return item.name !== name})
    }));
  }

  render() {
    const items = this.state.items.map((item) => {
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
      <div>
        <div className="Item-add">
          <button onClick={this.handleAddItem}>Add</button>
        </div>
        <div className="Item-list">
          {items}
        </div>
      </div>
    );
  }
}

export default ItemBillboard;