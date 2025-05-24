import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from './TestimonialCard';
import ScrollToReveal from './ScrollToReveal';

const testimonials = [
  {
    quote: "TruckIt has transformed our supply chain with their reliable logistics solutions. Their team's expertise and dedication ensure our shipments always arrive on time.",
    name: "Sarah Johnson",
    title: "Supply Chain Director",
    company: "TechGlobal Inc."
  },
  {
    quote: "We've worked with several logistics partners, but none match the efficiency and customer service of TruckIt. They treat our cargo as if it's their own.",
    name: "Michael Chang",
    title: "Operations Manager",
    company: "Retail Solutions Ltd."
  },
  {
    quote: "From air freight to warehousing, TruckIt provides end-to-end logistics that have significantly reduced our delivery times and operational costs.",
    name: "David Miller",
    title: "CEO",
    company: "GreenLeaf Products"
  },
  {
    quote: "Their customs clearance expertise saved us countless hours and prevented delays. TruckIt is now an essential part of our international business strategy.",
    name: "Emily Rodriguez",
    title: "Import Manager",
    company: "Global Trade Partners"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % (testimonials.length - visibleCount + 1)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - visibleCount : prevIndex - 1
    );
  };

  return (
    <ScrollToReveal>
      <div className="relative">
        <div className="flex justify-between items-center mb-8">
          <h2 className="section-title">
            What Our Clients <span className="text-accent">Say</span>
          </h2>
          <div className="flex space-x-2">
            <button 
              onClick={prevSlide} 
              className="p-2 rounded-full bg-accent-100 text-accent hover:bg-accent hover:text-white transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide} 
              className="p-2 rounded-full bg-accent-100 text-accent hover:bg-accent hover:text-white transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              width: `${(testimonials.length * 100) / visibleCount}%`
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="px-3"
                style={{ width: `${100 / testimonials.length}%` }}
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollToReveal>
  );
};

export default Testimonials;
