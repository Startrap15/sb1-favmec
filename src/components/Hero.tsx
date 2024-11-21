import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero = () => {
  const handleConsultation = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSuccessStories = () => {
    const trustSection = document.getElementById('trust');
    if (trustSection) {
      trustSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative bg-gradient-to-br from-primary to-primary-dark h-[500px] flex items-start pt-32">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
            Expert Grant Writing & Government Contract Solutions
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 text-gray-100">
            Professional grant writing and government proposal services backed by decades of experience
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={handleConsultation}
              className="btn bg-white text-primary hover:bg-gray-100 group"
            >
              Start Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={handleSuccessStories}
              className="btn-secondary group"
            >
              View Success Stories
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;