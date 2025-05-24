
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollToReveal from './ScrollToReveal';

const CtaBanner: React.FC = () => {
  return (
    <ScrollToReveal>
      <div className="bg-gray-800 py-16 sm:py-20 relative overflow-hidden">
        {/* Enhanced background pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-primary opacity-20"></div>
          <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-primary opacity-20"></div>
          <div className="absolute left-1/3 top-1/4 w-48 h-48 rounded-full bg-primary-600 opacity-10"></div>
          <div className="absolute right-1/4 bottom-1/3 w-36 h-36 rounded-full bg-primary-600 opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-xl">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Ready for specialized logistics solutions?</h2>
              <p className="text-gray-300 text-lg max-w-xl">Get a personalized quote for your shipping needs across Central Asia and the Middle East today.</p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/quote" 
                className="btn bg-accent hover:bg-accent-600 text-gray-900 px-8 py-4 rounded-md font-bold transition-colors flex items-center justify-center group"
              >
                Request a Quote
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                to="/contact" 
                className="btn border-2 border-primary text-white hover:bg-primary hover:text-white px-8 py-4 rounded-md font-medium transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ScrollToReveal>
  );
};

export default CtaBanner;
