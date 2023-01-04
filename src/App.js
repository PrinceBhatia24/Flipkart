import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import OffCanvas from './Components/OffCanvas';
import UpperBanner from './Components/UpperBanner';
import Caresoul from './Components/Caresoul';
import Products from './Pages/Products';
import Footer from './Components/Footer';
import MensTopWear from './Pages/MensTopWear'
import MensBottomWear from './Pages/MensBottomWear'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
// import SingleProduct from './Components/SingleProduct';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/Flipkart">
            <Navbar />
            <UpperBanner />
            <Caresoul />
            <OffCanvas />
            <Products />
            <Footer />
          </Route>
          <Route exact path="/MensBottomWear">
            <Navbar />
            <UpperBanner />
            <Caresoul />
            <OffCanvas />
            <MensBottomWear />
            <Footer />
          </Route>
          <Route exact path="/MensTopWear">
            <Navbar />
            <UpperBanner />
            <Caresoul />
            <OffCanvas />
            <MensTopWear />
            <Footer />
          </Route>
          <Route exact path="/Cart">
            <Cart />
          </Route>
          <Route exact path="/Checkout">
            
            <Checkout />
          </Route>
          {/* <Route exact path='/SingleProduct/:id' >
            <SingleProduct />
          </Route> */}
        </Switch>
      </Router>
    </>
  );
}
export default App;

