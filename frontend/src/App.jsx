import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Shop from './pages/product details';
import Deals from './pages/history';
import About from './pages/About';
import Contact from './pages/Contact';
import Registration from './pages/signupLogin';

function App() {
  const pathsWithNavbar = ['/home','/Home','/shop','/Shop','/deals','/Deals','/about','/About'];

  return (
    <Router>
      {pathsWithNavbar.includes(location.pathname) && <Navbar className="fixed"/>}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;
