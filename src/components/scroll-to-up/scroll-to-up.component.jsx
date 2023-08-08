import React, { useState, useEffect } from 'react';
import { ScrollToTopWrapper } from './scroll-to-up.styles.jsx';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ScrollToTopWrapper
      id='up'
      className={`hoverable ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    />
  );
};

export default ScrollToTop;
