import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/Navbar';
import Footer from './components/Footer';
import BestSellers from './pages/BestSellers';
import GiftIdeas from './pages/GiftIdeas';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<BestSellers />} />
        <Route path='/OurTeam' element={<GiftIdeas />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
