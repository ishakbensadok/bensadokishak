import { useContext, useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';
import { LoadingScreenWrapper } from './loading-screen.styles.jsx';
let initailMessage = 'Hi, ❤';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const currentlocation = location.pathname.split('/').at(-1);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [location]);

  useEffect(() => {
    if (!loading) initailMessage = '';
  }, [loading]);

  return (
    <LoadingScreenWrapper className={`${loading ? 'visible' : ''}`}>
      {initailMessage
        ? initailMessage
        : currentlocation
        ? currentlocation
        : 'Home'}
    </LoadingScreenWrapper>
  );
};

export default LoadingScreen;
