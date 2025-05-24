
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollToReveal from './ScrollToReveal';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
  link?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon: Icon,
  delay = 0,
  link = "/services"
}) => {
  return (
    <ScrollToReveal delay={delay}>
      <div className="card group h-full">
        <div className="p-6 flex flex-col h-full">
          <div className="mb-4 p-4 bg-accent-100 inline-block rounded-lg text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
            <Icon size={32} />
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-gray-600 mb-4 flex-grow">{description}</p>
          <Link 
            to={link} 
            className="text-accent font-medium flex items-center hover:underline mt-auto"
          >
            Learn more
            <svg 
              className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </ScrollToReveal>
  );
};

export default ServiceCard;
