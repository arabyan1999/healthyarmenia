import React, { Suspense } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/nav";
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
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
            <Route path="products/:id" element={<Product />} />
            <Route path="*" element={<h2>Ресурс не найден</h2>} />
          </Routes>
        </BrowserRouter>
      </div>
    </Suspense>
  );
}

export default App;
