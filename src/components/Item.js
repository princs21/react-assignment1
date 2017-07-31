import React, {Component} from 'react';
import {Col} from 'react-bootstrap';

class Item extends Component {
  constructor (props) {
    super(props);

    this.handleRemoveItem = this.handleRemoveItem.bind(this);
  }

  handleRemoveItem (event) {
    event.preventDefault();
    this.props.onRemoveItem(this.props.name);
  }

  render() {
    return (
      <Col sm={6} md={3} lg={3} className="Item">
        <button className="Item-delete close" onClick={this.handleRemoveItem}>
          <span aria-hidden>x</span>
          <span className="sr-only">Delete</span>
        </button>
        <div className="Item-body">
          <img src={this.props.logo} className="Item-logo" alt={this.props.name}/>
          <span className="Item-price">{this.props.price}</span>
        </div>
        <p className="Item-title">
          {this.props.name}
        </p>
      </Col>
    );
  }
}

export default Item;