import React from "react";
import Header from "./components/header/Header";

import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CarProvider } from "./context/carContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <CarProvider>
      <NavBar />
      <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a KALEM'}/>}/>
          <Route path='/products/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path='*' element={<h2>Error 404, Volvamos...</h2>}/>
      </Routes>      
      <Footer/>
      </CarProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
