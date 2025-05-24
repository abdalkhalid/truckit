
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package, Search, Truck } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage
}) => {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset * 0.5); // Parallax effect speed
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with parallax effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform: `translateY(${offset}px)`,
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-80"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 pt-32 pb-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 animate-fade-in relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-accent to-primary">
              {title}
            </span>
            <span className="block h-1 w-24 bg-accent mx-auto mt-6"></span>
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-gray-200 animate-fade-in-up">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12 animate-fade-in-up">
            <Link to="/quote" className="btn bg-accent hover:bg-accent-600 text-gray-900 font-bold px-6 py-4 rounded-md flex items-center justify-center group shadow-lg hover:shadow-accent/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <Truck className="mr-2" size={20} />
              Request a Quote
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={16} />
            </Link>
            <Link to="/services" className="btn bg-primary hover:bg-primary-600 text-white rounded-md px-6 py-4 flex items-center justify-center shadow-lg hover:shadow-primary/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <Package className="mr-2" size={20} />
              Our Services
              <ArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-all" size={16} />
            </Link>
          </div>
          
          {/* Scroll down indicator */}
          <div className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-8 h-12 rounded-full border-2 border-accent flex items-start justify-center">
              <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
