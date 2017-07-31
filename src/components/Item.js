import React, {Component} from 'react';
import {Col} from 'react-bootstrap';

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
      <Col sm={6} md={3} lg={3} className="Item">
        <button className="Item-delete" onClick={this.handleRemoveItem}>Delete</button>
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