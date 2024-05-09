import React, { Suspense } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/nav";
import Home from './pages/Home';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Suspense fallback="loading">
      <div className="App">
        <NavigationBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Suspense>
  );
}

export default App;
