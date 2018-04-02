import './App.css';

import React from 'react';
import logo from './img/logo.svg';
import TodoBoardContainer from './containers/TodoBoardContainer';

function App(props) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <TodoBoardContainer/>
      </div>
    );
}

export default App;
