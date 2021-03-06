import React, {Component} from 'react';
import {Modal, FormControl, InputGroup, ControlLabel, FormGroup, Button, HelpBlock, ButtonToolbar, Glyphicon} from 'react-bootstrap';

class AddItem extends Component {
  constructor (props) {
    super(props);

    this.state = {
      showModal: false,
      name: '',
      price: 0.00,
      logo: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.validateItemNameUnique = this.validateItemNameUnique.bind(this);
    this.validateItemLogoImage = this.validateItemLogoImage.bind(this);
    this.validateItemLogo = this.validateItemLogo.bind(this);
  }

  close() {
    this.setState({
      showModal: false,
      name: '',
      price: 0.00,
      logo: ''
    });
  }

  open() {
    this.setState({ showModal: true });
  }

  handleSubmit (event) {
    event.preventDefault();
    if (this.validateItemNameUnique() !== 'error' && this.validateItemLogoImage() !== 'error') {
      this.props.onAddItem({
        name: this.state.name,
        price: this.state.price,
        logo: this.state.logo
      });
      this.close()
    }
  }

  handleInputChange (event) {
    const id = event.target.id;

    this.setState({
      [id]: event.target.value
    });
  }

  validateItemNameUnique () {
    if (!this.state.name) return null;
    if (this.props.items.indexOf(this.state.name) > -1) {
      return 'error';
    } else {
      return 'success';
    }
  }

  validateItemLogoImage () {
    let fileExtension = this.state.logo.substr(this.state.logo.lastIndexOf('.') + 1);
    return (['jpg', 'jpeg', 'tiff', 'png', 'gif', 'bmp'].indexOf(fileExtension) > -1);
  }

  validateItemLogo () {
    if (!this.state.logo) return null;
    if (this.validateItemLogoImage()) {
      return 'success'
    } else {
      return 'error'
    }
  }

  render() {
    let nameNotUniqueError = this.validateItemNameUnique() === 'error'
      ? <HelpBlock>Item {this.state.name} already exists</HelpBlock>
      : null;
    let urlNotImageError = this.validateItemLogoImage() === 'error'
      ? <HelpBlock>URL is not directing to correct image format please use 'jpg','jpeg','tiff','png','gif' or 'bmp'</HelpBlock>
      : null;
    return (
      <div className="Item-add">
        <Button className="Item-add-button" onClick={this.open}>
          <Glyphicon glyph="plus"/>
          Add
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            Add new item
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.handleSubmit}>
              <FormGroup
                validationState={this.validateItemNameUnique()}
              >
                <ControlLabel>Item name</ControlLabel>
                <FormControl
                  id="name"
                  type="text"
                  placeholder="Enter item name"
                  onChange={this.handleInputChange}
                  required
                />
                { nameNotUniqueError }
              </FormGroup>
              <FormGroup>
                <ControlLabel>Item price</ControlLabel>
                <InputGroup>
                  <InputGroup.Addon>€</InputGroup.Addon>
                  <FormControl
                    id="price"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="Enter item price"
                    onChange={this.handleInputChange}
                    required
                  />
                </InputGroup>
              </FormGroup>

              <FormGroup
                validationState={this.validateItemLogo()}
              >
                <ControlLabel>Item image URL</ControlLabel>
                <FormControl
                  id="logo"
                  type="url"
                  placeholder="Enter URL for item image"
                  onChange={this.handleInputChange}
                  required
                />
                { urlNotImageError }
              </FormGroup>
              <ButtonToolbar>
                <Button bsStyle="success" type="submit">Add</Button>
                <Button onClick={this.close}>Close</Button>
              </ButtonToolbar>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default AddItem;