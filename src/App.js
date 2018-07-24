import React, { Component } from 'react';
import { createStore } from 'redux';
import allReducers from '../src/components/reducers/reducers';
import {Provider} from 'react-redux';
import Task from './components/Task';
import Check from './components/Check';
import './App.css';
import WebPage from '../src/components/WebPage';

const store = createStore(allReducers);

class App extends Component {
  state = {
    tasks: []
  };

  

  addTask = (text) => {
    let arr = this.state.tasks;
    arr.push(text);
    this.setState({ tasks: arr });
  }

  deleteBlock = (i) => {
    let arr = this.state.tasks;
    arr.splice(i, 1);
    this.setState({ tasks: arr });
  };

  updateText = (text, i) => {
    let arr = this.state.tasks;
    arr[i] = text;
    this.setState({ tasks: arr });
  };

  eachTask = (item, i) => {
    return (
      <Task key={i} index={i} update={this.updateText} deleteBlock={this.deleteBlock}>
        {item}
      </Task>
    );
  };

  render() {
    return (
      <div className='App'>
        //<button onClick={this.addTask.bind (null, 'Простое задание')} className="btn blue">Новое задание</button>
        //{this.state.tasks.map(this.eachTask)}
        //<Check></Check>
        <Provider store={store}>
            <WebPage/>
        </Provider>
      </div>
    );
  }
}





export default App;
