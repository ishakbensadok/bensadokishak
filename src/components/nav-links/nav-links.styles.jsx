import { styled } from 'styled-components';
import { NavLink } from '../nav-link/nav-link.styles';

export const NavLinks = styled.ul`
  height: 100%;
  position: relative;
  width: 100%;
  display: none;

  &:hover ${NavLink}.clicked:not(:hover)::after {
    opacity: 0;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    &.hidden {
      display: none;
    }
  }
`;
