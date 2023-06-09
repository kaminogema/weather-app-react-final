import React from 'react';

import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Warsaw" />
      <footer>
        This project was coded by <a href="https://cv-kopetska.netlify.app/" target="_blank" rel="noreferrer">Kseniia Kopetska</a> and is {" "} <a href="https://github.com/kaminogema/weather-app-react-final" target="_blank" rel="noreferrer">
open-sourced on GitHub
      </a>
      </footer>   
      </div>         
    </div>
  );
}

