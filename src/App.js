import React, { Suspense } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/nav";
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import ProductsPage from './pages/Products';
import DiseasesPage from './pages/Diseases';
import DiseasePage from './pages/Disease';
import Footer from './components/footer_component';
import NotFound from './pages/Not_found';
import './App.css';

function App() {
  return (
    <Suspense fallback="loading">
      <div className="App">
        <NavigationBar />
        <div className='content'>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="products/:id" element={<Product />} />
              <Route path="products" element={<ProductsPage />} />
              <Route path="diseases" element={<DiseasesPage />} />
              <Route path="diseases/:id" element={<DiseasePage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
