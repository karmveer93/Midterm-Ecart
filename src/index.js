import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Cart from '../src/page/cart/Cart';
import Home from './page/home/Home'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './component/Register';
import Login from './component/Login';
import { Provider } from 'react-redux';
import store from './store';
import Men from './page/men/men';
import Women from './page/women/women';
import Jewelery from './page/Jewelery/jewelery';
import Electronics from './page/Electronics/electronics';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
  
    <BrowserRouter>
    
    <Routes>
   
      <Route path='/' element={<Home />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/men' element={<Men/>}></Route>
      <Route path='/women' element={<Women/>}></Route>
      <Route path='/jewelery' element={<Jewelery/>}></Route>
      <Route path='/electronic' element={<Electronics/>}></Route>
      
   </Routes>
      </BrowserRouter>
    
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
