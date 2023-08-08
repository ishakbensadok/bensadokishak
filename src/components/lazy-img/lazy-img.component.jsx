import React, { useEffect, useRef, useState } from 'react';
import { LazzyImg } from './lazy-img.styles.jsx';

const LazyImage = ({ before, after, alt = '' }) => {
  //   const [loaded, setLoaded] = useState(false);

  console.log('LazyImage');
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0, // Adjust the threshold to control when the image should start loading
    });

    if (imgRef.current) {
      console.log(88);
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const lazyImage = entry.target;
        lazyImage.src = `${after}`;
        lazyImage.addEventListener('load', handleImageLoad);
        observer.unobserve(lazyImage);
      }
    });
  };
  const handleImageLoad = () => {
    imgRef.current.style.filter = 'blur(0px)';
  };

  return <LazzyImg ref={imgRef} src={`${before}`} alt={alt} />;
};

export default LazyImage;
