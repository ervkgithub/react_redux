import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import ProductDetail from './component/ProductDetail';
import ProductList from './component/ProductList';
import Cart from './component/Cart';
import './App.css';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/product:id' element={<ProductDetail />} />
          <Route path='/cart' element={Cart} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;