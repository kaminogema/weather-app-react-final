import React from 'react';

import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
      <footer>
        This project was coded by <a href="https://portfolio-kopetska.netlify.app/" target="_blank">Kseniia Kopetska</a> and is {" "} <a href="https://github.com/kaminogema/weather-app-react-final" target="_blank">
open-sourced on GitHub
      </a>
      </footer>   
      </div>         
    </div>
  );
}

