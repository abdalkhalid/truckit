
import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  delay?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  end, 
  duration = 2000,
  suffix = '',
  prefix = '',
  delay = 0
}) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const countStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !countStarted.current) {
          countStarted.current = true;
          
          setTimeout(() => {
            let startTime: number;
            let animationFrameId: number;
            
            const animate = (timestamp: number) => {
              if (!startTime) startTime = timestamp;
              const progress = timestamp - startTime;
              const progressPercent = Math.min(progress / duration, 1);
              
              setCount(Math.floor(progressPercent * end));
              
              if (progressPercent < 1) {
                animationFrameId = requestAnimationFrame(animate);
              }
            };
            
            animationFrameId = requestAnimationFrame(animate);
            
            return () => {
              cancelAnimationFrame(animationFrameId);
            };
          }, delay);
        }
      },
      { threshold: 0.1 }
    );
    
    const currentRef = counterRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [end, duration, delay]);

  return (
    <div ref={counterRef} className="text-3xl md:text-4xl font-bold text-accent">
      {prefix}{count}{suffix}
    </div>
  );
};

export default AnimatedCounter;
