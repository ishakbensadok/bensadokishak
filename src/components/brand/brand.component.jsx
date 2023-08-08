import { useContext } from 'react';

// import { NavigationContext } from '../../contexts/navigation.context';
import { MenuContext } from '../../contexts/menu.context';
import { CodeBy, CopyRight, NavBrand } from './brand.styles.jsx';

const Brand = () => {
  // const { setNavLinksState, getNavLinksState } = useContext(NavigationContext);
  const { setIsMenuOpen } = useContext(MenuContext);

  const handleClick = () => {
    // setNavLinksState(getNavLinksState('Home'));
    setIsMenuOpen(false);
  };
  return (
    <NavBrand onClick={handleClick} to='/'>
      <CopyRight>&#169;</CopyRight>
      <div>
        <CodeBy>Code by Ishak Bensadok</CodeBy>
      </div>
    </NavBrand>
  );
};

export default Brand;
