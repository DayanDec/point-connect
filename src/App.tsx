import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { About } from './pages/About';
import { Book } from './pages/Book';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<Book />} />
          {/* Redirection pour toutes les routes non définies */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
