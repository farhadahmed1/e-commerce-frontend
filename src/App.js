import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Product from './pages/Product';
import Home from './pages/Home';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Loging from './pages/Loging';
import Register from './pages/Register';



const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Product />} />
        <Route path="loging" element={<Loging />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <Footer />

    </Router>

  )
};

export default App;




