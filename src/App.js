import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Header from './components/Header';
import './index.css';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router basename="/lenamarfeo">
      <Header />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
