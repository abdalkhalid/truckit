import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import QuoteForm from '../components/QuoteForm';
import ScrollToReveal from '../components/ScrollToReveal';

const Quote = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollToReveal>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Request a Quote</h1>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Fill out the form below to request a personalized quote for your logistics needs. 
                Our team will provide a detailed proposal tailored to your specific requirements.
              </p>
            </div>
          </ScrollToReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <ScrollToReveal delay={100} className="lg:col-span-2">
              <QuoteForm />
            </ScrollToReveal>
            
            <ScrollToReveal delay={200}>
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Competitive rates for all shipping modes</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Fast and detailed quote responses</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Transparent pricing with no hidden fees</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Personalized service and solutions</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Quick Contact</h3>
                  <p className="text-gray-600 mb-4">
                    Need an immediate response? Contact our sales team directly:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a href="tel:+12345678901" className="hover:text-accent transition-colors">+1 (234) 567-8901</a>
                    </div>
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href="mailto:sales@truckit.com" className="hover:text-accent transition-colors">sales@truckit.com</a>
                    </div>
                  </div>
                </div>
                
                <div className="bg-accent text-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Get a Fast Quote</h3>
                  <p className="mb-4">
                    We'll respond to your quote request within 24 hours with a detailed proposal tailored to your needs.
                  </p>
                  <p className="font-semibold">
                    Our sales team is available Monday-Friday, 8am-6pm EST.
                  </p>
                </div>
              </div>
            </ScrollToReveal>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Quote;
