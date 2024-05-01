import React from 'react';
import NavigationBar from "./components/nav";
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Home />
    </div>
  );
}

export default App;
