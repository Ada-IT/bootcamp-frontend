import React, { Component } from 'react';

class Modal extends Component {
  render() {
    const className = `modal ${this.props.show ? 'show-modal' : ''}`
    return (
      <div className={className}>
        <div className="modal-content">
          <span className="close-button" onClick={this.props.close}>×</span>
          <h1>{this.props.message}</h1>
        </div>
      </div>
    );
  }
}

export default Modal;
