
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ShipmentTracker from '../components/ShipmentTracker';
import ScrollToReveal from '../components/ScrollToReveal';

const Track = () => {
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
              <h1 className="text-4xl font-bold mb-4">Track Your Shipment</h1>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Enter your tracking number below to get real-time updates on the status and location of your shipment.
              </p>
            </div>
          </ScrollToReveal>
          
          <ScrollToReveal delay={200}>
            <div className="max-w-3xl mx-auto">
              <ShipmentTracker />
            </div>
          </ScrollToReveal>
          
          <ScrollToReveal delay={300}>
            <div className="max-w-3xl mx-auto mt-12">
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Tracking Information</h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">How to Track Your Shipment</h4>
                  <p className="text-gray-600 mb-4">
                    Tracking your shipment is easy. Simply enter your tracking number in the form above and click "Track" to get the most up-to-date information on your shipment's status and location.
                  </p>
                  <p className="text-gray-600">
                    Your tracking number can be found in your shipping confirmation email or on your shipping documents.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Understanding Tracking Statuses</h4>
                  <ul className="space-y-3">
                    <li>
                      <span className="font-medium">In Transit:</span>
                      <p className="text-gray-600 ml-4">Your shipment is on the move and progressing through our logistics network.</p>
                    </li>
                    <li>
                      <span className="font-medium">Processing:</span>
                      <p className="text-gray-600 ml-4">Your shipment is being processed at one of our logistics facilities.</p>
                    </li>
                    <li>
                      <span className="font-medium">Delivered:</span>
                      <p className="text-gray-600 ml-4">Your shipment has been delivered to the destination.</p>
                    </li>
                    <li>
                      <span className="font-medium">Exception:</span>
                      <p className="text-gray-600 ml-4">There's an issue with your shipment that requires attention.</p>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-3">Need Assistance?</h4>
                  <p className="text-gray-600 mb-4">
                    If you need help tracking your shipment or have questions about its status, our customer service team is ready to assist you.
                  </p>
                  <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
                    <a href="/contact" className="btn btn-accent">
                      Contact Support
                    </a>
                    <a href="tel:+12345678901" className="btn bg-white border border-gray-300 text-primary hover:bg-gray-100">
                      Call Us: +1 (234) 567-8901
                    </a>
                  </div>
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

export default Track;
