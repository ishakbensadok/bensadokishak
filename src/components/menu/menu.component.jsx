import { useContext } from 'react';

import { MenuContext } from '../../contexts/menu.context';
import { FixMenuContext } from '../../contexts/fix-menu.context';
import { MenuIcon } from './menu.styles.jsx';

const Menu = () => {
  const { setIsMenuOpen, isMenuOpen } = useContext(MenuContext);
  const { setIsFixMenuVisible } = useContext(FixMenuContext);
  const handleClick = (event) => {
    event.preventDefault();

    setIsMenuOpen(!isMenuOpen);
    setIsFixMenuVisible(true);
  };

  return (
    <MenuIcon onClick={handleClick} className={`${isMenuOpen ? 'extend' : ''}`}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </MenuIcon>
  );
};

export default Menu;
