import React, { Component } from 'react';

class Item extends Component {
    constructor (name, price, logo) {
        super();
        this.state = {
            name: name,
            price: price,
            logo: logo
        }
    }

    render() {
        return (
            <div className="Item col-xs-3">
                <button className="Item-delete">Delete</button>
                <div className="Item-body">
                    <img src={this.state.logo} className="Item-logo" alt={this.state.name} />
                    <span className="Item-price">{this.state.price}</span>
                </div>
                <p className="Item-title">
                    {this.state.name}
                </p>
            </div>
        );
    }
}

export default Item;