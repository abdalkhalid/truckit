
import React, { useEffect, useRef, ReactNode } from 'react';

interface ScrollToRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  animation?: 'fade' | 'slide-up' | 'slide-right' | 'slide-left' | 'zoom' | 'flip';
  duration?: number;
  threshold?: number;
}

const ScrollToReveal: React.FC<ScrollToRevealProps> = ({ 
  children, 
  delay = 0,
  className = "",
  animation = 'fade',
  duration = 1000,
  threshold = 0.1
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getAnimationClass = () => {
      switch (animation) {
        case 'slide-up':
          return 'reveal-slide-up';
        case 'slide-right':
          return 'reveal-slide-right';
        case 'slide-left':
          return 'reveal-slide-left';
        case 'zoom':
          return 'reveal-zoom';
        case 'flip':
          return 'reveal-flip';
        case 'fade':
        default:
          return 'reveal';
      }
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('active');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold });

    const currentElement = elementRef.current;
    if (currentElement) {
      // Set custom duration via style
      currentElement.style.transitionDuration = `${duration}ms`;
      
      // Add the appropriate animation class
      currentElement.classList.add(getAnimationClass());
      
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [delay, animation, duration, threshold]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollToReveal;
