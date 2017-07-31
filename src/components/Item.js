import React, {Component} from 'react';

class Item extends Component {
  constructor (props) {
    super(props);

    this.handleRemoveItem = this.handleRemoveItem.bind(this);
  }

  handleRemoveItem (event) {
    event.preventDefault();
    console.log('removing ' + this.props.name);
    this.props.onRemoveItem(this.props.name);
  }

  render() {
    return (
      <div className="Item col-lg-3 col-md-3 col-sm">
        <button className="Item-delete" onClick={this.handleRemoveItem}>Delete</button>
        <div className="Item-body">
          <img src={this.props.logo} className="Item-logo" alt={this.props.name}/>
          <span className="Item-price">{this.props.price}</span>
        </div>
        <p className="Item-title">
          {this.props.name}
        </p>
      </div>
    );
  }
}

export default Item;