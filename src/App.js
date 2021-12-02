
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home/Home';
import TopBanner from './Component/Home/TopBanner/TopBanner';
import Header from './Component/Shared/Header/Header';
import Footer from './Component/Shared/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="banner/" element={<TopBanner />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
