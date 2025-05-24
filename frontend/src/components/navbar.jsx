import React, { useState, useEffect } from 'react';
import { HiMenu, HiX, HiShoppingCart, HiSearch, HiUserCircle } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../assets/campuslinkLogo.png';
// import videoBg from '../assets/4k_5.mp4';
import UserDropdown from './userDropdown';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    hidden: { x: '100%' },
    visible: { x: 0 },
  };

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      alert(`Searching for: ${searchTerm}`);
    }
  };

  return (
    <motion.header
      className={`relative w-full fixed top-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled ? 'h-16' : 'h-20'
      } overflow-hidden`}
      initial={{ height: '5rem' }}
      animate={{ height: scrolled ? '4rem' : '5rem' }}
      transition={{ duration: 0.4 }}
    >
      {/* Video Background - no cropping */}
      <div className="absolute inset-0 z-[-1]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full"
          style={{ objectFit: 'fill' }}
        >
          <source src={videoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <nav className="relative container mx-auto flex items-center justify-between px-6 h-full">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [1, 0.8, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
          className="text-2xl font-bold text-white cursor-pointer"
          onClick={handleAddToCart}
        >
          <Link to="/home" className="flex items-center">
            <img src={logo} alt="logo" width="30px" />
            <span className="ml-1">
              ampus<span className="text-yellow-300">Link</span>
            </span>
          </Link>
        </motion.div>

        <form onSubmit={handleSearch} className="hidden md:flex flex-grow justify-center px-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for products..."
            className="w-full max-w-md px-4 py-1 rounded-md focus:outline-none text-sm bg-white text-black"
          />
        </form>

        <div className="flex items-center space-x-4 relative">
          <HiSearch className="md:hidden w-6 h-6 text-white hover:text-yellow-300 cursor-pointer transition-colors" />

          <div className="relative">
            <HiShoppingCart className="w-6 h-6 text-white hover:text-yellow-300 cursor-pointer transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-300 text-black text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold animate-bounce">
                {cartCount}
              </span>
            )}
          </div>

        <UserDropdown/>

          <button className="md:hidden focus:outline-none" onClick={() => setMobileOpen(true)}>
            <HiMenu className="w-8 h-8 text-white" />
          </button>
        </div>

        <ul className="hidden md:flex space-x-8 items-center ml-6">
          {['Home', 'Shop', 'Deals', 'About', 'Contact'].map((link) => (
            <motion.li key={link} whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
              <Link to={`/${link.toLowerCase()}`} className="relative group text-white hover:text-yellow-300 transition-colors">
                {link}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all group-hover:w-full"></span>
              </Link>
            </motion.li>
          ))}
        </ul>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-0 bg-white z-50 flex flex-col p-6 md:hidden"
            >
              <div className="flex justify-between items-center mb-8">
                <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center">
                  <img src={logo} alt="logo" width="30px" />
                  <span className="ml-1 text-indigo-600 font-bold text-xl">
                    ampus<span className="text-yellow-400">Link</span>
                  </span>
                </Link>
                <button onClick={() => setMobileOpen(false)} className="focus:outline-none">
                  <HiX className="w-8 h-8 text-gray-700" />
                </button>
              </div>
              <ul className="space-y-6">
                {['Home', 'Shop', 'Deals', 'About', 'Contact'].map((link) => (
                  <li key={link}>
                    <Link to={`/${link.toLowerCase()}`} className="text-xl font-medium text-gray-800 hover:text-indigo-600 transition-colors" onClick={() => setMobileOpen(false)}>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-auto space-y-2">
                <Link to="/signin">
                  <button className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                    Sign In
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="w-full py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors">
                    Sign Up
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

export default Navbar;
