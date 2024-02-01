import React from "react";
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import About from "./components/About";
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import MusicAlbums from "./components/MusicAlbums";
import CartContextStore from "./utils/CartContextStore";

function Example() {
  return (
    <Router>
      <div>
        <CartContextStore>
          <Header />
          <Banner />
          <Routes>
             <Route path="/about" element={<About/>} />
            <Route path="/store" element={<MusicAlbums/>} />
            <Route exact path="/" element={<Home/>} />
          </Routes>
           
          <Cart />
          <Footer />
         
        </CartContextStore>
      </div>
    </Router>
  );
}

export default Example;
