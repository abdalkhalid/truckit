
import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToReveal from './ScrollToReveal';

interface IndustryCardProps {
  title: string;
  description: string;
  image: string;
  delay?: number;
  link?: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ 
  title, 
  description, 
  image,
  delay = 0,
  link = "/industries"
}) => {
  return (
    <ScrollToReveal delay={delay}>
      <div className="relative group overflow-hidden rounded-lg h-64">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-primary bg-opacity-60 group-hover:bg-opacity-70 transition-all duration-300"></div>
        </div>
        
        {/* Content */}
        <div className="relative h-full p-6 flex flex-col justify-end text-white z-10">
          <h3 className="text-xl font-bold mb-auto text-white drop-shadow-md">{title}</h3>
          <p className="text-sm text-white text-opacity-90 m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md">{description}</p>
        </div>
      </div>
    </ScrollToReveal>
  );
};

export default IndustryCard;
