import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './pages/Game'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Tic Tac Toe w/ React TypeScript</p>
      </header>
      <section>
        <Game />
      </section>
    </div>
  );
}

export default App;
