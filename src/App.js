import React from 'react';
import {


  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

import Home from './Component/Home/Home/Home';
import Header from './Component/Shared/Header/Header';
import Footer from './Component/Shared/Footer/Footer';
import Loging from './Component/Loging/Loging/Loging';
import Products from './Component/Home/Products/Products';
import Shopping from './Component/Home/Shopping/Shopping';


const App = () => {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="loging" element={<Loging />} />
        <Route path="shopping" element={<Shopping />} />
      </Routes>
      <Footer />

    </Router>

  )
};

export default App;




