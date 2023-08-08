import { Outlet } from 'react-router-dom';

import NavigationLinks from '../../components/nav-links/nav-links.component';
import Brand from '../../components/brand/brand.component';
import Menu from '../../components/menu/menu.component';
import { Nav } from './navigation.styles.jsx';
import FixNav from '../../components/fix-nav/fix-nav.component';
import LoadingScreen from '../../components/loading-screen/loading-screen.component';
const Navigation = () => {
  console.log('Navigation re/render');

  return (
    <>
      <Nav>
        <Brand />
        <div className='nav__links-container'>
          <Menu />
          <NavigationLinks />
        </div>
      </Nav>
      <Outlet />

      {/* TODO  */}
      {/* <LoadingScreen />
      <FixNav /> */}
      {/*  */}
    </>
  );
};

export default Navigation;
