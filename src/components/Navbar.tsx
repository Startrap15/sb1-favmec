import React, { useState } from 'react';
import { Menu, X, Award } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleConsultation = () => {
    scrollToSection('contact');
  };

  const handleLogin = () => {
    alert('Login functionality coming soon!');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      {/* Top Banner */}
      <div className="bg-primary-dark text-white py-2">
        <div className="container flex items-center justify-center text-sm">
          <Award className="w-4 h-4 mr-2" />
          <span>Google 5.0 Rating - Trusted by 500+ Organizations</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white">
        <div className="container">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <button 
                onClick={() => scrollToSection('hero')} 
                className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors"
              >
                GrantPro
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
              <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
              <button onClick={() => scrollToSection('resources')} className="nav-link">Resources</button>
              <button onClick={() => scrollToSection('blog')} className="nav-link">Blog</button>
              <button onClick={() => scrollToSection('pricing')} className="nav-link">Pricing</button>
              <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
              <button onClick={handleLogin} className="nav-link">Login</button>
              <button onClick={handleConsultation} className="btn-primary">Free Consultation</button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-500 hover:text-primary"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 nav-link">Services</button>
                <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 nav-link">About</button>
                <button onClick={() => scrollToSection('resources')} className="block w-full text-left px-3 py-2 nav-link">Resources</button>
                <button onClick={() => scrollToSection('blog')} className="block w-full text-left px-3 py-2 nav-link">Blog</button>
                <button onClick={() => scrollToSection('pricing')} className="block w-full text-left px-3 py-2 nav-link">Pricing</button>
                <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 nav-link">Contact</button>
                <button onClick={handleLogin} className="block w-full text-left px-3 py-2 nav-link">Login</button>
                <button onClick={handleConsultation} className="w-full btn-primary mt-4">Free Consultation</button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;