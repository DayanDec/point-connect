import React, { useState, useEffect } from 'react';
import { Menu, X, QrCode, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <QrCode className="h-8 w-8 text-electric-blue group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-xl font-bold text-deep-black">Point Connect</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <div className="relative group">
              <button className="nav-link flex items-center">
                Products
                <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link to="/products" className="block px-4 py-2 hover:bg-soft-gray transition-colors">Dynamic QR Codes</Link>
                <Link to="/products" className="block px-4 py-2 hover:bg-soft-gray transition-colors">Branded QR Codes</Link>
                <Link to="/products" className="block px-4 py-2 hover:bg-soft-gray transition-colors">Analytics QR Codes</Link>
              </div>
            </div>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/book" className="btn-primary">Book Appointment</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-deep-black hover:text-electric-blue transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-full left-0 w-full bg-white border-t border-soft-gray"
            >
              <div className="flex flex-col space-y-4 p-6">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/products" className="nav-link">Products</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/book" className="btn-primary text-center">Book Appointment</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}