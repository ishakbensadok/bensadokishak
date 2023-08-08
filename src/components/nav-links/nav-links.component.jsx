import { useContext } from 'react';

import NavigationLink from '../nav-link/nav-link.component';

import { MenuContext } from '../../contexts/menu.context';
import {
  NavigationContext,
  NAV_LINKS_TITELS,
} from '../../contexts/navigation.context';

import { NavLinks } from './nav-links.styles.jsx';
const NavigationLinks = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);

  const { navLinksState } = useContext(NavigationContext);

  const handleClick = () => {
    // TODO //

    setIsMenuOpen(false);

    // const target = event.target.closest(`a`).href.split('/').at(-1);
    // setNavLinksState(getNavLinksState(target));
  };

  return (
    <NavLinks className={`${isMenuOpen ? 'hidden' : ''}`}>
      {Object.keys(NAV_LINKS_TITELS).map((title, i) => (
        <NavigationLink
          onClick={handleClick}
          key={i}
          to={title === 'Home' ? '/' : title}
          className={`${navLinksState[i]?.isClicked ? 'clicked' : ''}`}
        >
          {title}
        </NavigationLink>
      ))}
    </NavLinks>
  );
};

export default NavigationLinks;
