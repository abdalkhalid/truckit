import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import ScrollToReveal from '../components/ScrollToReveal';
import HeroSection from '../components/HeroSection';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const officeLocations = [
    {
      name: "Global Headquarters",
      address: "1234 Logistics Way, Shipping District",
      city: "Dallas, TX 75001",
      country: "USA",
      phone: "+1 (234) 567-8901",
      email: "info@truckit.com",
      hours: "Monday - Friday: 8AM - 6PM"
    },
    {
      name: "European Office",
      address: "78 Freight Boulevard",
      city: "London, EC2A 4NE",
      country: "United Kingdom",
      phone: "+44 20 1234 5678",
      email: "europe@truckit.com",
      hours: "Monday - Friday: 9AM - 5PM"
    },
    {
      name: "Asia-Pacific Office",
      address: "123 Shipping Tower, Marina Bay",
      city: "Singapore, 018956",
      country: "Singapore",
      phone: "+65 6123 4567",
      email: "apac@truckit.com",
      hours: "Monday - Friday: 9AM - 5:30PM"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <HeroSection 
      title="Contact Us" 
      subtitle="Get in touch with our logistics experts for personalized support and solutions"
      backgroundImage="/contact.png"
      />
      
      <div className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <ScrollToReveal>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
          Have questions or need assistance? We're here to help! Reach out to our team using the contact form below or visit one of our offices.
          </p>
        </div>
        </ScrollToReveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <ScrollToReveal delay={100} className="lg:col-span-2">
          <ContactForm />
        </ScrollToReveal>
        
        <ScrollToReveal delay={200}>
          <div className="space-y-6">
          {officeLocations.map((office, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-3">{office.name}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
              <MapPin className="text-accent mr-2 mt-1" size={18} />
              <div>
                <p>{office.address}</p>
                <p>{office.city}</p>
                <p>{office.country}</p>
              </div>
              </li>
              <li className="flex items-center">
              <Phone className="text-accent mr-2" size={18} />
              <a href={`tel:${office.phone}`} className="hover:text-accent transition-colors">{office.phone}</a>
              </li>
              <li className="flex items-center">
              <Mail className="text-accent mr-2" size={18} />
              <a href={`mailto:${office.email}`} className="hover:text-accent transition-colors">{office.email}</a>
              </li>
              <li className="flex items-center">
              <Clock className="text-accent mr-2" size={18} />
              <span>{office.hours}</span>
              </li>
            </ul>
            </div>
          ))}
          </div>
        </ScrollToReveal>
        </div>
        
        <ScrollToReveal delay={300}>
        <div className="mt-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold mb-6 text-primary">Our Global Presence</h3>
          <div className="h-96 w-full">
            <iframe
            title="TruckIt Global Locations"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.3700909684444!2d67.0168497!3d24.851206499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e0bd8a0dd2f%3A0x7e44b5df9175804b!2sSaima%20Trade%20Tower!5e0!3m2!1sen!2s!4v1747739439729!5m2!1sen!2s"
            allowFullScreen
            loading="lazy"
            className="rounded-lg"
            />
          </div>
          </div>
        </div>
        </ScrollToReveal>
      </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
