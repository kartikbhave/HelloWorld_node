import React, { Component } from 'react';
import logo from './logo.svg';
import ToDoContainer from './containers/todo';
import AllToDo from './component/alltodo'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container mt-5">
        <h2 className="display-4 text-center text-white">Todo App</h2>
        <div className="card mx-auto bg-light text-dark border-light w-50">
          <div className="card-body">
              <AllToDo />
          <ToDoContainer/> 
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
