import { useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import ProductCard from './components/ProductCard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Button />} />
        <Route path="/usuarios" element={<ProductCard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
