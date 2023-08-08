import { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const NAV_LINKS_TITELS = {
  Home: 'Home',
  Projects: 'Projects',
  About: 'About',
  Contact: 'Contact',
};

const getNavLinksState = (currLocation) => {
  //TODO

  if (currLocation === '') currLocation = 'Home';

  return Object.keys(NAV_LINKS_TITELS).map((title) => {
    return title === currLocation.split('/')[0]
      ? { isClicked: true }
      : { isClicked: false };
  });
};

export const NavigationContext = createContext({
  navLinksState: [],
});

export const NavigationProvider = ({ children }) => {
  console.log('Navigation context');
  const location = useLocation();
  const currentlocation = location.pathname.replace('/', '');

  const [navLinksState, setNavLinksState] = useState(
    getNavLinksState(currentlocation)
  );

  useEffect(() => {
    console.log('Navigation context useEffect Fired');

    setNavLinksState(getNavLinksState(currentlocation));
  }, [location]);

  const value = { navLinksState, setNavLinksState, getNavLinksState };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};
