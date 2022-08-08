import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductsList';
import ProductListCategory from './components/ProductListCategory';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Orders from './components/Orders';
import Login from './components/Login';
import Register from './components/Register';
import TempList from './components/TempList';
import TempList2 from './components/TempList2';
import AddProduct from './components/AddProduct';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<ProductList/>}/>
          <Route path='/category/:category' element={<ProductListCategory/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/product/:id' element={<ProductDetail/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/templist' element={<TempList/>}/>
          <Route path='/templist2' element={<TempList2/>}/>
          <Route path='/addproduct' element={<AddProduct/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
