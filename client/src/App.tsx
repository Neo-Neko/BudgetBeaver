import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import LoginIcon from '@material-ui/icons/AccountCircle';

function App() {
  return (
    <div className="App">
      <Button startIcon={<LoginIcon />} color="primary" variant="contained">
        Login
      </Button>
    </div>
  );
}

export default App;
