import React from 'react';
import './App.css';
import Menu from './components/menu';

function App() {
  return (
    <div className="App">
      <Menu />
      <img src={`${process.env.PUBLIC_URL}/budget-beaver.jpg`} alt="Beave" />;
    </div>
  );
}

export default App;
