import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <img 
                src="/truckit-logo.png" 
                alt="Truckit Logo" 
                className="h-12 w-auto mr-2" // Increased from h-8 to h-12
              />
            </h3>
            <p className="mb-4 text-gray-400">
              Specialized logistics solutions for all your transportation needs. Your trusted partner for efficient and reliable deliveries.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-primary transition-colors">News & Updates</Link></li>
              <li><Link to="/quote" className="text-gray-400 hover:text-primary transition-colors">Get a Quote</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors">Freight Transport</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors">Express Delivery</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors">Local Shipping</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors">International Logistics</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors">Warehousing</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors">Supply Chain Solutions</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-accent" />
                <span className="text-gray-400">123 Logistics Ave, Suite 100, Transport City, TC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-accent" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-primary transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-accent" />
                <a href="mailto:info@truckit.com" className="text-gray-400 hover:text-primary transition-colors">info@truckit.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="text-center text-gray-500">
          <p>&copy; {currentYear} TruckIt Logistics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
