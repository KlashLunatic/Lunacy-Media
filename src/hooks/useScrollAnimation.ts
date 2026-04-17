import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const fadeUpElements = document.querySelectorAll('.fade-up');
    fadeUpElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      fadeUpElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);
};
