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
import Videos from './pages/Videos';
import Results from './pages/results';
// import Feedback from './components/feedback';
// import AddingDataToBack from './components/addingDataToBackAsAnAdmin';
// import AddingDiseaseDataToBack from './components/addingDiseaseDataToBackAsAnAdmin';

function App() {

  return (
    <Suspense fallback="loading">
      <BrowserRouter>
      <div className="App">
        <NavigationBar />
        <div className='content'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="product/:key" element={<Product />} />
              <Route path="products" element={<ProductsPage />} />
              <Route path="diseases" element={<DiseasesPage />} />
              <Route path="disease/:key" element={<DiseasePage />} />
              <Route path="videos" element={<Videos />} />
              <Route path="results" element={<Results />} />
              {/* <Route path="feedback" element={<Feedback />} /> */}
              <Route path="*" element={<NotFound />} />
              {/* <Route path="/add-data" element={<AddingDataToBack />} />
              <Route path="/add-disease" element={<AddingDiseaseDataToBack />} /> */}
            </Routes>
        </div>
      </div>
      <Footer />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
