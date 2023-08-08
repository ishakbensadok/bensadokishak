import { NavLink } from './nav-link.styles.jsx';

import { Link } from 'react-router-dom';
const NavigationLink = ({ children, className, ...other }) => {
  return (
    <NavLink className={`${className}`}>
      <Link {...other}>{children}</Link>
    </NavLink>
  );
};

export default NavigationLink;
