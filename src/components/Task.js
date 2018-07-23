import React, { Component } from 'react';
import './Task.css';

class Task extends React.Component {

  state = {
    edit: false,
  };

  edit = () => {
    this.setState({ edit: true });
  };

  remove = () => {
    this.props.deleteBlock(this.props.index)
  };

  save = () => {
    this.props.update(this.refs.newTxt.value, this.props.index)
    this.setState({ edit: false })
  };

  rendNorm = () => {
    return (
      <div className="box">
        <div className="text">{this.props.children}</div>
        <button onClick={this.edit} className="btn light">Редактировать</button>
        <button onClick={this.remove} className="btn red">Удалить</button>
      </div>
    );
  };

  rendEdit = () => {
    return (
      <div className="box">
        <textarea className="text" ref="newTxt" defaultValue={this.props.children}></textarea>
        <button onClick={this.save} className="btn success">Сохранить</button>
      </div>
    );
  };

  render() {
    if (this.state.edit) {
      return this.rendEdit();
    } else {
      return this.rendNorm();
    }
  }
}







export default Task