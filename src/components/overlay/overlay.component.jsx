import { useContext } from 'react';
import { MenuContext } from '../../contexts/menu.context';
import { OverlayWrapper } from './overlay.styles.jsx';
import { FixMenuContext } from '../../contexts/fix-menu.context.jsx';

const Overlay = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);
  const { isHitTarget, setIsFixMenuVisible } = useContext(FixMenuContext);
  const handleClick = () => {
    setIsMenuOpen(false);
    if (!isHitTarget) setIsFixMenuVisible(false);
  };
  return (
    <OverlayWrapper
      onClick={handleClick}
      className={`${!isMenuOpen ? 'hidden' : ''}`}
    ></OverlayWrapper>
  );
};

export default Overlay;
