import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import Services from './components/Services';
import Trust from './components/Trust';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Metrics />
      <Services />
      <Trust />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;