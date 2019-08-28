import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoList } from './TodoList';

class App extends Component {

  constructor(props){
    super(props);
    const todosExample = [{text:"Learn React", priority:5, dueDate: new Date() },
          {text:"Learn about APIs", priority:4, dueDate: new Date(2018,8,30) },
          {text:"write TODO App", priority:3, dueDate: new Date(2018,9,30) }];
  }

  
  render() {
    
          
    return (
      <div className="App">
        <div className="App-header">
          <h1>TODO React App</h1>
          
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
           <TodoList todos = {this.todosExample} ></TodoList>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
      </div>
    );
  }
}

export default App;
