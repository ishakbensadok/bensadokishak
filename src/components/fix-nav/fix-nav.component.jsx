import { useContext, useEffect } from 'react';
import { MenuContext } from '../../contexts/menu.context.jsx';
import { FixMenuContext } from '../../contexts/fix-menu.context.jsx';
import { useLocation } from 'react-router-dom';
import NavigationLinks from '../nav-links/nav-links.component.jsx';
import { FixNavigation, FixMenu } from './fix-nav.styles.jsx';
import Overlay from '../overlay/overlay.component.jsx';

import SocialMedia from '../socialMedia/social-media.component';

const FixNav = () => {
  const location = useLocation();

  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);
  const { isHitTarget, setIsHitTarget, isFixMenuVisible, setIsFixMenuVisible } =
    useContext(FixMenuContext);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);

    if (!isHitTarget) {
      setIsFixMenuVisible(false);
    }
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const target = 100;
    if (scrollPosition > target) {
      setIsHitTarget(true);
    }
    if (scrollPosition < target) {
      setIsHitTarget(false);
    }
  };
  useEffect(() => {
    if (!isMenuOpen) {
      if (isHitTarget) setIsFixMenuVisible(true);
      else {
        setIsFixMenuVisible(false);
      }
    }
  }, [isHitTarget, location]);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <FixNavigation className={`${!isMenuOpen ? 'hidden' : ''}`}>
        <FixMenu
          onClick={handleClick}
          className={`hoverable ${!isFixMenuVisible ? 'hidden' : ''} ${
            isMenuOpen ? 'clicked' : ''
          }`}
        >
          <span>Menu</span>
        </FixMenu>
        <NavigationLinks />
        <SocialMedia />
      </FixNavigation>
      <Overlay />
    </>
  );
};

export default FixNav;
