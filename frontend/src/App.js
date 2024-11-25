// src/App.js
import React from 'react';
import './App.css';
import MapContainer from './MapContainer'; // 引入自定义的 Kepler.gl 地图组件

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>eVTOL Traffic Routing</h1>
      </header>
      <div className="Map-container">
        <MapContainer />
      </div>
    </div>
  );
}

export default App;

