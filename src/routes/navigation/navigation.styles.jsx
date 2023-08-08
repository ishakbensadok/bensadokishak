import styled from 'styled-components';

import { NavLink } from '../../components/nav-link/nav-link.styles';

export const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 100%;
  transition: all 0.3s;

  .nav__links-container {
    display: flex;
    align-items: center;
  }

  & ${NavLink}:first-of-type {
    display: none;
  }
  @media screen and (min-width: 768px) {
    height: 80px;
  }
`;
