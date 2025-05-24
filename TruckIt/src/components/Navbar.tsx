import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navbarClass = scrolled 
    ? 'navbar navbar-scrolled text-white' 
    : 'navbar navbar-transparent text-white';

  return (
    <nav className={navbarClass}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/truckit-logo.png" 
              alt="Truckit Logo" 
              className="h-16 w-auto" // Increased from h-10 to h-16
            />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="font-medium hover:text-accent transition-colors duration-300">HOME</Link>
            <Link to="/about" className="font-medium hover:text-accent transition-colors duration-300">ABOUT US</Link>
            <Link to="/services" className="font-medium hover:text-accent transition-colors duration-300">SERVICES</Link>
            <Link to="/contact" className="font-medium hover:text-accent transition-colors duration-300">CONTACT US</Link>
            <Link to="/blog" className="font-medium hover:text-accent transition-colors duration-300">BLOG</Link>
          </div>

          {/* Quote button for desktop */}
          <div className="hidden md:block">
            <Link to="/quote" className="btn bg-accent hover:bg-accent-600 text-gray-900 font-bold px-5 py-2 rounded-md shadow-lg hover:shadow-accent/20 hover:shadow-xl transition-all duration-300 group flex items-center">
              Request a Quote
              <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-2xl focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-gray-800 rounded-lg shadow-lg p-4 absolute left-0 right-0 mx-4 z-50 border border-gray-700">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-white font-medium hover:text-accent transition-colors duration-300 p-2">HOME</Link>
              <Link to="/about" className="text-white font-medium hover:text-accent transition-colors duration-300 p-2">ABOUT US</Link>
              <Link to="/services" className="text-white font-medium hover:text-accent transition-colors duration-300 p-2">SERVICES</Link>
              <Link to="/contact" className="text-white font-medium hover:text-accent transition-colors duration-300 p-2">CONTACT US</Link>
              <Link to="/blog" className="text-white font-medium hover:text-accent transition-colors duration-300 p-2">BLOG</Link>
              <Link to="/quote" className="btn bg-accent text-gray-900 font-bold text-center p-3 rounded-md shadow-md flex items-center justify-center">
                Request a Quote
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
