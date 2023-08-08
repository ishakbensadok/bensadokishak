import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { SectionWrapper } from './section.styles.jsx';

const Section = ({ children, className, ...other }) => {
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const myComponentRef = useRef(null);
  useEffect(() => {
    myComponentRef.current.classList.add('hidden');
    scrollToTop();
  }, [location]);

  useEffect(() => {
    const section = myComponentRef.current;

    const revealSection = (entries, observer) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        entry.target.classList.remove('hidden');
        entry.target.classList.add('reveal');
      }
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      rootMargin: '-150px',
      threshold: 0,
    });

    sectionObserver.observe(section);

    return () => {
      sectionObserver.unobserve(section);
    };
  }, [location]);

  return (
    <SectionWrapper ref={myComponentRef} className={`${className}`} {...other}>
      {children}
    </SectionWrapper>
  );
};

export default Section;
