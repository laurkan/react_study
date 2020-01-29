import React from 'react';
import logo from './logo.svg';
import './App.css';

let i=0
const App = () => {
  return (
    <div className="App">
      <ul>
        <li>{++i}. Элемент 1</li>
        <li>{++i}. Элемент 2</li>
      </ul>
      <img src={logo} />
    </div>
  );
}

export default App;
