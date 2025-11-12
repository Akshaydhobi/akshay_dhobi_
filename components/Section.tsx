
import React, { useRef, useEffect, useState } from 'react';

interface SectionProps {
  children: React.ReactNode;
  id: string;
}

const Section: React.FC<SectionProps> = ({ children, id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id={id} 
      ref={sectionRef} 
      className={`py-20 px-6 container mx-auto transition-opacity duration-1000 ease-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {children}
    </section>
  );
};

export default Section;
