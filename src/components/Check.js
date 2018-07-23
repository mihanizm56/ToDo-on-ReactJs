import React, { Component } from 'react';
import './Check.css';

class Check extends React.Component {

  state = {
    checked: false,
  };

  handleCheck = () => {
    this.setState({ checked: !this.state.checked });
  };

  render() {
    let message;
    if (this.state.checked) {
      message = 'выбран';
    } else {
      message = 'не выбран';
    }
    return (
      <div>
        <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked} />
        <p>Чекбокс {message}</p>
      </div>
    );
  }
}

export default Check