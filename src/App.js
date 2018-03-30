import './App.css';

import React from 'react';
import logo from './logo.svg';
import TodoBoard from './todo-board/TodoBoard';

function App(props) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <TodoBoard/>
      </div>
    );
}

export default App;
