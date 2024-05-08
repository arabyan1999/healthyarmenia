import React, { Suspense } from 'react';
import NavigationBar from "./components/nav";
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Suspense fallback="loading">
      <div className="App">
        <NavigationBar />
        <Home />
      </div>
    </Suspense>
  );
}

export default App;
