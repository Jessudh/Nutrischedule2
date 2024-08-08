import React from 'react';
import './App.css';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>NutriSchedule</h1>
        <p>Tu Plan Nutricional Automatizado</p>
        <Register />
      </header>
    </div>
  );
}

export default App;
